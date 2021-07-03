import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import eth from "../assets/eth.svg";
import CommonButton from "../components/CommonButton";
import { CardContainer, Text } from "../components/commonComponents";
import AmountInput from "../components/input/AmountInput";
import { useAppDispatch, useAppSelector } from "../hooks";
import { reloadData, send } from "../redux/reducers/rETHClice";
import EthServer from "../servers/eth";
import { ratioToAmount } from "../util/commonUtil";
import { numberUtil } from "../util/numberUtil";
import { getRem } from "../util/remUtil";
import Connector from "./Connector";

export default function Stake() {
  const history = useHistory();
  const ethServer = new EthServer();
  const [stakeAmount, setStakeAmount] = useState("");
  const [stakeDisabled, setStakeDisabled] = useState(true);
  const appDispatch = useAppDispatch();

  const {
    balance,
    balanceInWei,
    gasPrice,
    totalStakedAmount,
    ethApy,
    fisApy,
    ratio,
    ethAccountAddress,
  } = useAppSelector((state) => {
    return {
      balance: state.rETHModule.balance,
      balanceInWei: state.rETHModule.balanceInWei,
      gasPrice: state.rETHModule.gasPrice,
      totalStakedAmount: state.rETHModule.totalStakedAmount,
      ethApy: state.rETHModule.ethApy,
      fisApy: state.rETHModule.fisApy,
      ratio: state.rETHModule.ratio,
      ethAccountAddress:
        state.rETHModule.ethAccount && state.rETHModule.ethAccount.address,
    };
  });

  useEffect(() => {
    setStakeDisabled(!stakeAmount);
  }, [stakeAmount]);

  const setMax = () => {
    if (balanceInWei === "--") {
      return;
    }
    let web3 = ethServer.getWeb3();
    var BN = web3.utils.BN;
    if (new BN(balanceInWei).lt(new BN(gasPrice).mul(new BN(220000)))) {
      message.warn("No enough balance to pay gas fee");
      return;
    }
    const maxWithoutGasFee = web3.utils.fromWei(
      new BN(balanceInWei).sub(new BN(gasPrice).mul(new BN(220000))),
      "ether"
    );
    setStakeAmount(numberUtil.handleEthAmountToFixed(maxWithoutGasFee));
  };

  const stakeEth = () => {
    appDispatch(
      send(stakeAmount, () => {
        appDispatch(reloadData());
        history.push("/dashboard");
      })
    );
  };

  return (
    <Container>
      <Text bold size={getRem(80)} color={"#ffffff"} top={getRem(50)}>
        Stake ETH Get rETH
      </Text>
      <Text size={getRem(30)} color={"#c4c4c4"} top={getRem(4)}>
        Liquify Your Staking ETH 2.0 while earning interests
      </Text>

      <CardContainer
        top={getRem(50)}
        left={getRem(60)}
        right={getRem(60)}
        horizontalPadding={getRem(60)}
        verticalPadding={getRem(80)}
      >
        <AmountInput
          placeholder="ETH AMOUNT"
          value={stakeAmount}
          //   maxInput={props.transferrableAmount}
          maxInput={balance === "--" ? 0 : balance}
          onChange={(e) => {
            setStakeAmount(e);
          }}
          onClickMax={setMax}
          icon={eth}
        />

        <Text
          size={getRem(36)}
          color={"#c4c4c4"}
          top={getRem(30)}
          sameLineHeight
        >
          {totalStakedAmount} ETH is staked in pool contracts
        </Text>

        <Text
          size={getRem(36)}
          sameLineHeight
          color={"#ffffff"}
          top={getRem(80)}
        >
          ETH APR
        </Text>
        <Text
          bold
          size={getRem(70)}
          sameLineHeight
          color={"#00F3AB"}
          top={getRem(4)}
        >
          {ethApy}
        </Text>

        <Text
          size={getRem(36)}
          sameLineHeight
          color={"#ffffff"}
          top={getRem(70)}
        >
          FIS APR
        </Text>
        <Text
          bold
          size={getRem(70)}
          sameLineHeight
          color={"#00F3AB"}
          top={getRem(4)}
        >
          {fisApy}
        </Text>

        <Text
          size={getRem(36)}
          sameLineHeight
          color={"#ffffff"}
          top={getRem(70)}
        >
          You will receive rETH
        </Text>
        <Text
          bold
          size={getRem(70)}
          sameLineHeight
          color={"#00F3AB"}
          top={getRem(4)}
        >
          {ratio === "--" ? "--" : ratioToAmount(stakeAmount, ratio)}
        </Text>

        {ethAccountAddress ? (
          <CommonButton
            text={"Stake"}
            top={getRem(60)}
            disabled={stakeDisabled}
            onClick={stakeEth}
          />
        ) : (
          <Connector />
        )}
      </CardContainer>

      <CardContainer
        top={getRem(80)}
        left={getRem(60)}
        right={getRem(60)}
        bottom={getRem(270)}
        horizontalPadding={getRem(50)}
        verticalPadding={getRem(30)}
      >
        <HContainer>
          <Text size={getRem(30)} sameLineHeight color={"#929292"}>
            Exchange Rate
          </Text>
          <Text size={getRem(30)} sameLineHeight color={"#c4c4c4"}>
            1rETH = {ratio}ETH
          </Text>
        </HContainer>

        <HContainer top={getRem(30)}>
          <Text size={getRem(30)} sameLineHeight color={"#929292"}>
            Transaction Fee
          </Text>
          <Text size={getRem(30)} sameLineHeight color={"#c4c4c4"}>
            0.001 ETH
          </Text>
        </HContainer>

        <HContainer top={getRem(30)}>
          <Text size={getRem(30)} sameLineHeight color={"#929292"}>
            Reward Fee
          </Text>
          <Text size={getRem(30)} sameLineHeight color={"#c4c4c4"}>
            10%
          </Text>
        </HContainer>
      </CardContainer>
    </Container>
  );
}

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const HContainer = styled.div((props) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: props.top,
}));
