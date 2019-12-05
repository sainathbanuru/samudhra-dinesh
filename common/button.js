import styled from "styled-components";

const ButtonStyle = styled.div`
  width: 200px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 0 5px 12px 0 rgba(11, 116, 232, 0.5);
  border-radius: 6px;
`;

const ButtonText = styled.div`
  font-family: Objectivity-Bold;
  font-size: 16px;
  color: ${({ textColor }) => textColor};
`;

const Button = props => (
  <ButtonStyle bgColor={props.bgColor} {...props}>
    <ButtonText textColor={props.textColor}>{props.buttonText}</ButtonText>
  </ButtonStyle>
);

export default Button;
