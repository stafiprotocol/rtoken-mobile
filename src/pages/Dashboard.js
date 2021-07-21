import React, { useEffect, useState } from "react";
import styled from "styled-components";
import apy from "../assets/apy.svg";
import eth_reward from "../assets/eth_reward.svg";
import fis_reward from "../assets/fis_reward.svg";
import reth from "../assets/reth.svg";
import CommonButton from "../components/CommonButton";
import { CardContainer, Text } from "../components/commonComponents";
import SmallButton from "../components/SmallButton";
import { useAppDispatch, useAppSelector } from "../hooks";
import { claimDrop, reloadData } from "../redux/reducers/rETHClice";
import { numberUtil } from "../util/numberUtil";
import { getRem } from "../util/remUtil";

export default function Dashboard() {
  const appDispatch = useAppDispatch();

  const [claimDisabled, setClaimDisabled] = useState(true);

  const {
    ethApy,
    ratio,
    tokenAmount,
    lastEraReward,
    latestMonthReward,
    totalDropReward,
    claimableDropReward,
  } = useAppSelector((state) => {
    return {
      balance: state.rETHModule.balance,
      totalStakedAmount: state.rETHModule.totalStakedAmount,
      ethApy: state.rETHModule.ethApy,
      fisApy: state.rETHModule.fisApy,
      ratio: state.rETHModule.ratio,
      tokenAmount: state.rETHModule.rethAmount,
      lastEraReward: state.rETHModule.lastEraReward,
      latestMonthReward: state.rETHModule.latestMonthReward,
      totalDropReward: state.rETHModule.totalDropReward,
      claimableDropReward: state.rETHModule.claimableDropReward,
    };
  });

  useEffect(() => {
    setClaimDisabled(
      !claimableDropReward ||
        claimableDropReward === "--" ||
        Number(claimableDropReward) === 0
    );
  }, [claimableDropReward]);

  const exchangeOnCurve = () => {
    window.location.href = "https://curve.fi/reth";
  };

  const claim = () => {
    appDispatch(
      claimDrop(() => {
        appDispatch(reloadData());
      })
    );
  };

  return (
    <Container>
      <Text size={getRem(80)} color={"#ffffff"} top={getRem(50)} bold>
        Dashboard
      </Text>

      <CardContainer
        top={getRem(50)}
        left={getRem(60)}
        right={getRem(60)}
        verticalPadding={getRem(60)}
      >
        <VContainer>
          <HContainer left={getRem(60)} right={getRem(60)}>
            <HContainer>
              <Icon src={reth} />
              <Text left={getRem(40)} size={getRem(60)} sameLineHeight bold>
                rETH
              </Text>
            </HContainer>

            <Text color={"#00F3AB"} size={getRem(60)} sameLineHeight bold>
              {tokenAmount === "--"
                ? "--"
                : numberUtil.handleFisAmountToFixed(tokenAmount)}
            </Text>
          </HContainer>

          <Text
            style={{ alignSelf: "flex-end" }}
            color={"#c4c4c4"}
            size={getRem(30)}
            sameLineHeight
            top={getRem(8)}
            right={getRem(60)}
          >
            Redeemable ETH :{" "}
            {tokenAmount === "--"
              ? "--"
              : numberUtil.handleFisAmountToFixed(tokenAmount * ratio)}
          </Text>
        </VContainer>

        <Divider />

        <VContainer>
          <HContainer left={getRem(60)} right={getRem(60)}>
            <HContainer>
              <Icon src={apy} />
              <Text left={getRem(40)} size={getRem(60)} sameLineHeight bold>
                APR
              </Text>
            </HContainer>

            <Text color={"#00F3AB"} size={getRem(60)} sameLineHeight bold>
              {ethApy}
            </Text>
          </HContainer>

          {/* <Text
            style={{ alignSelf: "flex-end" }}
            color={"#c4c4c4"}
            size={getRem(30)}
            sameLineHeight
            top={getRem(8)}
            right={getRem(60)}
          >
            {fisApy} FIS + {ethApy} ETH
          </Text> */}
        </VContainer>

        <Divider />

        <VContainer>
          <HContainer left={getRem(60)} right={getRem(60)}>
            <HContainer>
              <Icon src={eth_reward} />
              <Text left={getRem(40)} size={getRem(60)} sameLineHeight bold>
                Reward
              </Text>
            </HContainer>

            <Text color={"#00F3AB"} size={getRem(60)} sameLineHeight bold>
              {lastEraReward === "--" ? "--" : "+" + lastEraReward} ETH
            </Text>
          </HContainer>

          <Text
            style={{ alignSelf: "flex-end" }}
            color={"#c4c4c4"}
            size={getRem(30)}
            sameLineHeight
            top={getRem(4)}
            right={getRem(60)}
          >
            Reward of last epoch
          </Text>
        </VContainer>
      </CardContainer>

      <CardContainer
        top={getRem(50)}
        left={getRem(60)}
        right={getRem(60)}
        verticalPadding={getRem(60)}
        bottomPadding={getRem(30)}
      >
        <VContainer>
          <HContainer left={getRem(60)} right={getRem(60)}>
            <HContainer>
              <Icon src={fis_reward} />
              <Text left={getRem(40)} size={getRem(60)} sameLineHeight bold>
                Reward
              </Text>
            </HContainer>

            <Text color={"#00F3AB"} size={getRem(60)} sameLineHeight bold>
              {totalDropReward === "--" ? "--" : "+" + totalDropReward} FIS
            </Text>
          </HContainer>

          <>
            <Text
              style={{ alignSelf: "flex-end" }}
              color={"#c4c4c4"}
              size={getRem(20)}
              sameLineHeight
              top={getRem(40)}
              right={getRem(60)}
            >
              Reward can be claimed every 2:00 AM UTC
            </Text>

            <SmallButton
              text={"Claimable " + claimableDropReward + " FIS"}
              top={getRem(16)}
              right={getRem(60)}
              onClick={claim}
              disabled={claimDisabled}
            />
          </>
        </VContainer>
      </CardContainer>

      <Text
        size={getRem(36)}
        top={getRem(10)}
        left={getRem(60)}
        style={{ alignSelf: "flex-start" }}
      >
        Stats
      </Text>

      <CardContainer
        top={getRem(10)}
        left={getRem(60)}
        right={getRem(60)}
        horizontalPadding={getRem(50)}
        verticalPadding={getRem(30)}
      >
        <HContainer>
          <Text size={getRem(30)} sameLineHeight color={"#929292"}>
            Staked ETH
          </Text>
          <Text size={getRem(30)} sameLineHeight color={"#c4c4c4"}>
            {tokenAmount === "--" || ratio === "--"
              ? "--"
              : numberUtil.handleFisAmountToFixed(tokenAmount * ratio)}{" "}
            ETH
          </Text>
        </HContainer>

        <HContainer top={getRem(30)}>
          <Text size={getRem(30)} sameLineHeight color={"#929292"}>
            Unbonding ETH
          </Text>
          <Text size={getRem(30)} sameLineHeight color={"#c4c4c4"}>
            0 ETH
          </Text>
        </HContainer>

        <HContainer top={getRem(30)}>
          <Text size={getRem(30)} sameLineHeight color={"#929292"}>
            Exchange Rate
          </Text>
          <Text size={getRem(30)} sameLineHeight color={"#c4c4c4"}>
            1rETH = {numberUtil.handleEthAmountToFixed(ratio)}ETH
          </Text>
        </HContainer>

        <HContainer top={getRem(30)}>
          <Text size={getRem(30)} sameLineHeight color={"#929292"}>
            Total Reward of last 1 month
          </Text>
          <Text size={getRem(30)} sameLineHeight color={"#c4c4c4"}>
            {latestMonthReward} ETH
          </Text>
        </HContainer>
      </CardContainer>

      <Text color={"#C4C4C4"} size={getRem(30)} top={getRem(120)}>
        Redemption is not available on ETH2.0 Phase 1
      </Text>

      <CommonButton
        text={"Exchange on Curve"}
        top={getRem(20)}
        left={getRem(140)}
        right={getRem(140)}
        bottom={getRem(90)}
        onClick={exchangeOnCurve}
      />
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
  alignItems: props.alignStart ? "flex-start" : "center",
  justifyContent: "space-between",
  marginTop: props.top,
  marginLeft: props.left,
  marginRight: props.right,
}));

const VContainer = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: props.top,
  marginLeft: props.left,
  marginRight: props.right,
}));

const Icon = styled.img({
  width: getRem(80),
  height: getRem(80),
});

const Divider = styled.div({
  alignSelf: "stretch",
  marginLeft: getRem(25),
  backgroundColor: "rgba(71,71,71,0.4)",
  height: getRem(3),
  marginTop: getRem(70),
  marginBottom: getRem(100),
});
