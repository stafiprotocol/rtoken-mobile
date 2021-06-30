export const isdev = () => {
  let host = window.location.host;
  var local =
    /192\.168\./.test(host) || /127\.0\./.test(host) || /localhost/.test(host);
  let demo = /test/.test(host);
  return local || demo;
};


export default {
  polkadotChain: () => {
    if (!isdev()) {
      return 'wss://rpc.polkadot.io';
    } else {
      return 'wss://polkadot-test-rpc.stafi.io';
    }
  },
  stafiChain: () => {
    if (!isdev()) {
      return 'wss://mainnet-rpc.stafi.io';
    } else {
      return 'wss://stafi-seiya.stafi.io';
    }
  },
  api: () => {
    if (!isdev()) {
      return 'https://rtoken-api.stafi.io';
    } else {
      return 'https://rtoken-api.stafi.io';
    }
  },
  stafiApi: 'https://drop.stafi.io',
  rETHTokenAddress: () => {
    if (!isdev()) {
      return '0x9559aaa82d9649c7a7b220e7c461d2e74c9a3593';
    } else {
      return '0x0ed54e1b7b3be1c02d91b4fa8bf5655f3fbe08b4';
    }
  },
  stafiUserDepositAddress: () => {
    if (!isdev()) {
      return '0x430cf6dd3e289adae63b50ff661d6bba2dbb3f28';
    } else {
      return '0x6b3d7a220b96f3be9ff48e6be36a7e16f46b1393';
    }
  },
  stafiNodeDepositAddress: () => {
    if (!isdev()) {
      return '0x50db2ce93c8b1f6771c985b6b840b587349496a0';
    } else {
      return '0xf072c7e6e36639870c3986196237a97fcccb0331';
    }
  },
  stafiNodeManagerAddress: () => {
    if (!isdev()) {
      return '0x4fd35afa32310eaa1354768be6ad2c5c6a62d572';
    } else {
      return '0x68b749894c5484687916d57616b5214cf9fc63cb';
    }
  },
  stafiStakingPoolManagerAddress: () => {
    if (!isdev()) {
      return '0x1c9890c9cb9925a8651c10b5f557d744bafbed5a';
    } else {
      return '0x3f1ea0333e9e1caba4ff3f4d44c0808a2eaa8468';
    }
  },
  stafiStakingPoolQueueAddress: () => {
    if (!isdev()) {
      return '0xc59ea6cebb8089a0330800f50946610977c4fc96';
    } else {
      return '0x40a0f8f23dbc635b8e54c8b785c62269cad8ebf8';
    }
  },
  rBridgeApp: () => {
    if (!isdev()) {
      return 'https://rtoken.stafi.io/rbridge';
    } else {
      return 'https://test-rtoken.stafi.io/rbridge';
    }
  },
  rFISTokenAddress: () => {
    if (!isdev()) {
      return '0xc82eb6dea0c93edb8b697b89ad1b13d19469d635';
    } else {
      return '0xc372e985fda306cfe0e903657de808cf757f536f';
    }
  },
  FISTokenAddress: () => {
    if (!isdev()) {
      return '0xef3a930e1ffffacd2fc13434ac81bd278b0ecc8d';
    } else {
      return '0x64591e3f2dbf46cdfb398a0d9ba81f41b7cbd449';
    }
  },
  rKSMTokenAddress: () => {
    if (!isdev()) {
      return '0x3c3842c4d3037ae121d69ea1e7a0b61413be806c';
    } else {
      return '0xd1d458c1c3579033a65db4ca2f06c12573aa5e27';
    }
  },
  rDOTTokenAddress: () => {
    if (!isdev()) {
      return '0x505f5a4ff10985fe9f93f2ae3501da5fe665f08a';
    } else {
      return '0x6aef17cea6e6841f1957f9fde6538ac391d55636';
    }
  },
  rATOMTokenAddress: () => {
    if (!isdev()) {
      return '0xd01cb3d113a864763dd3977fe1e725860013b0ed';
    } else {
      return '0xd363ed9ee73c8b6bd048ae188000be454f7b7925';
    }
  },
  rSOLTokenAddress: () => {
    if (!isdev()) {
      return '0x08841b9cba30e80a0e51df13b174f362f90e3df1';
    } else {
      return '0x08841b9cba30e80a0e51df13b174f362f90e3df1';
    }
  },
  erc20HandlerAddress: () => {
    if (!isdev()) {
      return '0x2b6b6fce3af32efe4430e446717bda72b95ebb9a';
    } else {
      return '0x05da428a68da64a2b085a4d2d4279d952d7b647a';
    }
  },
  bridgeAddress: () => {
    if (!isdev()) {
      return '0xc0609ea6e4345555276fac1636b5c27ebc17d817';
    } else {
      return '0xc3ce28a291def0f5762c545431036a6819b8d6d2';
    }
  },
  txHashAndBlockhashURl: {
    dotURL:
      'https://docs.stafi.io/rproduct/rdot-solution/rdot-staker-guide/recovery-function#2-the-way-to-get-txhash-and-blockhash',
    ksmURL:
      'https://docs.stafi.io/rproduct/rksm-solution/staker-guide/recovery-function#2-the-way-to-get-txhash-and-blockhash',
    atomURL: 'https://docs.stafi.io/rproduct/ratom-solution/staker-guide/recovery-function#2-the-way-to-get-txhash',
    solURL: 'https://docs.stafi.io/rproduct/ratom-solution/staker-guide/recovery-function#2-the-way-to-get-txhash',
  },
  rAtomChainId: () => {
    if (!isdev()) {
      return 'cosmoshub-4';
    } else {
      return 'stargate-final';
    }
  },
  rAtomCosmosChainRpc: () => {
    if (!isdev()) {
      return 'https://cosmos-rpc1.stafi.io';
    } else {
      return 'https://testcosmosrpc.wetez.io';
    }
  },
  rAtomDenom: () => {
    if (!isdev()) {
      return 'uatom';
    } else {
      return 'umuon';
    }
  },
  rAtomAignature: '0x00',
  curve: {
    rethURL: 'https://curve.fi/reth',
  },
  uniswap: {
    rethURL:
      'https://app.uniswap.org/#/swap?inputCurrency=0x9559aaa82d9649c7a7b220e7c461d2e74c9a3593&outputCurrency=ETH',
    rethURL_pair: 'https://v2.info.uniswap.org/pair/0x5f49da032defe35489ddb205f3dc66d8a76318b3',
    rfisURL:
      'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xc82eb6dea0c93edb8b697b89ad1b13d19469d635',
    fisURL:
      'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xef3a930e1ffffacd2fc13434ac81bd278b0ecc8d',
    rdotURL:
      'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x505f5a4ff10985fe9f93f2ae3501da5fe665f08a',
    rksmURL:
      'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x3c3842c4d3037ae121d69ea1e7a0b61413be806c',
    ratomURL:
      'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xd01cb3d113a864763dd3977fe1e725860013b0ed',
    rsolURL:
      'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x08841b9cbA30e80A0E51df13b174F362F90E3dF1',
  },
  commonAbi: () => {
    const abi =
      '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
    return JSON.parse(abi);
  },
};
