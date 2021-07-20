import styled from "styled-components";
import { getRem } from "../util/remUtil";

export const Text = styled.div((props) => ({
  fontSize: props.size,
  fontFamily: props.bold ? "Helvetica-Bold" : "Helvetica",
  lineHeight: props.sameLineHeight ? props.size : "",
  color: props.color ? props.color : "#ffffff",
  marginTop: props.top,
  marginBottom: props.bottom,
  marginLeft: props.left,
  marginRight: props.right,
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
}));

export const CardContainer = styled.div((props) => ({
  marginTop: props.top,
  marginBottom: props.bottom,
  marginLeft: props.left,
  marginRight: props.right,
  paddingLeft: props.horizontalPadding,
  paddingRight: props.horizontalPadding,
  paddingTop: props.verticalPadding,
  paddingBottom: props.bottomPadding
    ? props.bottomPadding
    : props.verticalPadding,
  alignSelf: "stretch",
  backgroundColor: "#292F38",
  borderStyle: "solid",
  borderWidth: getRem(1),
  borderColor: "rgba(82,82,82,0.3)",
  borderRadius: getRem(15),
}));

export const AccountContainer = styled.div((props) => ({
  paddingLeft: props.paddingHorizontal,
  paddingRight: props.paddingHorizontal,
  backgroundImage: "linear-gradient(to right, #3dddc4, #37bfa5, #00eba2)",
  color: "#ffffff",
  paddingTop: getRem(15),
  paddingBottom: getRem(10),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: getRem(10),
}));
