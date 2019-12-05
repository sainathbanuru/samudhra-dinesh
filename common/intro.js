import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  background-image: url("/static/images/intro.png");
  background-repeat: no-repeat;
  background-size: 100%;

  @media (max-width: 767px) {
    background-size: cover;
    background-position: center;
  }
`;

const Heading = styled.h2`
  font-family: PlayfairDisplay-Bold;
  font-size: 24px;
  color: #132c48;
  letter-spacing: 1px;
  width: 100%;
  text-align: center;
  padding: 70px 0 0 0;
  margin: 0;
`;

const MainText = styled.h1`
  width: 100%;
  font-family: Objectivity-Bold;
  font-size: 48px;
  color: #132c48;
  text-align: center;
  line-height: 66px;
  text-align: center;
  margin: 20px 0 30px 0;
`;

const SubText = styled.p`
  font-size: 16px;
  color: #132c48;
  letter-spacing: 0;
  text-align: center;
  line-height: 32px;
  padding: 0 0 75px 0;
  margin: 0;
`;

const Intro = ({ heading, mainText, subText }) => (
  <Wrapper className="wrapper">
    <Heading dangerouslySetInnerHTML={{ __html: heading }} />
    <MainText dangerouslySetInnerHTML={{ __html: mainText }} />
    <SubText dangerouslySetInnerHTML={{ __html: subText }} />
  </Wrapper>
);

export default Intro;
