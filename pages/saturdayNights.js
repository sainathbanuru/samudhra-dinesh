import React from "react";
import styled from "styled-components";

import DHeader from "../components/desktop/header";
import Footer from "../components/desktop/footer";
import Desktop from "../components/common/desktop";
import Mobile from "../components/common/mobile";
import MHeader from "../components/mobile/header";
import { ParallaxProvider } from "react-scroll-parallax";
import PlainParallax from "../components/desktop/plainParallax";
import PlainParallaxMobile from "../components/mobile/plainParallaxMobile";
import HappeningsComponent from "../components/desktop/happenings";
import Heading from "../components/common/heading";
import Text from "../components/common/Text";
import { firestore } from "../components/firebase";
import { Helmet } from "react-helmet";

const Wrapper = styled.p`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

const Container = styled.div`
  @media (max-width: 767px) {
    padding: 16px;
  }

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 60%;
    margin-top: 32px;
    margin-bottom: 64px;
  }
`;

const Content = styled.div`
  font-family: Sans-Narrow-Regular;
  text-align: center;
`;

const SaturdayNightComponent = ({ days, timings, content, removeMargin }) => {
  const removeMarginFlag = removeMargin ? { margin: 0 } : {};

  return (
    <div>
      <Heading
        style={{ textAlign: "center", marginTop: 48, ...removeMarginFlag }}
      >
        Saturday Night
      </Heading>
      <Container>
        <Content dangerouslySetInnerHTML={{ __html: content }}></Content>

        {/* <Text style={{ textAlign: "center" }}>{content}</Text> */}

        <Text style={{ textAlign: "center" }}>
          {days} <br />
          {timings} <br />
          {/* <span style={{ fontSize: "0.8em" }}>( only for dine-in )</span> */}
        </Text>
      </Container>
    </div>
  );
};

class SaturdayNight extends React.Component {
  state = {
    days: "",
    timings: "",
    content: ""
  };

  componentDidMount() {
    firestore
      .collection("saturdayNights")
      .doc("saturdayNights")
      .get()
      .then(saturdayNights => {
        saturdayNights.data();
        this.setState({
          ...saturdayNights.data()
        });
      });
  }

  render() {
    const { days, timings, content } = this.state;

    return (
      <>
        <Helmet>
          <title>Saturday Night | Samudhra Indian Premier Lounge</title>
          <meta
            name={"description"}
            content={`Veg, non-veg & seafood thali for lunch now in Franklin Pk, NJ. Samudhra special Thali is a lavish meal made of a variety of dishes served in a round platter.
`}
          />
        </Helmet>
        <ParallaxProvider>
          <Desktop>
            <DHeader showHeader={true} />
            <PlainParallax
              image={"/static/images/saturdayNightBanner.jpg"}
              height={600}
              strength={0}
            />
            <SaturdayNightComponent
              content={content}
              days={days}
              timings={timings}
            />
            {/* <MenusComponent /> */}
            <Footer imageUrl={"/static/images/footer2.jpg"} />
          </Desktop>
        </ParallaxProvider>
        <ParallaxProvider>
          <Mobile>
            <MHeader />
            {/* <PlainParallax
              image={"/static/images/saturdayNightBannerMobile.jpg"}
              height={450}
              strength={0}
            /> */}

            <PlainParallaxMobile
              image={"/static/images/saturdayNightBannerMobile.jpg"}
            />
            <SaturdayNightComponent
              content={content}
              days={days}
              timings={timings}
              removeMargin={true}
            />
            {/* <MenusComponent /> */}
            <Footer imageUrl={"/static/images/footer2.jpg"} />
          </Mobile>
        </ParallaxProvider>
      </>
    );
  }
}

export default SaturdayNight;
