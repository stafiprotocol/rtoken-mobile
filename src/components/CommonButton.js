import styled from "styled-components";
import { getRem } from "../util/remUtil";

export default function CommonButton(props) {
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
      {props.text}
    </Button>
  );
}

const Button = styled.div((props) => ({
  marginTop: props.top,
  marginBottom: props.bottom,
  marginLeft: props.left,
  marginRight: props.right,
  opacity: props.disabled ? 0.5 : 1,
  height: getRem(120),
  color: "#23292F",
  fontSize: getRem(58),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "stretch",
  backgroundColor: "#00F3AB",
  borderRadius: getRem(40),
  borderColor: "#979797",
  borderStyle: "solid",
  borderWidth: getRem(2),
}));
