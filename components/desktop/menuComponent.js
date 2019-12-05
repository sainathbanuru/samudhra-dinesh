import React, { Component, useEffect } from "react";
import styled from "styled-components";
import Heading from "../common/heading";
import EmptyLines from "../common/emptyLines";

import { Parallax, Background } from "react-parallax";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

const ContactDetails = styled.div`
  @media (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;

    justify-content: center;
  }
`;

const InputContainer = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-bottom: 20px;
    margin: 0;
    width: 90%;
  }

  @media (min-width: 768px) {
    border: 1px solid #000;
    padding: "16px 0";
    display: flex;
  }
`;

const CustomButton = styled.p`
  color: #fff;
  background-color: #dc851e;
  padding: 8px 40px;

  @media (max-width: 767px) {
    width: 100%;
    text-align: center;
  }

  @media (min-width: 768px) {
  }
`;

const Text = styled.p`
  font-family: Quicksand-Regular;
`;

const H3Heading = styled.h3`
  font-family: Quicksand-Regular;
`;

const MenuComponent = props => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";

    script.src = "//www.imenupro.com/!w8k-z";
    script.async = true;

    const childrenLength = document.getElementById("menuContainer").children
      .length;

    if (childrenLength == 0) {
      // console.log(childrenLength);
      document.getElementById("menuContainer").appendChild(script);
    }
  }, []);

  return (
    <Wrapper>
      <Heading>Menu</Heading>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "16px auto",
          padding: "16px",
          maxWidth: "75%"
        }}
      >
        <div id={"menuContainer"}>
          <div
            dangerouslySetInnerHTML={{
              __html: `<script id="w8k-z" type="text/javascript" src="https://imenupro.com/!w8k-z"></script>`
            }}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default MenuComponent;
