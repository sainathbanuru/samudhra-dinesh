import React, { Component } from "react";
import styled from "styled-components";
import aboutData from "../../data/about";
import AboutPoint from "../../common/about-point";

import { Parallax, Background } from "react-parallax";

import about from "../../data/about";

const PageWrapper = styled.div`
  width: 100%;
`;

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
// `;

class PlainParallax extends Component {
  render() {
    const { image, height, strength } = this.props;
    return (
      <PageWrapper>
        <Parallax
          blur={0}
          bgImage={
            image ||
            "https://image.shutterstock.com/z/stock-photo-hard-apple-cider-cocktail-with-fall-cinnamon-cardamom-and-star-anise-693822172.jpg"
          }
          bgImageAlt="the cat"
          strength={strength || strength == 0 ? 0 : 100}
          style={{
            width: "100%",
            height: "80vh",
            maxHeight: height || 450,
            display: "flex",
            justifyContent: "center",
            backgroundSize: "contain"
          }}
          bgImageSizes={"(max-width: 767px) 200px,800px"}
          styleInner={{
            backgroundSize: "contain"
          }}
          y={[-20, 20]}
        />
      </PageWrapper>
    );
  }
}

export default PlainParallax;
