import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";
import aboutData from "../../data/about";

import { Parallax, Background } from "react-parallax";
import Heading from "../common/heading";
import Text from "../common/Text";
import { firestore } from "../firebase";

const PageWrapper = styled.div`
  padding: 2px 0;
  background-color: #fff;
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

// const DetailsContainer = styled.div`
// display: grid;
// @media (max-width: 767px) {

// }

// @media (min-width: 768px) {
//   grid-template-rows: "1fr",
//   grid-template-columns: "1fr 1fr 1fr",
//   grid-gap: "32px",

// }
// `;

const H3heading = styled.h3`
  font-family: Sans-Narrow-Bold;
  text-align: center;
`;

class About extends Component {
  state = {
    unlimitedDays: "",
    unlimitedtimings: "",
    happyHoursDays: "",
    happyHoursTimings: ""
  };

  componentDidMount() {
    firestore
      .collection("unlimitedThali")
      .doc("unlimitedThali")
      .get()
      .then(thaliDetails => {
        thaliDetails.data();
        this.setState({
          unlimitedDays: thaliDetails.data().days,
          unlimitedtimings: thaliDetails.data().timings
        });
      });

    firestore
      .collection("happyHours")
      .doc("happyHours")
      .get()
      .then(happyHours => {
        happyHours.data();
        this.setState({
          happyHoursDays: happyHours.data().days,
          happyHoursTimings: happyHours.data().timings
        });
      });
  }

  render() {
    return (
      <PageWrapper>
        <Parallax
          blur={0}
          bgImage={"/static/images/menuHome.jpg"}
          bgImageAlt="Indian Food"
          strength={300}
          style={{
            height: "auto",
            display: "flex",
            justifyContent: "center",
            backgroundSize: "contain",
            padding: "100px 0"
          }}
          x={[-200, 200]}
          y={[-30, 30]}
        >
          <div
            style={{
              display: "grid",
              gridTemplateRows: "1fr",
              gridTemplateColumns: "1fr 1fr",
              gridGap: "32px",
              padding: "32px",
              maxWidth: 1024
            }}
          >
            {aboutData.map(about => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
                key={about.title1}
              >
                <Link href={about.link}>
                  <div
                    style={{
                      width: "75%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      backgroundColor: "#fff",
                      alignItems: "center",
                      padding: 16,
                      margin: "16px",
                      height: "100%",
                      borderRadius: 8,
                      cursor: "pointer"
                    }}
                  >
                    {/* <img
                    src={
                      "https://image.shutterstock.com/z/stock-photo-dj-plays-live-set-and-mixing-music-on-turntable-console-at-stage-in-the-night-club-disc-jokey-1270456546.jpg"
                    }
                    style={{ width: "100%", height: 200 }}
                  /> */}
                    {/* <div>
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
                        width: 80,
                        marginBottom: 16
                      }}
                    />
                  </div> */}

                    <Heading
                      style={{ margin: 0, textAlign: "center", fontSize: 24 }}
                    >
                      {about.title1}
                    </Heading>
                    {/* <h1 style={{ padding: 0, margin: 0, marginTop: 16 }}>
                      {about.title1}
                    </h1> */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end"
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          padding: "0px 24px",
                          margin: 0
                        }}
                      >
                        {this.state[about.daysKey]}
                      </Text>
                      <Text
                        style={{
                          margin: "16px",
                          borderBottomWidth: 1,
                          borderColor: "#ddd",
                          cursor: "pointer",
                          textAlign: "center"
                        }}
                      >
                        {this.state[about.timingsKey]}
                      </Text>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Parallax>
      </PageWrapper>
    );
  }
}

export default About;
