import React from "react";
import styled from "styled-components";

const TextComponent = styled.p`
  font-family: Sans-Narrow-Regular;
  font-size: 18px;
`;

const Text = props => {
  return <TextComponent {...props}>{props.children}</TextComponent>;
};

export default Text;
