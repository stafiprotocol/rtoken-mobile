import { createSlice } from "@reduxjs/toolkit";
import { rpcServer as Rpc } from "../../util/rpc";
import { AppThunk } from "../store";

export enum processStatus {
  default = 0,
  success = 1,
  failure = 2,
  loading = 3,
}
//0|1|2|4

export const process = {
  rSymbol: "",
  sending: {
    brocasting: processStatus.default, // 0|1|2|3
    packing: processStatus.default, // 0|1|2|3
    finalizing: processStatus.default, // 0|1|2|3
    checkTx: "", //
  },
  staking: {
    brocasting: processStatus.default, // 0|1|2|3
    packing: processStatus.default, // 0|1|2|3
    finalizing: processStatus.default, // 0|1|2|3
    checkTx: "", //
  },
  minting: {
    minting: processStatus.default, // 0|1|2|3
    checkTx: "", //
  },
};
const globalClice = createSlice({
  name: "globalModule",
  initialState: {
    provinces: [],
    processSlider: false,
    accounts: [],
    stafiStakerApr: "",
    process: process,
    timeOutFunc: null,

    loading: false,
  },
  reducers: {
    setProcessSlider(state, { payload }) {
      // if(payload==false && state.timeOutFunc){
      //   clearTimeout(state.timeOutFunc);
      // }
      if (state.processSlider !== payload) {
        state.processSlider = payload;
      }
    },
    setAccounts(state, { payload }) {
      state.accounts = payload;
    },
    setStafiStakerApr(state, { payload }) {
      state.stafiStakerApr = payload;
    },
    initProcess(state, { payload }) {
      if (payload) {
        state.process = { ...process, ...payload };
      } else {
        state.process = process;
      }
    },
    setProcessType(state, { payload }) {
      state.process.rSymbol = payload;
    },
    setProcessSending(state, { payload }) {
      state.process.sending = { ...state.process.sending, ...payload };
    },
    setProcessStaking(state, { payload }) {
      state.process.staking = { ...state.process.staking, ...payload };
    },
    setProcessMinting(state, { payload }) {
      state.process.minting = { ...state.process.minting, ...payload };
    },
    setTimeOutFunc(state, { payload }) {
      state.timeOutFunc = payload;
    },
    setLoading(state, { payload }) {
      state.loading = payload;
    },
  },
});
export const {
  setAccounts,
  setProcessSlider,
  setStafiStakerApr,
  setProcessSending,
  setProcessStaking,
  setProcessMinting,
  setProcessType,
  setTimeOutFunc,
  initProcess,
  setLoading,
} = globalClice.actions;

export const fetchStafiStakerApr =
  (cb?: Function): AppThunk =>
  async (dispatch, getState) => {
    const result = await Rpc.fetchStafiStakerApr({});
    if (result.status === "80000") {
      if (result.data && result.data.apr) {
        const apr = result.data.apr + "%";
        dispatch(setStafiStakerApr(apr));
        cb && cb();
      }
    }
  };

export const gSetTimeOut =
  (cb: Function, time: number): AppThunk =>
  (dispatch, getState) => {
    const timeoutFunc = setTimeout(cb, time);
    dispatch(setTimeOutFunc(timeoutFunc));
  };

export const gClearTimeOut = (): AppThunk => (dispatch, getState) => {
  const time = getState().globalModule.timeOutFunc;
  if (time) {
    clearTimeout(time);
  }
};

export default globalClice.reducer;
