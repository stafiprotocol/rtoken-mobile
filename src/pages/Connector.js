import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { message } from "antd";
import React, { useEffect } from "react";
import styled from "styled-components";
import imtoken_logo from "../assets/imtoken_logo.svg";
import { Text } from "../components/commonComponents";
import { isdev } from "../config";
import { useAppDispatch, useAppSelector } from "../hooks";
import { handleEthAccount } from "../redux/reducers/rETHClice";
import { getRem } from "../util/remUtil";

const injected = new InjectedConnector({
  supportedChainIds: isdev
    ? [
        5, // Goerli
        // 3, // Ropsten
        // 4, // Rinkeby
        // 42, // Kovan
      ]
    : [
        1, // Mainet
      ],
});

export default function Connector(props) {
  const { activate, active, account } = useWeb3React();

  const appDispatch = useAppDispatch();
  const { ethAccountAddress } = useAppSelector((state) => {
    return {
      ethAccountAddress:
        state.rETHModule.ethAccount && state.rETHModule.ethAccount.address,
    };
  });

  useEffect(() => {
    if (!ethAccountAddress) {
      clickConnect();
    }
  }, [!!ethAccountAddress]);

  useEffect(() => {
    console.log(
      "active account ethAccountAddress: ",
      active,
      account,
      ethAccountAddress
    );
    if (account) {
      appDispatch(handleEthAccount(account));
    }
  }, [appDispatch, active, account, ethAccountAddress]);

  const clickConnect = async () => {
    // if (!window.imToken) {
    //   message.warn("Please open dapp in imToken wallet");
    //     return;
    // }
    try {
      if (active) return alert("Already linked");
      await activate(injected, (walletError) => {
        if (walletError.message.includes("user_canceled")) {
          return message.error(
            "You canceled the operation, please refresh and try to reauthorize."
          );
        }
        message.error(`Failed to connect: ${walletError.message}`);
      });
    } catch (err) {
      console.log(err);
      message.error("Failed to connect Wallet.");
    }
  };

  return (
    <ConnectButton onClick={clickConnect}>
      <Icon src={imtoken_logo} />

      <Text size={getRem(50)} sameLineHeight left={getRem(40)}>
        Connect Wallet
      </Text>
    </ConnectButton>
  );
}

const ConnectButton = styled.div({
  borderWidth: getRem(1),
  borderColor: "#bfbfbf",
  borderStyle: "solid",
  borderRadius: getRem(10),
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: getRem(20),
  paddingBottom: getRem(20),
  marginTop: getRem(250),
  marginLeft: getRem(150),
  marginRight: getRem(150),
});

const Icon = styled.img({
  width: getRem(80),
  height: getRem(80),
});
