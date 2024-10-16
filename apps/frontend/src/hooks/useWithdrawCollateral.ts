import {
  ErrorToast,
  PendingToast,
  TransactionSuccessToast,
} from '@/components/Toasts';
import { appConfig } from '@/configs';
import type { PriceDataUpdateInput } from '@/contract-types/Market';
import { useMarketContract } from '@/contracts/useMarketContract';
import { usePythContract } from '@/contracts/usePythContract';
import {
  selectChangeInputDialogOpen,
  selectChangeSuccessDialogOpen,
  selectChangeSuccessDialogTransactionId,
  selectChangeTokenAmount,
  selectMarket,
  useMarketStore,
} from '@/stores';
import { useAccount } from '@fuels/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import BigNumber from 'bignumber.js';
import { toast } from 'react-toastify';
import { useCollateralConfigurations } from './useCollateralConfigurations';

type useWithdrawCollateralProps = {
  actionTokenAssetId: string | null | undefined;
};

export const useWithdrawCollateral = ({
  actionTokenAssetId,
}: useWithdrawCollateralProps) => {
  const { account } = useAccount();
  const { data: collateralConfigurations } = useCollateralConfigurations();
  const market = useMarketStore(selectMarket);
  const changeTokenAmount = useMarketStore(selectChangeTokenAmount);
  const changeInputDialogOpen = useMarketStore(selectChangeInputDialogOpen);
  const changeSuccessDialogOpen = useMarketStore(selectChangeSuccessDialogOpen);
  const changeSuccessDialogTransactionId = useMarketStore(
    selectChangeSuccessDialogTransactionId
  );

  const queryClient = useQueryClient();
  const marketContract = useMarketContract(market);
  const pythContract = usePythContract(market);

  return useMutation({
    mutationKey: [
      'withdrawCollateral',
      actionTokenAssetId,
      account,
      marketContract?.account?.address,
      marketContract?.id,
      pythContract?.account?.address,
      pythContract?.id,
    ],
    mutationFn: async ({
      tokenAmount,
      priceUpdateData,
    }: {
      tokenAmount: BigNumber;
      priceUpdateData: PriceDataUpdateInput;
    }) => {
      if (
        !account ||
        !actionTokenAssetId ||
        !collateralConfigurations ||
        !marketContract ||
        !pythContract
      ) {
        return null;
      }

      const amount = new BigNumber(tokenAmount).times(
        10 ** collateralConfigurations[actionTokenAssetId].decimals
      );

      const { waitForResult } = await marketContract.functions
        .withdraw_collateral(
          { bits: actionTokenAssetId },
          amount.toFixed(0),
          priceUpdateData
        )
        .callParams({
          forward: {
            amount: priceUpdateData.update_fee,
            assetId: appConfig.baseAssetId,
          },
        })
        .addContracts([pythContract])
        .call();

      const transactionResult = await toast.promise(waitForResult(), {
        pending: {
          render: PendingToast(),
        },
      });

      return transactionResult.transactionId;
    },

    onSuccess: (data) => {
      if (data) {
        TransactionSuccessToast({ transactionId: data });
        changeSuccessDialogTransactionId(data);
        changeInputDialogOpen(false);
        changeTokenAmount(BigNumber(0));
        changeSuccessDialogOpen(true);
      }
    },
    onError: (error) => {
      ErrorToast({ error: error.message });
    },
    onSettled: () => {
      // Invalidate queries
      queryClient.invalidateQueries({
        queryKey: [
          'collateralAssets',
          account,
          marketContract?.account?.address,
          marketContract?.id,
        ],
      });

      // Invalidate Fuel balance query
      queryClient.invalidateQueries({
        exact: true,
        queryKey: ['balance', account, actionTokenAssetId],
      });
    },
  });
};
