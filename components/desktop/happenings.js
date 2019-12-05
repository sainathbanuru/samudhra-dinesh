import React, { Component } from "react";
import styled from "styled-components";
import { Parallax, Background } from "react-parallax";
import Link from "next/link";

import aboutData from "../../data/about";
import AboutPoint from "../../common/about-point";

import { ParallaxBanner } from "react-scroll-parallax";
import about from "../../data/about";
import EmptyLines from "../common/emptyLines";
import Heading from "../common/heading";
import Text from "../common/Text";
import { firestore } from "../firebase";

const PageWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const data = [
  {
    imageUrl: "/static/images/unlimitedThali.jpg",
    heading: "UNLIMITED THALI",
    alt: "Unlimited Thali",
    additional: "COMING SOON",
    key: "unlimitedThali",
    link: "/unlimitedThali",
    description:
      "We don’t just cater to your taste buds, we immerse your senses through our fragrant dishes made from Indian spices and herbs, the upbeat vibe of Samudhra and everyone’s favourite (Bollywood) music! "
  },
  {
    imageUrl: "/static/images/happyHour.jpg",
    heading: "HAPPY HOURS",
    alt: "Happy Hours",
    additional: "COMING SOON",
    key: "happyHours",
    link: "/happyHours",
    description:
      "We don’t just cater to your taste buds, we immerse your senses through our fragrant dishes made from Indian spices and herbs, the upbeat vibe of Samudhra and everyone’s favourite (Bollywood) music! "
  },
  {
    imageUrl: "/static/images/weekendBrunch.jpg",
    heading: "WEEKEND BRUNCH",
    alt: "Weekend Brunch",
    additional: "COMING SOON",
    key: "weekendBrunch",
    link: "/weekendBrunch",
    description:
      " We don’t just cater to your taste buds, we immerse your senses through our fragrant dishes made from Indian spices and herbs, the upbeat vibe of Samudhra and everyone’s favourite (Bollywood) music!"
  },
  {
    imageUrl: "/static/images/saturdayNight.jpg",
    heading: "SATURDAY NIGHT",
    alt: "Saturday Nights",
    additional: "COMING SOON",
    key: "saturdayNights",
    link: "",
    description:
      "We don’t just cater to your taste buds, we immerse your senses through our fragrant dishes made from Indian spices and herbs, the upbeat vibe of Samudhra and everyone’s favourite (Bollywood) music! "
  },
  {
    imageUrl: "/static/images/divaNight.jpg",
    heading: "DIVA NIGHTS ",
    alt: "Diva Nights",
    additional: "COMING SOON",
    key: "divaNights",
    link: "",
    description:
      " We don’t just cater to your taste buds, we immerse your senses through our fragrant dishes made from Indian spices and herbs, the upbeat vibe of Samudhra and everyone’s favourite (Bollywood) music!"
  },

  {
    imageUrl: "/static/images/bollywoodNight.jpg",
    heading: "BOLLYWOOD NIGHT",
    alt: "Bollywood Night",
    additional: "COMING SOON",
    key: "bollywoodNight",
    link: "",
    description:
      " We don’t just cater to your taste buds, we immerse your senses through our fragrant dishes made from Indian spices and herbs, the upbeat vibe of Samudhra and everyone’s favourite (Bollywood) music!"
  }
];

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  //   -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.48);
  //   box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.48);
`;

const GridContainer = styled.div`
  display: grid;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 0 16px;
    justify-items: center;
    grid-gap: 16px 0;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    justify-items: center;
    grid-gap: 0 32px;
    padding: 0 32px 0 32px;
  }
`;

const Content = styled.p`
  font-family: Sans-Narrow-Regular;
  font-size: 18px;
  color: #000;
  letter-spacing: 0;
  line-height: 32px;
  margin-top: 0;
  text-align: center;
  width: 75%;
  @media (min-width: 768px) {
  }
`;

const Button = styled.div`
  display: flex;
  border: 2px solid #00c48a;
  border-radius: 6px;
  width: 150px;
  height: 48px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 16px;
  margin-bottom: 48px;
`;

const Buttontext = styled.div`
  font-family: Sans-Narrow-Bold;
  font-size: 16px;
  color: #00c48a;
`;

class Happenings extends Component {
  static defaultProps = {
    showText: true
  };

  state = {
    saturdayNights: "",
    divaNights: "",
    weekendBrunch: "",
    bollywoodNight: "",
    content: "",
    error: ""
  };

  componentDidMount() {
    firestore
      .collection("happeningsText")
      .doc("happeningsText")
      .get()
      .then(happeningsText => {
        happeningsText.data();
        this.setState({
          ...happeningsText.data()
        });
      });
  }

  render() {
    const { removeMargin } = this.props;
    const removeMarginFlag = this.props.removeMargin ? { margin: 0 } : {};
    return (
      <PageWrapper>
        <Heading style={{ marginBottom: 48, ...removeMarginFlag }}>
          Happenings
        </Heading>
        {!this.props.showText && (
          <Link href={"/happenings"}>
            <a target="_blank" style={{ textDecoration: "none" }}>
              <Button>
                <Buttontext>Happenings</Buttontext>
              </Button>
            </a>
          </Link>
        )}
        <GridContainer>
          {data.map(item => (
            <Link href={item.link}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 8,
                  overflow: "hidden",
                  marginBottom: removeMargin ? 0 : 32,
                  cursor: "pointer"
                }}
                key={item.heading}
              >
                <div
                  className="imageContainer"
                  key={item.heading}
                  style={{ borderRadius: 8, display: "flex", flex: 1 }}
                >
                  {/* <div style={{ position: "relative", height: "100%" }}>
                  <img
                    src={item.imageUrl}
                    style={{ width: "100%", height: "100%", borderRadius: 8 }}
                  />
                  <Text
                    style={{
                      position: "absolute",
                      top: 0,
                      backgroundColor: "blue",
                      padding: 16,
                      margin: 0,
                      color: "#fff",
                      borderRadius: 8
                    }}
                  >
                    {item.heading}
                  </Text>
                </div> */}
                  <a href={item.link}>
                    <img
                      src={item.imageUrl}
                      alt="Happenings"
                      style={{
                        width: "100%",
                        height: 275,
                        position: "relative",
                        borderRadius: 8,
                        backgroundSize: "cover"
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: 8
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <Heading style={{ color: "#fff", textAlign: "center" }}>
                          {item.heading}
                        </Heading>
                      </div>
                      {/* <p>{item.description}</p> */}
                    </div>
                  </a>
                </div>
                <Text
                  style={{
                    margin: 0,
                    fontWeight: "bold",
                    textAlign: "center",
                    height: 24
                  }}
                >
                  {this.state[item.key]}
                </Text>
              </div>
            </Link>
          ))}
        </GridContainer>

        {this.props.showText && (
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
              flexDirection: "row"
            }}
          >
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
              <Content
                dangerouslySetInnerHTML={{ __html: this.state.content }}
              />
            </div>
          </Parallax>
        )}
      </PageWrapper>
    );
  }
}

export default Happenings;
