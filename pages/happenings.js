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
import { Helmet } from "react-helmet";

const Wrapper = styled.p`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

const Container = styled.div`
  display: grid;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    width: 1024px;
  }
`;

class Happenings extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>
            Happenings at Samudhra Premier Indian Restaurant & Lounge
          </title>
          <meta
            name={"description"}
            content={`Four straight days of partying with Samudhra, Diva Night for ladies on Thur, Bollywood night on Fri, live DJ "Saturday night" and speciality weekend brunches.`}
          />
        </Helmet>
        <ParallaxProvider>
          <Desktop>
            <DHeader showHeader={true} />
            <PlainParallax
              image={"/static/images/happeningsBanner.jpg"}
              height={600}
              strength={0}
            />
            <HappeningsComponent />
            {/* <MenusComponent /> */}
            <Footer imageUrl={"/static/images/footer2.jpg"} />
          </Desktop>
        </ParallaxProvider>
        <ParallaxProvider>
          <Mobile>
            <MHeader />
            {/* <PlainParallax
              image={"/static/images/happeningsBannerMobile.jpg"}
              height={450}
              strength={0}
            /> */}

            <PlainParallaxMobile
              image={"/static/images/happeningsBannerMobile.jpg"}
            />
            <HappeningsComponent removeMargin={true} />
            {/* <MenusComponent /> */}
            <Footer imageUrl={"/static/images/footer2.jpg"} />
          </Mobile>
        </ParallaxProvider>
      </>
    );
  }
}

export default Happenings;
