/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.92.1
  Forc version: 0.61.2
  Fuel-Core version: 0.31.0
*/

import { Interface, Contract, ContractFactory } from "fuels";
import type { Provider, Account, AbstractAddress, BytesLike, DeployContractOptions, StorageSlot, DeployContractResult } from "fuels";
import type { TokenAbi, TokenAbiInterface } from "../TokenAbi";

const _abi = {
  "encoding": "1",
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "enum Identity",
      "components": [
        {
          "name": "Address",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "ContractId",
          "type": 10,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "enum Option",
      "components": [
        {
          "name": "None",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Some",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        4
      ]
    },
    {
      "typeId": 4,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "raw untyped ptr",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "str",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "struct Address",
      "components": [
        {
          "name": "bits",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "struct AssetId",
      "components": [
        {
          "name": "bits",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "struct Bytes",
      "components": [
        {
          "name": "buf",
          "type": 11,
          "typeArguments": null
        },
        {
          "name": "len",
          "type": 13,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 10,
      "type": "struct ContractId",
      "components": [
        {
          "name": "bits",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 11,
      "type": "struct RawBytes",
      "components": [
        {
          "name": "ptr",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 13,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 12,
      "type": "struct String",
      "components": [
        {
          "name": "bytes",
          "type": 9,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 13,
      "type": "u64",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 14,
      "type": "u8",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "asset",
          "type": 8,
          "typeArguments": null
        }
      ],
      "name": "decimals",
      "output": {
        "name": "",
        "type": 3,
        "typeArguments": [
          {
            "name": "",
            "type": 14,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Returns the number of decimals an asset uses."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Arguments"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `asset`: [AssetId] - The asset of which to query the decimals."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Returns"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * [Option<u8>] - The decimal precision used by `asset`."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `1`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Examples"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```sway"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use src20::SRC20;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use std::constants::DEFAULT_SUB_ID;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " fn foo(contract_id: ContractId) {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let src_20_abi = abi(SRC20, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let decimals = src_20_abi.decimals(DEFAULT_SUB_ID);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     assert(decimals.unwrap() == 9u8);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "type": 8,
          "typeArguments": null
        }
      ],
      "name": "name",
      "output": {
        "name": "",
        "type": 3,
        "typeArguments": [
          {
            "name": "",
            "type": 12,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Returns the name of an asset."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Arguments"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `asset`: [AssetId] - The asset of which to query the name."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Returns"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * [Option<String>] - The name of `asset`."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `1`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Examples"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```sway"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use src20::SRC20;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use std::constants::DEFAULT_SUB_ID;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " fn foo(contract_id: ContractId) {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let src_20_abi = abi(SRC20, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let name = src_20_abi.name(DEFAULT_SUB_ID);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     assert(name.is_some());"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "type": 8,
          "typeArguments": null
        }
      ],
      "name": "symbol",
      "output": {
        "name": "",
        "type": 3,
        "typeArguments": [
          {
            "name": "",
            "type": 12,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Returns the symbol of am asset."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Arguments"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `asset`: [AssetId] - The asset of which to query the symbol."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Returns"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * [Option<String>] - The symbol of `asset`."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `1`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Examples"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```sway"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use src20::SRC20;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use std::constants::DEFAULT_SUB_ID;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " fn foo(contract_id: ContractId) {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let src_20_abi = abi(SRC20, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let symbol = src_20_abi.symbol(DEFAULT_SUB_ID);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     assert(symbol.is_some());"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "total_assets",
      "output": {
        "name": "",
        "type": 13,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Returns the total number of individual assets minted  by this contract."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Additional Information"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " For this single asset contract, this is always one."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Returns"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * [u64] - The number of assets that this contract has minted."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `1`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Examples"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```sway"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use src20::SRC20;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " fn foo(contract_id: ContractId) {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let src_20_abi = abi(SRC20, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let assets = src_20_abi.total_assets();"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     assert(assets == 1);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "type": 8,
          "typeArguments": null
        }
      ],
      "name": "total_supply",
      "output": {
        "name": "",
        "type": 3,
        "typeArguments": [
          {
            "name": "",
            "type": 13,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Returns the total supply of coins for an asset."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Arguments"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `asset`: [AssetId] - The asset of which to query the total supply."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Returns"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * [Option<u64>] - The total supply of an `asset`."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `1`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Examples"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```sway"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use src20::SRC20;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use std::constants::DEFAULT_SUB_ID;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " fn foo(contract_id: ContractId) {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let src_20_abi = abi(SRC20, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let supply = src_20_abi.total_supply(DEFAULT_SUB_ID);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     assert(supply.unwrap() != 0);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "sub_id",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 13,
          "typeArguments": null
        }
      ],
      "name": "burn",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Unconditionally burns assets sent with the `sub_id` sub-identifier."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Arguments"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `sub_id`: [SubId] - The sub-identifier of the asset to burn."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `amount`: [u64] - The quantity of coins to burn."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `1`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Writes: `1`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Reverts"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When the transaction did not include at least `amount` coins."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When the asset included in the transaction does not have the SubId `sub_id`."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Examples"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```sway"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use src3::SRC3;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use std::constants::DEFAULT_SUB_ID;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " fn foo(contract_id: ContractId, asset_id: AssetId) {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let contract_abi = abi(SRC3, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     contract_abi {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "         gas: 10000,"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "         coins: 100,"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "         asset_id: asset_id,"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     }.burn(DEFAULT_SUB_ID, 100);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```"
          ]
        },
        {
          "name": "payable",
          "arguments": []
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "recipient",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "sub_id",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 13,
          "typeArguments": null
        }
      ],
      "name": "mint",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Unconditionally mints new assets using the `sub_id` sub-identifier."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Arguments"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `recipient`: [Identity] - The user to which the newly minted asset is transferred to."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `sub_id`: [SubId] - The sub-identifier of the newly minted asset."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `amount`: [u64] - The quantity of coins to mint."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Number of Storage Accesses"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Reads: `2`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * Writes: `2`"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Examples"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```sway"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use src3::SRC3;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " use std::constants::DEFAULT_SUB_ID;"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " fn foo(contract_id: ContractId) {"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     let contract_abi = abi(SRC3, contract_id);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            "     contract_abi.mint(Identity::ContractId(contract_id), DEFAULT_SUB_ID, 100);"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " }"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " ```"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": "10098701174489624218",
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": null
      }
    }
  ],
  "messagesTypes": [],
  "configurables": []
};

const _storageSlots: StorageSlot[] = [
  {
    "key": "93b67ee4f0f76b71456fb4385c86aec15689e1ce5f6f6ac63b71716afa052998",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export const TokenAbi__factory = {
  abi: _abi,

  storageSlots: _storageSlots,

  createInterface(): TokenAbiInterface {
    return new Interface(_abi) as unknown as TokenAbiInterface
  },

  connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): TokenAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as TokenAbi
  },

  async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<DeployContractResult<TokenAbi>> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    return factory.deployContract<TokenAbi>({
      storageSlots: _storageSlots,
      ...options,
    });
  },
}
