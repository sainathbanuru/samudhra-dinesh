import React from "react";
import styled from "styled-components";
import Link from "next/link";
import DHeader from "../components/desktop/header";
import Footer from "../components/desktop/footer";
import Desktop from "../components/common/desktop";
import Mobile from "../components/common/mobile";
import MHeader from "../components/mobile/header";
import { ParallaxProvider } from "react-scroll-parallax";
import PlainParallax from "../components/desktop/plainParallax";
import PlainParallaxMobile from "../components/mobile/plainParallaxMobile";
import Heading from "../components/common/heading";
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

const OrderOnlineComponent = ({ removeMargin }) => {
  const removeMarginFlag = removeMargin ? { margin: 0 } : {};
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Heading center style={{ ...removeMarginFlag }}>
        Order Online
      </Heading>
      <Link>
        <a
          target="_blank"
          style={{ textDecoration: "none" }}
          href={"https://www.toasttab.com/samudhrausa/v2/online-order#!/"}
        >
          <Button>
            <Buttontext>Order Now</Buttontext>
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
    </div>
  );
};

class OrderOnline extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Order Online | Samudhra Indian Premier Lounge</title>
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
              image={"/static/images/orderOnlineBanner.jpg"}
              height={600}
              strength={0}
            />
            <OrderOnlineComponent />
            {/* <MenusComponent /> */}
            <Footer />
          </Desktop>
        </ParallaxProvider>
        <ParallaxProvider>
          <Mobile>
            <MHeader />
            {/* <PlainParallax
              image={"/static/images/orderOnlineBannerMobile.jpg"}
              height={450}
              strength={0}
            /> */}

            <PlainParallaxMobile
              image={"/static/images/orderOnlineBannerMobile.jpg"}
            />
            <OrderOnlineComponent removeMargin={true} />
            {/* <MenusComponent /> */}
            <Footer />
          </Mobile>
        </ParallaxProvider>
      </>
    );
  }
}

export default OrderOnline;
