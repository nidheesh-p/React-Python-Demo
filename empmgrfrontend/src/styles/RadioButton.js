import React from "react";
import styled from "styled-components";

const RadioLabel = styled.label`
  display: flex;
  overflow: hidden;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  margin: 12px 12px 0 12px;
  width: 95%;
  height: 40px;
  border-bottom: solid 1px grey;
  padding-bottom: 5px;
`;

const HiddenRadio = styled.input.attrs({ type: "radio" })`
  display: none;
`;

const CustomRadio = styled.span`
  width: 20px;
  height: 20px;
  border: 2px solid grey;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  margin: 12px 12px 0 12px;

  ${HiddenRadio}:checked + & {
    border-color: blue;
    &::after {
      content: "";
      width: 12px;
      height: 12px;
      background-color: blue;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const RadioButton = ({ label, name, value, checked, onChange }) => {
  return (
    <RadioLabel>
      {label}
      <HiddenRadio
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <CustomRadio />
    </RadioLabel>
  );
};

export default RadioButton;
