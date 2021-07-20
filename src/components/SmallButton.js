import styled from "styled-components";
import { getRem } from "../util/remUtil";
import { Text } from "./commonComponents";

export default function SmallButton(props) {
  const handleClick = () => {
    if (!props.disabled) {
      props.onClick();
    }
  };

  return (
    <Button
      top={props.top}
      bottom={props.bottom}
      left={props.left}
      right={props.right}
      disabled={props.disabled}
      onClick={handleClick}
    >
      <Text color={"#23292F"} size={getRem(34)} sameLineHeight bold>
        {props.text}
      </Text>
    </Button>
  );
}

const Button = styled.div((props) => ({
  marginTop: props.top,
  marginBottom: props.bottom,
  marginLeft: props.left,
  marginRight: props.right,
  paddingTop: getRem(20),
  paddingBottom: getRem(20),
  paddingLeft: getRem(23),
  paddingRight: getRem(23),
  opacity: props.disabled ? 0.5 : 1,
  height: getRem(84),
  display: "flex",
  alignItems: "center",
  alignSelf: "flex-end",
  justifyContent: "center",
  backgroundColor: "#00F3AB",
  borderRadius: getRem(42),
}));
