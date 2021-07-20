export const isdev = () => {
  let env = process.env.REACT_APP_ENV;
  return !env || env !== "prd";
};

const Config = {
  api: () => {
    if (!isdev()) {
      return "https://rtoken-api.stafi.io";
    } else {
      return "https://rtoken-api.stafi.io";
    }
  },
  api2: () => {
    if (!isdev()) {
      return "https://rtoken-api2.stafi.io";
    } else {
      return "https://test-rtoken-api2.stafi.io";
    }
  },
  dropApi: () => {
    if (!isdev()) {
      return "https://test-drop-api.stafi.io/api";
    } else {
      return "https://test-drop-api.stafi.io/api";
    }
  },
  stafiApi: "https://drop.stafi.io",
  rETHTokenAddress: () => {
    if (!isdev()) {
      return "0x9559aaa82d9649c7a7b220e7c461d2e74c9a3593";
    } else {
      return "0x0ed54e1b7b3be1c02d91b4fa8bf5655f3fbe08b4";
    }
  },
  stafiUserDepositAddress: () => {
    if (!isdev()) {
      return "0x430cf6dd3e289adae63b50ff661d6bba2dbb3f28";
    } else {
      return "0x6b3d7a220b96f3be9ff48e6be36a7e16f46b1393";
    }
  },
  dropContractAddress: () => {
    if (!isdev()) {
      return "";
    } else {
      return "0x9cea70ef9761b81ae78bbc14c6cb0b7fce1a0348";
    }
  },
  stafiNodeDepositAddress: () => {
    if (!isdev()) {
      return "0x50db2ce93c8b1f6771c985b6b840b587349496a0";
    } else {
      return "0xf072c7e6e36639870c3986196237a97fcccb0331";
    }
  },
  stafiNodeManagerAddress: () => {
    if (!isdev()) {
      return "0x4fd35afa32310eaa1354768be6ad2c5c6a62d572";
    } else {
      return "0x68b749894c5484687916d57616b5214cf9fc63cb";
    }
  },
  stafiStakingPoolManagerAddress: () => {
    if (!isdev()) {
      return "0x1c9890c9cb9925a8651c10b5f557d744bafbed5a";
    } else {
      return "0x3f1ea0333e9e1caba4ff3f4d44c0808a2eaa8468";
    }
  },
  stafiStakingPoolQueueAddress: () => {
    if (!isdev()) {
      return "0xc59ea6cebb8089a0330800f50946610977c4fc96";
    } else {
      return "0x40a0f8f23dbc635b8e54c8b785c62269cad8ebf8";
    }
  },
  rFISTokenAddress: () => {
    if (!isdev()) {
      return "0xc82eb6dea0c93edb8b697b89ad1b13d19469d635";
    } else {
      return "0xc372e985fda306cfe0e903657de808cf757f536f";
    }
  },
  FISTokenAddress: () => {
    if (!isdev()) {
      return "0xef3a930e1ffffacd2fc13434ac81bd278b0ecc8d";
    } else {
      return "0x64591e3f2dbf46cdfb398a0d9ba81f41b7cbd449";
    }
  },
  erc20HandlerAddress: () => {
    if (!isdev()) {
      return "0x2b6b6fce3af32efe4430e446717bda72b95ebb9a";
    } else {
      return "0x05da428a68da64a2b085a4d2d4279d952d7b647a";
    }
  },
  curve: {
    rethURL: "https://curve.fi/reth",
  },
};

export default Config;
