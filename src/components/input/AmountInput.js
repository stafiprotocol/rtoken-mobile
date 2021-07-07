import { Input, message } from "antd";
import React from "react";
import styled from "styled-components";
import { getRem } from "../../util/remUtil";
import { Text } from "../commonComponents";
import "./index.scss";

// type Props = {
//   placeholder?: string;
//   icon: any;
//   unit?: string;
//   value?: string | number;
//   onChange?: Function;
//   maxInput?: string | number;
//   disabled?: boolean;
// };

export default function AmountInput(props) {
  const clickMax = () => {
    props.onClickMax && props.onClickMax();
  };

  return (
    <Input
      className="amount_input ant-input-affix-wrapper"
      disabled={props.disabled}
      onChange={(e) => {
        let value = e.target.value.replace(/[^\d.]/g, "");
        value = value.replace(/^\./g, "");
        value = value.replace(/\.{2,}/g, ".");
        value = value
          .replace(".", "$#$")
          .replace(/\./g, "")
          .replace("$#$", ".");
        value = value.replace(/^(-)*(\d+)\.(\d\d\d\d\d\d).*$/, "$1$2.$3");
        if (Number(value) > Number(props.maxInput)) {
          message.error("The input amount exceeds your transferrable balance");
          props.onChange && props.onChange("");
        } else if (
          Number(value) > 0 &&
          Number(value) < Number(props.minInput)
        ) {
          message.error(
            `The deposited amount is less than the minimum deposit size: ${props.minInput}`
          );
          props.onChange && props.onChange("");
        } else {
          props.onChange && props.onChange(value);
        }
      }}
      value={props.value}
      placeholder={props.placeholder}
      suffix={
        <>
          <label className="input_unit">{props.unit}</label>
          <Text right={getRem(15)} onClick={clickMax}>
            Max
          </Text>
          <Icon src={props.icon} alt={"icon"} />
        </>
      }
    />
  );
}

const Icon = styled.img({
  width: getRem(80),
  height: getRem(80),
});
