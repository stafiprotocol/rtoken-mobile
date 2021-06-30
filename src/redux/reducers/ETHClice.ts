import { createSlice } from "@reduxjs/toolkit";
import EthServer from "../../servers/eth/index";
import { AppThunk } from "../store";

const ethServer = new EthServer();

const ETHClice = createSlice({
  name: "ETHModule",
  initialState: {
    ercETHBalance: "--",
    ercFISBalance: "--",
    ercRFISBalance: "--",
    ercRKSMBalance: "--",
    ercRDOTBalance: "--",
    ercRATOMBalance: "--",
    ercRSOLBalance: "--",
    FISErc20Allowance: "--",
    RFISErc20Allowance: "--",
    RKSMErc20Allowance: "--",
    RDOTErc20Allowance: "--",
    RATOMErc20Allowance: "--",
    RSOLErc20Allowance: "--",
  },
  reducers: {
    setErcETHBalance(state, { payload }) {
      state.ercETHBalance = payload;
    },
    setErcFISBalance(state, { payload }) {
      state.ercFISBalance = payload;
    },
    setErcRFISBalance(state, { payload }) {
      state.ercRFISBalance = payload;
    },
    setErcRKSMBalance(state, { payload }) {
      state.ercRKSMBalance = payload;
    },
    setErcRDOTBalance(state, { payload }) {
      state.ercRDOTBalance = payload;
    },
    setErcRATOMBalance(state, { payload }) {
      state.ercRATOMBalance = payload;
    },
    setErcRSOLBalance(state, { payload }) {
      state.ercRSOLBalance = payload;
    },
    setFISErc20Allowance(state, { payload }) {
      state.FISErc20Allowance = payload;
    },
    setRFISErc20Allowance(state, { payload }) {
      state.RFISErc20Allowance = payload;
    },
    setRKSMErc20Allowance(state, { payload }) {
      state.RKSMErc20Allowance = payload;
    },
    setRDOTErc20Allowance(state, { payload }) {
      state.RDOTErc20Allowance = payload;
    },
    setRATOMErc20Allowance(state, { payload }) {
      state.RATOMErc20Allowance = payload;
    },
    setRSOLErc20Allowance(state, { payload }) {
      state.RSOLErc20Allowance = payload;
    },
  },
});

export const {
  setErcETHBalance,
  setErcFISBalance,
  setErcRFISBalance,
  setErcRKSMBalance,
  setErcRDOTBalance,
  setErcRATOMBalance,
  setErcRSOLBalance,
  setFISErc20Allowance,
  setRFISErc20Allowance,
  setRKSMErc20Allowance,
  setRDOTErc20Allowance,
  setRATOMErc20Allowance,
  setRSOLErc20Allowance,
} = ETHClice.actions;

export const getAssetBalanceAll = (): AppThunk => (dispatch, getState) => {
  dispatch(getETHAssetBalance());
};
export const getErc20Allowances = (): AppThunk => (dispatch, getState) => {
  dispatch(getFISErc20Allowance());
  dispatch(getRFISErc20Allowance());
};
export const getETHAssetBalance = (): AppThunk => (dispatch, getState) => {
  if (getState().rETHModule.ethAccount) {
    const address = getState().rETHModule.ethAccount.address;
    getAssetBalance(
      address,
      ethServer.getRETHTokenAbi(),
      ethServer.getRETHTokenAddress(),
      (v: any) => {
        dispatch(setErcETHBalance(v));
      }
    );
  }
};

// export const getFISAssetBalance=():AppThunk=>(dispatch,getState)=>{
//     if(getState().rETHModule.ethAccount){
//       const address=getState().rETHModule.ethAccount.address;
//       getAssetBalance(address,fisServer.getFISTokenAbi(), fisServer.getFISTokenAddress(),(v:any)=>{
//         dispatch(setErcFISBalance(v))
//       })
//     }
//   }
//   export const getRFISAssetBalance=():AppThunk=>(dispatch,getState)=>{
//     if(getState().rETHModule.ethAccount){
//       const address=getState().rETHModule.ethAccount.address;
//       getAssetBalance(address,fisServer.getRFISTokenAbi(), fisServer.getRFISTokenAddress(),(v:any)=>{
//         dispatch(setErcRFISBalance(v))
//       })
//     }
//   }

export const getAssetBalance = (
  ethAddress: string,
  getTokenAbi: string,
  getTokenAddress: string,
  cb?: Function
) => {
  let web3 = ethServer.getWeb3();
  let contract = new web3.eth.Contract(getTokenAbi, getTokenAddress, {
    from: ethAddress,
  });
  try {
    contract.methods
      .balanceOf(ethAddress)
      .call()
      .then((balance: any) => {
        let rbalance = web3.utils.fromWei(balance, "ether");
        cb && cb(rbalance);
      })
      .catch((e: any) => {
        console.error(e);
      });
  } catch (e: any) {
    console.error(e);
  }
};

export const getFISErc20Allowance = (): AppThunk => (dispatch, getState) => {
  // if(getState().rETHModule.ethAccount){
  //   const address=getState().rETHModule.ethAccount.address;
  //   getErc20Allowance(address,fisServer.getFISTokenAbi(), fisServer.getFISTokenAddress(),(v:any)=>{
  //     dispatch(setFISErc20Allowance(v))
  //   })
  // }
};
export const getRFISErc20Allowance = (): AppThunk => (dispatch, getState) => {
  // if(getState().rETHModule.ethAccount){
  //   const address=getState().rETHModule.ethAccount.address;
  //   getErc20Allowance(address,fisServer.getRFISTokenAbi(), fisServer.getRFISTokenAddress(),(v:any)=>{
  //     dispatch(setRFISErc20Allowance(v))
  //   })
  // }
};

const getErc20Allowance = async (
  ethAddress: string,
  getTokenAbi: string,
  getTokenAddress: string,
  cb?: Function
) => {
  // let web3 = ethServer.getWeb3();
  // let contract = new web3.eth.Contract(getTokenAbi, getTokenAddress, {
  //   from: ethAddress,
  // });
  // try {
  //   const allowance = await contract.methods
  //     .allowance(ethAddress, bridgeServer.getBridgeErc20HandlerAddress())
  //     .call();
  //   cb && cb(allowance);
  // } catch (e: any) {
  //   console.error(e);
  // }
};

export const clickSwapToErc20Link = (
  selectedToken: string,
  ethAddress: string
) => {
  let tokenAddress = "";
  // if (selectedToken == 'FIS') {
  //   tokenAddress = fisServer.getFISTokenAddress();
  // } else if (selectedToken == 'rFIS') {
  //   tokenAddress = fisServer.getRFISTokenAddress();
  // }
  return "https://etherscan.io/token/" + tokenAddress + "?a=" + ethAddress;
};
export const clickSwapToNativeLink = (stafiAddress: string) => {
  return "https://stafi.subscan.io/account/" + stafiAddress;
};
export default ETHClice.reducer;
