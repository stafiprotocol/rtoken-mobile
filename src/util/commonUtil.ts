import { numberUtil } from "./numberUtil";

export enum Keys {
  FisAccountKey = "stafi_fis_account",
  FisProcessParameter = "stafi_fis_processParameter",
  FisStakeHash = "stafi_fis_stakeHash",
  DotAccountKey = "stafi_dot_account",
  DotProcessParameter = "stafi_dot_processParameter",
  DotStakeHash = "stafi_dot_stakeHash",

  KsmAccountKey = "stafi_ksm_account",
  KsmProcessParameter = "stafi_ksm_processParameter",
  KsmStakeHash = "stafi_ksm_stakeHash",

  AtomAccountKey = "stafi_atom_account",
  AtomProcessParameter = "stafi_atom_processParameter",
  AtomStakeHash = "stafi_atom_stakeHash",

  SolAccountKey = "stafi_sol_account",
  SolProcessParameter = "stafi_sol_processParameter",
  SolStakeHash = "stafi_sol_stakeHash",

  MetamaskAccountKey = "stafi_Metamask_account",
  StafiNoticeKey = "stafi_notice",

  rEthCurrentPoolPrefix = "current:pool:",
  poolPubKeyPrefix = "poolpubkey:",
}

export const regular = {
  urlParameterReg: /([^?&=]+)=([^&]+)/g,
  phoneNumberReg: /^\d+$/,
  mobilePhoneReg: /^1[3456789]\d{9}$/,
  number: /\d{1,3}(?=(\d{3})+$)/g,
  nonNumber: /^([1-9][\d]*|0)(\.[\d]+)?$/,
  nonInteger: /^([^0][0-9]+|0)$/,
  integer: /^([0-9]+|0)$/,
  positiveInteger: /^[1-9]\d*$/,
  emailReg: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
  number2: /^\d+(\.)?(\d+)?$/,
};

// Limit only 0~9 and . can be input
export const parseNumber = (value: any) => {
  if (!value && value !== 0) return;
  return value.replace(regular.nonNumber, "");
};

// Limit only number can be input
export const parseInterge = (value: any) => {
  if (!value && value !== 0) return;
  return value.replace(regular.nonInteger, "");
};

export const setSessionStorageItem = (key: string, val: any) => {
  sessionStorage.setItem(key, JSON.stringify(val));
};

export const getSessionStorageItem = (key: string) => {
  const value = sessionStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
  return null;
};

export const setLocalStorageItem = (key: string, val: any) => {
  localStorage.setItem(key, JSON.stringify(val));
};

export const getLocalStorageItem = (key: string) => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
  return null;
};

export const removeLocalStorageItem = (key: string) => {
  localStorage.removeItem(key);
};

export const ratioToAmount = (amount: number, ratio: number) => {
  if (amount && ratio) {
    return numberUtil.handleFisAmountToFixed(amount / ratio);
  }
  return 0;
};

export const dropRateToAmount = (amount: number, dropRate: number) => {
  if (amount && dropRate) {
    return numberUtil.handleFisAmountToFixed(amount * dropRate);
  }
  return 0;
};

export const stafi_uuid = () => {
  return Date.now().toString(36);
};

export function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const localStorage_poolPubKey = {
  /**
   * set pool pubkey
   */
  setPoolPubKey: function (poolAddress: string | null, pubkey: string) {
    setLocalStorageItem(Keys.poolPubKeyPrefix + poolAddress, pubkey);
  },

  /**
   * get pool pubkey
   */
  getPoolPubKey: function (poolAddress: string) {
    return getLocalStorageItem(Keys.poolPubKeyPrefix + poolAddress);
  },
};

export const localStorage_currentEthPool = {
  /**
   * set current pool
   */
  setCurrentEthPool: function (validatorAddress: string, poolAddress: string) {
    // Keys.rEthCurrentPoolPrefix + validatorAddress, poolAddress;
  },

  /**
   * get current pool
   */
  getCurrentEthPool: function (validatorAddress: string) {
    return getLocalStorageItem(Keys.rEthCurrentPoolPrefix + validatorAddress);
  },
};

export const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const desEcbEncrypt = (str: any) => {
  var C = require("crypto-js"),
    key = "unlocking liquidity of Staked";
  var keyHex = C.enc.Utf8.parse(key);
  const encrypted = C.DES.encrypt(str, keyHex, {
    mode: C.mode.ECB,
    padding: C.pad.Pkcs7,
  });
  return encrypted.toString();
};
