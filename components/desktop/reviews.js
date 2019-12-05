import React, { Component } from "react";
import styled from "styled-components";
import aboutData from "../../data/about";
import AboutPoint from "../../common/about-point";

import { ParallaxBanner } from "react-scroll-parallax";
import { Parallax, Background } from "react-parallax";
import Link from "next/link";

import about from "../../data/about";
import Heading from "../common/heading";
import Text from "../common/Text";

const PageWrapper = styled.div`
  background-color: #fff;
  padding: 2px 0;
`;

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
// `;

// const Quote = styled.h2`
//   font-family: Objectivity-Bold;
//   font-size: 32px;
//   color: #132c48;
//   line-height: 50px;
//   margin-top: 0px;
//   text-align: center;
// `;

const Button = styled.div`
  display: flex;
  border: 2px solid #00c48a;
  border-radius: 6px;
  width: 150px;
  height: 48px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 16px;
`;

const Buttontext = styled.div`
  font-family: Sans-Narrow-Bold;
  font-size: 16px;
  color: #00c48a;
`;

class Reviews extends Component {
  render() {
    const { removeSpace } = this.props;
    return (
      <PageWrapper>
        {/* <ParallaxBanner
          layers={[
            {
              image:
                "https://static.wixstatic.com/media/e1c78c_6ae16d26be03488a93c6c91e40313df7.jpg/v1/fill/w_1332,h_740,al_c,q_85,usm_0.66_1.00_0.01/e1c78c_6ae16d26be03488a93c6c91e40313df7.webp",
              amount: 0.2
            }
          ]}
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            backgroundSize: "contain"
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
            flex: 1,
            justifyContent: "center",
            backgroundSize: "contain"
          }}
        >
          <div
            style={{
              height: "auto",
              display: "flex",
              flex: 1,
              margin: "16px 0",
              flexDirection: "column",
              justifyContent: "center",
              backgroundSize: "contain"
            }}
          >
            <Heading center style={{ margin: removeSpace ? 0 : 16 }}>
              Order Online
            </Heading>
            {/* <Text
              style={{ margin: 0, fontWeight: "bold", textAlign: "center" }}  
            >
              COMING SOON
            </Text> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto 16px",
                padding: "16px",
                height: "75%"
              }}
            >
              <Link>
                <a
                  target="_blank"
                  style={{ textDecoration: "none" }}
                  href={
                    "https://www.toasttab.com/samudhrausa/v2/online-order#!/"
                  }
                >
                  <Button>
                    <Buttontext>Pick up</Buttontext>
                  </Button>
                </a>
              </Link>

              <Link>
                <a
                  target="_blank"
                  style={{ textDecoration: "none" }}
                  href={
                    "https://www.doordash.com/store/samudhra-franklin-township-776048/"
                  }
                >
                  <Button>
                    <Buttontext>Delivery</Buttontext>
                  </Button>
                </a>
              </Link>

              {/* <img
              src="https://static.wixstatic.com/media/e1c78c_d34de960415243e08f798bfb1a96d27f.png/v1/fill/w_63,h_50,al_c,q_80,usm_0.66_1.00_0.01/e1c78c_d34de960415243e08f798bfb1a96d27f.webp"
              style={{ width: "50px", height: "50px" }}
            />

            <Heading style={{ margin: "16px 0", textAlign: "center" }}>
              Absolutely loved it. <br />
              Amazing food and charismatic chef.
            </Heading> */}
              {/* <img
              src="https://static.wixstatic.com/media/e1c78c_498fc8f795e64622a9c73da803972162.jpg/v1/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01/e1c78c_498fc8f795e64622a9c73da803972162.webp"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50px",
                margin: "16px 0"
              }}
            /> */}
              {/* <p>Emma Brown, NYC</p> */}
            </div>
          </div>
        </Parallax>
      </PageWrapper>
    );
  }
}

export default Reviews;
