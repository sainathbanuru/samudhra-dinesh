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

const HappyHoursComponent = ({ days, timings, removeMargin, content }) => {
  const removeMarginFlag = removeMargin ? { margin: 0 } : {};
  return (
    <div>
      <Heading
        style={{ textAlign: "center", marginTop: 48, ...removeMarginFlag }}
      >
        HAPPY HOURS
      </Heading>
      <Container>
        <Content dangerouslySetInnerHTML={{ __html: content }}></Content>

        {/* <Text style={{ textAlign: "center" }}>
          Whether you like to unwind at the end of a day-long with a drink or
          two or love taking your squad for a group party. Samudhra has the
          right ambience and happy hours to pamper you with a variety of
          alcohol-infused, salted-rimmed, margaritas, lime- or lemon-adorned
          mixed spirits or chilled Beer.
        </Text> */}
        <br />
        <Text style={{ textAlign: "center", marginTop: 0 }}>
          {days} <br />
          {timings}
        </Text>
      </Container>
    </div>
  );
};

const MenuD = styled.div`
  #imp-love {
    display: none;
  }
`;

class HappyHours extends React.Component {
  state = {
    days: "",
    timings: ""
  };

  componentDidMount() {
    this.renderHappyMenu();
    firestore
      .collection("happyHours")
      .doc("happyHours")
      .get()
      .then(happyHours => {
        happyHours.data();
        this.setState({
          ...happyHours.data()
        });
      });
  }

  renderHappyMenu = () => {
    const script = document.createElement("script");

    script.async = true;
    script.id = "w8k-10";
    script.src = "https://imenupro.com/!w8k-10";
    // document.head.appendChild(script);

    if (window.innerWidth > 768) {
      const happyDesktop = document.getElementById("happyHoursDesktop");
      if (happyDesktop.children.length == 0) {
        happyDesktop.appendChild(script);
      }
    } else {
      const happyMobile = document.getElementById("happyHoursMobile");
      if (happyMobile.children.length == 0) {
        happyMobile.appendChild(script);
      }
    }

    // const childrenLength = document.getElementById("menuContainer").children
    //   .length;

    // if (childrenLength == 0) {
    //   console.log(childrenLength);
    //   document.getElementById("menuContainer").appendChild(script);
    // }
  };

  render() {
    return (
      <>
        <Helmet>
          <title>Happy Hours Mon-Thur from 3:30 to 6:00 pm</title>
          <meta
            name={"description"}
            content={`Whether you like a drink in the evening or love partying with your squad Samudhra happy hours are the best in Franklin Pk, NJ offering amazing drinks Mon- Fri`}
          />
        </Helmet>

        <ParallaxProvider>
          <Desktop>
            <DHeader showHeader={true} />
            <PlainParallax
              image={"/static/images/happyHoursBanner.jpg"}
              height={600}
              strength={0}
            />
            {/* <MenusComponent /> */}
            <HappyHoursComponent
              days={this.state.days}
              timings={this.state.timings}
              content={this.state.content}
            />

            <MenuD id="happyHoursDesktop" />
            <Footer imageUrl={"/static/images/footer2.jpg"} />
          </Desktop>
        </ParallaxProvider>
        <ParallaxProvider>
          <Mobile>
            <MHeader />
            {/* <PlainParallax
              image={"/static/images/happyHoursBannerMobile.jpg"}
              height={450}
              strength={0}
            /> */}

            <PlainParallaxMobile
              image={"/static/images/happyHoursBannerMobile.jpg"}
            />
            {/* <MenusComponent /> */}
            <HappyHoursComponent
              days={this.state.days}
              timings={this.state.timings}
              removeMargin={true}
              content={this.state.content}
            />
            <MenuD id="happyHoursMobile" />

            <Footer imageUrl={"/static/images/footer2.jpg"} />
          </Mobile>
        </ParallaxProvider>
      </>
    );
  }
}

export default HappyHours;
