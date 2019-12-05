import React, { Component } from "react";
import styled from "styled-components";
import aboutData from "../../data/about";
import AboutPoint from "../../common/about-point";

import { ParallaxBanner } from "react-scroll-parallax";
import about from "../../data/about";
import Heading from "../common/heading";

const PageWrapper = styled.div``;

const Text = styled.p`
  font-family: Quicksand-Regular;
`;

class FarmToTableMobile extends Component {
  render() {
    return (
      <PageWrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
            alignItems: "center",
            padding: "16px"
          }}
        >
          <Heading>Discovery of Samudhra</Heading>
          {/* <div style={{ margin: "0px 32px" }}>
            <h3 style={{ margin: 0 }}>A Sneak Peak of the</h3>
            <h3 style={{ margin: 0 }}>New Spring Menu</h3>
          </div> */}

          <div style={{ margin: "32px" }}>
            <div
              style={{
                height: 1,
                backgroundColor: "#000",
                width: 80,
                marginBottom: 8
              }}
            />
            <div
              style={{
                height: 1,
                backgroundColor: "#000",
                width: 80
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              alignItems: "center"
            }}
          >
            <Text style={{ marginTop: 0, textAlign: "center" }}>
              Peas with Mint and Rose Petals
            </Text>
            <Text style={{ marginTop: 0, textAlign: "center" }}>
              Grilled Corn with Herb Butter
            </Text>
            <Text style={{ marginTop: 0, textAlign: "center" }}>
              Falafel-Spiced Tomatoes on Whole Wheat Flatbread
            </Text>
            <Text style={{ marginTop: 0, textAlign: "center" }}>
              Primavera Risotto
            </Text>
            <Text style={{ marginTop: 0, textAlign: "center" }}>
              Farmer’s Market Quinoa Salad
            </Text>
            <Text style={{ marginTop: 0, textAlign: "center" }}>
              Sparkling Wine with Ginger Ale and Cherries
            </Text>
          </div>

          <Text style={{ borderColor: "#000", borderWidth: 1 }}>
            Go To Menus
          </Text>
        </div>
        <ParallaxBanner
          layers={[
            {
              image:
                "https://static.wixstatic.com/media/e1c78c_cfd8fa1d16904a849e8f86d8e3bb3829.jpg/v1/fill/w_1332,h_867,al_c,q_85,usm_0.66_1.00_0.01/e1c78c_cfd8fa1d16904a849e8f86d8e3bb3829.webp",
              amount: -0.5
            }
          ]}
          style={{
            height: "50vh",
            display: "flex",
            justifyContent: "center"
          }}
        />
      </PageWrapper>
    );
  }
}

export default FarmToTableMobile;
