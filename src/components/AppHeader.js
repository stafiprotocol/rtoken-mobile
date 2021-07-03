import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import StafiLogo from "../assets/stafi_logo.svg";
import { useAppSelector } from "../hooks";
import { getRem } from "../util/remUtil";
import { stringUtil } from "../util/stringUtil";
import { Text } from "./commonComponents";

export default function AppHeader(props) {
  const location = useLocation();
  const [index, setIndex] = useState(0);
  const { ethAccount } = useAppSelector((state) => {
    return {
      ethAccount: state.rETHModule.ethAccount,
    };
  });

  // console.log("ethAccount: ", JSON.stringify(ethAccount));

  useEffect(() => {
    setIndex(location.pathname.includes("stake") ? 0 : 1);
  }, [location.pathname]);

  const clickAccount = async () => {};

  return (
    <Container>
      <LeftContent>
        <Logo src={StafiLogo} alt={"logo"} />

        <Link
          to={"/stake"}
          style={{ textDecoration: "none", marginLeft: getRem(50) }}
        >
          <IndicatorContainer isSelected={index === 0}>
            <Text
              size={getRem(30)}
              bold={index === 0}
              color={index === 0 ? "#ffffff" : "#c4c4c4"}
            >
              Stake
            </Text>
          </IndicatorContainer>
        </Link>

        <Link
          to={"/dashboard"}
          style={{ textDecoration: "none", marginLeft: getRem(30) }}
        >
          <IndicatorContainer isSelected={index === 1}>
            <Text
              size={getRem(30)}
              bold={index === 1}
              color={index === 1 ? "#ffffff" : "#c4c4c4"}
            >
              Dashboard
            </Text>
          </IndicatorContainer>
        </Link>
      </LeftContent>

      {ethAccount && (
        <AccountContainer onClick={clickAccount}>
          <Text size={getRem(30)} bold sameLineHeight top={getRem(10)}>
            {ethAccount.balance} ETH
          </Text>
          <Text
            size={getRem(24)}
            sameLineHeight
            top={getRem(20)}
            bottom={getRem(5)}
          >
            {stringUtil.replacePkhRemain6(ethAccount.address, 6, 44)}
          </Text>
        </AccountContainer>
      )}
    </Container>
  );
}

const Container = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: getRem(50),
  paddingBottom: getRem(50),
  paddingLeft: getRem(60),
  paddingRight: getRem(60),
});

const LeftContent = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const Logo = styled.img({
  width: getRem(213),
  height: getRem(82),
});

const IndicatorContainer = styled.div((props) => ({
  marginLeft: props.left,
  color: props.isSelected ? "#ffffff" : "#c4c4c4",
  paddingLeft: getRem(15),
  paddingRight: getRem(15),
  borderBottomColor: "#ffffff",
  borderBottomWidth: props.isSelected ? getRem(3) : 0,
  borderBottomStyle: "solid",
  boxSizing: "border-box",
}));

const AccountContainer = styled.div({
  backgroundImage: "linear-gradient(to right, #3dddc4, #37bfa5, #00eba2)",
  color: "#ffffff",
  paddingLeft: getRem(15),
  paddingRight: getRem(15),
  paddingTop: getRem(4),
  paddingBottom: getRem(4),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: getRem(10),
});
