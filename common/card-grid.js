import styled from "styled-components";

const Wrapper = styled.div`
  @media (min-width: 768px){
    display: grid;
  grid-template-columns: auto;
  grid-template-rows: 70px auto 70px;
  background: #ffffff;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  padding: 30px;
  margin-left: ${({ index }) => (index === 0 ? 0 : "28px")};
  grid-row: 1;
  align-items: start

  }

  @media (max-width: 767px){
    display: grid;
  grid-template-columns: auto;
  grid-template-rows: 70px auto 70px;
  background: #ffffff;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  padding: 30px;
  /* margin-left: ${({ index }) => (index === 0 ? 0 : "28px")}; */
  grid-row: 1;
  margin-top: 20px;
  }

`;

const Card = props => <Wrapper index={props.index}>{props.children}</Wrapper>;

export default Card;
