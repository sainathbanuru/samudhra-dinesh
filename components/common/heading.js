import styled from "styled-components";

const Heading = styled.h2`
  font-family: Sans-Narrow-Bold;
  font-size: 32px;
  color: ${props => (props.color ? props.color : "#DC851E")};
  line-height: 50px;
  margin-bottom: 25px;
  text-align: ${props => (props.center ? "center" : "left")};

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

export default props => {
  return <Heading {...props}>{props.children}</Heading>;
};
