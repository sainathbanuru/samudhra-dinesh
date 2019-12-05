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
import Text from "../components/common/Text";
import HeadingText from "../components/common/heading";
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
    padding: 0 16px;
  }

  @media (min-width: 768px) {
    margin: 64px auto;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const CareersComponent = props => {
  const removeMarginFlag = props.removeMargin ? { margin: 0 } : {};

  return (
    <Container>
      <HeadingText style={{ textAlign: "center", ...removeMarginFlag }}>
        Careers
      </HeadingText>
      <Text style={{ textAlign: "center" }}>
        WANT TO JOIN US IN OUR NEW JOURNEY AT SAMUDHRA? <br /> Email us your
        resume or drop a line at
        <br />
        <a href={`mailto:${props.email}`} target="_blank">
          {props.email}
        </a>
      </Text>
    </Container>
  );
};

class LocateUs extends React.Component {
  state = {
    email: ""
  };
  unsubscribeFromFirestore = null;

  componentDidMount() {
    firestore
      .collection("careers")
      .doc("careersEmail")
      .get()
      .then(email => {
        email.data();
        this.setState({
          ...email.data()
        });
      });
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Careers | Samudhra Indian Premier Lounge</title>
          <meta
            name={"description"}
            content={
              "Samudhra means ocean of flavors named after the emotive flavours of Indian cuisine as we proudly bring Indian food culture and its authentic taste to New Jersey"
            }
          />
        </Helmet>
        <ParallaxProvider>
          <Desktop>
            <DHeader showHeader={true} />
            <PlainParallax
              image={"/static/images/careerBanner.jpg"}
              height={700}
              strength={0}
            />
            <CareersComponent email={this.state.email} />
            {/* <MenusComponent /> */}
            <Footer />
          </Desktop>
        </ParallaxProvider>
        <ParallaxProvider>
          <Mobile>
            <MHeader />
            {/* <PlainParallax
              image={"/static/images/careerBannerMobile.jpg"}
              height={450}
              strength={0}
            /> */}
            <PlainParallaxMobile
              image={"/static/images/careerBannerMobile.jpg"}
            />
            <CareersComponent email={this.state.email} removeMargin={true} />
            {/* <MenusComponent /> */}
            <Footer />
          </Mobile>
        </ParallaxProvider>
      </>
    );
  }
}

export default LocateUs;
