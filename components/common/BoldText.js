import React from "react";
import styled from "styled-components";

const TextComponent = styled.p`
  font-family: Sans-Narrow-Bold;
`;

const BoldText = props => {
  return <TextComponent {...props}>{props.children}</TextComponent>;
};
