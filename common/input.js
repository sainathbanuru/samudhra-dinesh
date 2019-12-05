import React from "react";
import styled from "styled-components";

const InputEle = styled.input`
  background: #ffffff;
  border: 1px solid rgba(119, 138, 153, 0.3);
  padding: 14px 30px;
  font-size: 16px;
  width: 100%;
  margin: 0;
  color: #132c48;
  box-sizing: border-box;
  ::placeholder {
    color: #132c48;
  }
`;

const Input = props => (
  <InputEle
    placeholder={props.placeholder}
    onChange={props.onChange}
    type={props.type}
    style={props.style}
  />
);

export default Input;
