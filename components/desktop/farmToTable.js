import React, { Component, PureComponent } from "react";
import styled from "styled-components";
import aboutData from "../../data/about";
import AboutPoint from "../../common/about-point";

import { ParallaxBanner } from "react-scroll-parallax";
import { Parallax, Background } from "react-parallax";

import about from "../../data/about";
import Heading from "../common/heading";
import EmptyLines from "../common/emptyLines";
import { width } from "window-size";
import { firestore } from "../firebase";

const PageWrapper = styled.div`
  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

// const Quote = styled.h2`
//   font-family: Objectivity-Bold;
//   font-size: 32px;
//   color: #132c48;
//   line-height: 50px;
//   margin-top: 0px;
//   text-align: center;
// `;

// const Button = styled.div`
//   display: flex;
//   border: 2px solid #00c48a;
//   border-radius: 6px;
//   width: 200px;
//   height: 60px;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
// `;

// const Buttontext = styled.div`
//   font-family: Objectivity-Bold;
//   font-size: 16px;
//   color: #00c48a;
// `;

const Item = styled.p`
  font-family: Quicksand-Regular;
`;

const Content = styled.p`
  font-family: Sans-Narrow-Regular;
  font-size: 18px;
  color: #000;
  letter-spacing: 0;
  line-height: 32px;
  margin-top: 0;
  text-align: center;
  @media (min-width: 768px) {
  }
`;

class FarmToTable extends PureComponent {
  state = {
    title: "",
    content: ""
  };

  componentDidMount() {
    firestore
      .collection("discovery")
      .doc("discoveryHome")
      .get()
      .then(discovery => {
        this.setState({
          title: discovery.data().title,
          content: discovery.data().content
        });
      });
  }

  render() {
    const { removeSpace } = this.props;
    return (
      <PageWrapper>
        {/* <ParallaxBanner
          layers={[
            {
              image:
                "https://image.shutterstock.com/z/stock-photo-traditional-indian-british-dish-chicken-tikka-masala-background-spicy-chicken-tikka-masala-curry-695932900.jpg",
              amount: -0.5
            }
          ]}
          style={{
            height: "auto",
            display: "flex",
            justifyContent: "center",
            padding: "100px 0"
          }}
        > */}
        <Parallax
          blur={0}
          bgImage={"/static/images/wave250Op.png"}
          bgImageAlt="the cat"
          strength={800}
          style={{
            height: "auto",
            display: "flex",
            justifyContent: "center",
            backgroundSize: "contain",
            flexDirection: "row",
            padding: "16px 0"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0 auto",
              padding: removeSpace ? 0 : "16",
              maxWidth: "75%"
            }}
          >
            <Heading center style={{ margin: removeSpace ? 0 : 16 }}>
              {this.state.title}{" "}
            </Heading>
            {/* <h1 style={{ marginTop: 32, fontWeight: "bold" }}>
            </h1> */}
            {/* <div style={{ margin: "0px 32px" }}>
              <h3 style={{ margin: 0 }}>A Sneak Peak of the</h3>
              <h3 style={{ margin: 0 }}>New Spring Menu</h3>
            </div> */}

            {/* <EmptyLines /> */}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                alignItems: "center"
              }}
            >
              <Content
                style={{ marginTop: 0 }}
                dangerouslySetInnerHTML={{ __html: this.state.content }}
              />
            </div>

            {/* <Item
              style={{
                borderColor: "#000",
                borderWidth: 1,
                fontFamily: "Quicksand-Regular"
              }}
            >
              Go To Menus
            </Item> */}
          </div>
        </Parallax>
      </PageWrapper>
    );
  }
}

export default FarmToTable;
