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

const UnlimitedThaliComponent = ({ days, timings, removeMargin, content }) => {
  const removeMarginFlag = removeMargin ? { margin: 0 } : {};

  return (
    <div>
      <Heading style={{ textAlign: "center", marginTop: 48 }}>
        UNLIMITED THALI FOR LUNCH
      </Heading>
      <Container>
        <Content dangerouslySetInnerHTML={{ __html: content }}></Content>

        {/* <Text style={{ textAlign: "center" }}>
          A celebration in itself, Thali is a lavish yet wholesome meal served
          in a round platter and katoris (bowls) with a variety of dishes that
          looks like a color palette on the table. There are Veg &
          Non-vegetarian versions of the Thali and an exclusive Samudhra special
          version "Seafood Thali". Typically, thali includes a variety of
          curries, dal, curd, rice & roti and a sweet treat at the end of the
          meal. It is an Indian way of having a meal that is balanced, delicious
          and enjoyable turning mealtime into a feast time!
        </Text> */}

        <Text style={{ textAlign: "center" }}>
          {days} <br />
          {timings} <br />
          <span style={{ fontSize: "0.8em" }}>( only for dine-in )</span>
        </Text>
      </Container>
    </div>
  );
};

const UnlimitedThaliD = styled.div`
  #imp-love {
    display: none;
  }
`;

class UnlimitedThali extends React.Component {
  state = {
    days: "",
    timings: "",
    content: ""
  };

  componentDidMount() {
    this.renderUnlimitedThaliMenu();
    firestore
      .collection("unlimitedThali")
      .doc("unlimitedThali")
      .get()
      .then(thaliDetails => {
        thaliDetails.data();
        this.setState({
          ...thaliDetails.data()
        });
      });
  }

  renderUnlimitedThaliMenu = () => {
    const script = document.createElement("script");

    script.async = true;
    script.id = "w8k-15";
    script.src = "https://imenupro.com/!w8k-15";
    // document.head.appendChild(script);

    if (window.innerWidth > 768) {
      const happyDesktop = document.getElementById("unlimitedThaliDesktop");
      if (happyDesktop.children.length == 0) {
        happyDesktop.appendChild(script);
      }
    } else {
      const happyMobile = document.getElementById("unlimitedThaliMobile");
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
          <title>Unlimited Thali for Lunch from 11:30 am – 4:30 pm</title>
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
              image={"/static/images/unlimitedThaliBanner.jpeg"}
              height={600}
              strength={0}
            />
            {/* <UnlimitedThaliComponent
              days={this.state.days}
              timings={this.state.timings}
              content={this.state.content}
            /> */}

            <div>
              <Heading style={{ textAlign: "center", marginTop: 48 }}>
                UNLIMITED THALI FOR LUNCH
              </Heading>
              <Container>
                <Content
                  dangerouslySetInnerHTML={{ __html: this.state.content }}
                ></Content>

                {/* <Text style={{ textAlign: "center" }}>
          A celebration in itself, Thali is a lavish yet wholesome meal served
          in a round platter and katoris (bowls) with a variety of dishes that
          looks like a color palette on the table. There are Veg &
          Non-vegetarian versions of the Thali and an exclusive Samudhra special
          version "Seafood Thali". Typically, thali includes a variety of
          curries, dal, curd, rice & roti and a sweet treat at the end of the
          meal. It is an Indian way of having a meal that is balanced, delicious
          and enjoyable turning mealtime into a feast time!
        </Text> */}

                <Text style={{ textAlign: "center" }}>
                  {this.state.days} <br />
                  {this.state.timings} <br />
                  <span style={{ fontSize: "0.8em" }}>
                    ( only for dine-in )
                  </span>
                </Text>
              </Container>
            </div>

            <UnlimitedThaliD id="unlimitedThaliDesktop" />

            {/* <MenusComponent /> */}
            <Footer imageUrl={"/static/images/footer2.jpg"} />
          </Desktop>
        </ParallaxProvider>
        <ParallaxProvider>
          <Mobile>
            <MHeader />
            {/* <PlainParallax
              image={"/static/images/unlimitedThaliBannerMobile.jpeg"}
              height={450}
              strength={0}
            /> */}

            <PlainParallaxMobile
              image={"/static/images/unlimitedThaliBannerMobile.jpeg"}
            />
            {/* <UnlimitedThaliComponent
              days={this.state.days}
              timings={this.state.timings}
              removeMargin={true}
              content={this.state.content}
            /> */}

            <div>
              <Heading style={{ textAlign: "center", marginTop: 48 }}>
                UNLIMITED THALI FOR LUNCH
              </Heading>
              <Container>
                <Content
                  dangerouslySetInnerHTML={{ __html: this.state.content }}
                ></Content>

                {/* <Text style={{ textAlign: "center" }}>
          A celebration in itself, Thali is a lavish yet wholesome meal served
          in a round platter and katoris (bowls) with a variety of dishes that
          looks like a color palette on the table. There are Veg &
          Non-vegetarian versions of the Thali and an exclusive Samudhra special
          version "Seafood Thali". Typically, thali includes a variety of
          curries, dal, curd, rice & roti and a sweet treat at the end of the
          meal. It is an Indian way of having a meal that is balanced, delicious
          and enjoyable turning mealtime into a feast time!
        </Text> */}

                <Text style={{ textAlign: "center" }}>
                  {this.state.days} <br />
                  {this.state.timings} <br />
                  <span style={{ fontSize: "0.8em" }}>
                    ( only for dine-in )
                  </span>
                </Text>
              </Container>
            </div>

            <UnlimitedThaliD id="unlimitedThaliMobile" />

            {/* <MenusComponent /> */}
            <Footer imageUrl={"/static/images/footer2.jpg"} />
          </Mobile>
        </ParallaxProvider>
      </>
    );
  }
}

export default UnlimitedThali;
