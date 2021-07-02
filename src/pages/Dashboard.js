import React, { useEffect, useState } from "react";
import styled from "styled-components";
import apy from "../assets/apy.svg";
import eth_reward from "../assets/eth_reward.svg";
import fis_reward from "../assets/fis_reward.svg";
import reth from "../assets/reth.svg";
import CommonButton from "../components/CommonButton";
import { CardContainer, Text } from "../components/commonComponents";
import { useAppSelector } from "../hooks";
import { numberUtil } from "../util/numberUtil";
import { getRem } from "../util/remUtil";

export default function Dashboard() {
  const [totalApy, setTotalApy] = useState("--");

  const { ethApy, fisApy, ratio, tokenAmount } = useAppSelector((state) => {
    return {
      balance: state.rETHModule.balance,
      totalStakedAmount: state.rETHModule.totalStakedAmount,
      ethApy: state.rETHModule.ethApy,
      fisApy: state.rETHModule.fisApy,
      ratio: state.rETHModule.ratio,
      tokenAmount: state.rETHModule.rethAmount,
    };
  });

  useEffect(() => {
    let apy = 0.0;
    if (ethApy && ethApy !== "--") {
      apy += parseFloat(ethApy.replace("%", ""));
    }
    if (fisApy && fisApy !== "--") {
      apy += parseFloat(fisApy.replace("%", ""));
    }
    if (apy > 0) {
      setTotalApy(apy + "%");
    } else {
      setTotalApy("--");
    }
  }, [ethApy, fisApy]);

  const exchangeOnCurve = () => {
    window.location.href = "https://dao.curve.fi/";
  };

  return (
    <Container>
      <Text size={getRem(97)} color={"#ffffff"} top={getRem(50)}>
        Dashboard
      </Text>

      <CardContainer
        top={getRem(50)}
        left={getRem(60)}
        right={getRem(60)}
        verticalPadding={getRem(60)}
      >
        <HContainer alignStart left={getRem(60)} right={getRem(60)}>
          <HContainer>
            <Icon src={reth} />
            <Text left={getRem(40)} size={getRem(73)} sameLineHeight>
              rETH
            </Text>
          </HContainer>

          <TextContainer>
            <Text color={"#00F3AB"} size={getRem(73)} sameLineHeight>
              {tokenAmount === "--"
                ? "--"
                : numberUtil.handleFisAmountToFixed(tokenAmount)}
            </Text>
            <Text
              color={"#c4c4c4"}
              size={getRem(36)}
              sameLineHeight
              top={getRem(4)}
            >
              Redeemable ETH : 0
            </Text>
          </TextContainer>
        </HContainer>

        <Divider />

        <HContainer alignStart left={getRem(60)} right={getRem(60)}>
          <HContainer>
            <Icon src={apy} />
            <Text left={getRem(40)} size={getRem(73)} sameLineHeight>
              APY
            </Text>
          </HContainer>

          <TextContainer>
            <Text color={"#00F3AB"} size={getRem(73)} sameLineHeight>
              {totalApy}
            </Text>
            <Text
              color={"#c4c4c4"}
              size={getRem(36)}
              sameLineHeight
              top={getRem(4)}
            >
              {fisApy} FIS + {ethApy} ETH
            </Text>
          </TextContainer>
        </HContainer>

        <Divider />

        <HContainer alignStart left={getRem(60)} right={getRem(60)}>
          <HContainer>
            <Icon src={eth_reward} />
            <Text left={getRem(40)} size={getRem(73)} sameLineHeight>
              Reward
            </Text>
          </HContainer>

          <TextContainer>
            <Text color={"#00F3AB"} size={getRem(73)} sameLineHeight>
              +0.032334 ETH
            </Text>
            <Text
              color={"#c4c4c4"}
              size={getRem(36)}
              sameLineHeight
              top={getRem(4)}
            >
              Reward of last era
            </Text>
          </TextContainer>
        </HContainer>
      </CardContainer>

      <CardContainer
        top={getRem(50)}
        left={getRem(60)}
        right={getRem(60)}
        verticalPadding={getRem(60)}
      >
        <HContainer alignStart left={getRem(60)} right={getRem(60)}>
          <HContainer>
            <Icon src={fis_reward} />
            <Text left={getRem(40)} size={getRem(73)} sameLineHeight>
              Reward
            </Text>
          </HContainer>

          <TextContainer>
            <Text color={"#00F3AB"} size={getRem(73)} sameLineHeight>
              +0.032334 FIS
            </Text>
          </TextContainer>
        </HContainer>
      </CardContainer>

      <Text
        size={getRem(44)}
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
          <Text size={getRem(36)} sameLineHeight color={"#929292"}>
            Staked ETH
          </Text>
          <Text size={getRem(36)} sameLineHeight color={"#c4c4c4"}>
            {tokenAmount === "--" || ratio === "--"
              ? "--"
              : numberUtil.handleFisAmountToFixed(tokenAmount * ratio)}{" "}
            ETH
          </Text>
        </HContainer>

        <HContainer top={getRem(20)}>
          <Text size={getRem(36)} sameLineHeight color={"#929292"}>
            Unbonding ETH
          </Text>
          <Text size={getRem(36)} sameLineHeight color={"#c4c4c4"}>
            0 ETH
          </Text>
        </HContainer>

        <HContainer top={getRem(20)}>
          <Text size={getRem(36)} sameLineHeight color={"#929292"}>
            Exchange Rate
          </Text>
          <Text size={getRem(36)} sameLineHeight color={"#c4c4c4"}>
            1rETH = {ratio}ETH
          </Text>
        </HContainer>

        <HContainer top={getRem(20)}>
          <Text size={getRem(36)} sameLineHeight color={"#929292"}>
            Total Reward
          </Text>
          <Text size={getRem(36)} sameLineHeight color={"#c4c4c4"}>
            +9.00133 ETH
          </Text>
        </HContainer>
      </CardContainer>

      <Text color={"#C4C4C4"} size={getRem(36)} top={getRem(100)}>
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

const TextContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
});
