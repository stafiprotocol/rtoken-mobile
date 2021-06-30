import styled from "styled-components";
import { getRem } from "../util/remUtil";

export const Text = styled.div((props) => ({
  fontSize: props.size,
  lineHeight: props.sameLineHeight ? props.size : "",
  color: props.color ? props.color : "#ffffff",
  marginTop: props.top,
  marginBottom: props.bottom,
  marginLeft: props.left,
  marginRight: props.right,
}));

export const CardContainer = styled.div((props) => ({
  marginTop: props.top,
  marginBottom: props.bottom,
  marginLeft: props.left,
  marginRight: props.right,
  paddingLeft: props.horizontalPadding,
  paddingRight: props.horizontalPadding,
  paddingTop: props.verticalPadding,
  paddingBottom: props.verticalPadding,
  alignSelf: "stretch",
  backgroundColor: "#292F38",
  borderStyle: "solid",
  borderWidth: getRem(1),
  borderColor: "#525252",
  borderRadius: getRem(15),
}));