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

const WeekendBrunchComponent = ({ days, timings, content, removeMargin }) => {
  const removeMarginFlag = removeMargin ? { margin: 0 } : {};

  return (
    <div>
      <Heading
        style={{ textAlign: "center", marginTop: 48, ...removeMarginFlag }}
      >
        Weekend Brunch
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

const WeekendBrunchD = styled.div`
  #imp-love {
    display: none;
  }
`;

class WeekendBrunch extends React.Component {
  state = {
    days: "",
    timings: "",
    content: ""
  };

  componentDidMount() {
    this.renderWeekendBrunch();
    firestore
      .collection("weekendBrunch")
      .doc("weekendBrunch")
      .get()
      .then(weekendBrunch => {
        weekendBrunch.data();
        this.setState({
          ...weekendBrunch.data()
        });
      });
  }

  renderWeekendBrunch = () => {
    const script = document.createElement("script");

    script.async = true;
    script.id = "w8k-16";
    script.src = "https://imenupro.com/!w8k-16";
    // document.head.appendChild(script);

    if (window.innerWidth > 768) {
      const happyDesktop = document.getElementById("weekendBrunchDesktop");
      if (happyDesktop.children.length == 0) {
        happyDesktop.appendChild(script);
      }
    } else {
      const happyMobile = document.getElementById("weekendBrunchMobile");
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
    const { days, timings, content } = this.state;

    return (
      <>
        <Helmet>
          <title>Weekend Brunch | Samudhra Indian Premier Lounge</title>
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
              image={"/static/images/weekendBrunchBanner.jpg"}
              height={600}
              strength={0}
            />
            {/* <WeekendBrunchComponent
              content={content}
              days={days}
              timings={timings}
            /> */}

            <div>
              <Heading
                style={{
                  textAlign: "center",
                  marginTop: 48
                }}
              >
                Weekend Brunch
              </Heading>
              <Container>
                <Content
                  dangerouslySetInnerHTML={{ __html: content }}
                ></Content>

                {/* <Text style={{ textAlign: "center" }}>{content}</Text> */}

                <Text style={{ textAlign: "center" }}>
                  {days} <br />
                  {timings} <br />
                  {/* <span style={{ fontSize: "0.8em" }}>( only for dine-in )</span> */}
                </Text>
              </Container>
            </div>

            <WeekendBrunchD id="weekendBrunchDesktop" />

            {/* <MenusComponent /> */}
            <Footer imageUrl={"/static/images/footer2.jpg"} />
          </Desktop>
        </ParallaxProvider>
        <ParallaxProvider>
          <Mobile>
            <MHeader />
            {/* <PlainParallax
              image={"/static/images/weekendBrunchBannerMobile.jpg"}
              height={450}
              strength={0}
            /> */}
            <PlainParallaxMobile
              image={"/static/images/weekendBrunchBannerMobile.jpg"}
            />
            {/* <WeekendBrunchComponent
              content={content}
              days={days}
              timings={timings}
              removeMargin={true}
            /> */}

            <div>
              <Heading
                style={{ textAlign: "center", marginTop: 48, margin: 0 }}
              >
                Weekend Brunch
              </Heading>
              <Container>
                <Content
                  dangerouslySetInnerHTML={{ __html: content }}
                ></Content>

                {/* <Text style={{ textAlign: "center" }}>{content}</Text> */}

                <Text style={{ textAlign: "center" }}>
                  {days} <br />
                  {timings} <br />
                  {/* <span style={{ fontSize: "0.8em" }}>( only for dine-in )</span> */}
                </Text>
              </Container>
            </div>

            <WeekendBrunchD id="weekendBrunchMobile" />
            {/* <MenusComponent /> */}
            <Footer imageUrl={"/static/images/footer2.jpg"} />
          </Mobile>
        </ParallaxProvider>
      </>
    );
  }
}

export default WeekendBrunch;
