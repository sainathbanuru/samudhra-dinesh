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
import Contact from "../components/desktop/contact";
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

const data = [
  {
    heading: "",
    name: "FARM TO TABLE",
    content: "Welcome primavera with the gift of earth",
    items: [
      {
        title: "PEAS WITH MINT AND ROSE PETALS",
        tags: ["VEGETERIAN", "ORGANIC"]
      },
      {
        title: "GRILLED CORN WITH HERB BUTTER",
        tags: []
      },
      {
        title: "FALAFEL-SPICED TOMATOES ON WHOLE WHEAT FLATBREAD",
        tags: []
      },
      {
        title: "SPARKLING WINE WITH GINGER ALE AND CHERRIES",
        tags: []
      },
      {
        title: "FARMER'S MARKET QUINOA SALAD",
        tags: []
      },
      {
        title: "PRIMAVERA PISOTTO",
        tags: ["VEGETERIAN", "ORGANIC"]
      },
      {
        title: "PEAS WITH MINT AND ROSE PETALS",
        tags: ["VEGETERIAN", "ORGANIC"]
      }
    ]
  },
  {
    heading: "",
    name: "IN VINO WE TRUST",
    content: "A variety of exotic wines paired with 7 fresh tapas",
    items: [
      {
        title: "PAN CON TOMATE",
        tags: []
      },
      {
        title: "PADERON PEPPERS",
        tags: ["SPICY"]
      },
      {
        title: "JAMON & SALCHICHON",
        tags: []
      },
      {
        title: "BROCCOLINI AND CHILLI TUNA",
        tags: ["SPICY"]
      },
      {
        title: "CRROQUETAS DE POLLO",
        tags: []
      },
      {
        title: "SPANISH SEAFOOD PAELLA",
        tags: []
      }
    ]
  },
  {
    heading: `BALSAMIC RASPBERRIES AND ${"\n \n "}
    MASCARPONE CHEESE`,
    name: "TASTING MENU",
    content: "A 9 course meal that's bold on taste, light on calories",
    items: [
      {
        title: "BREAD AND SYRIAN OLIVES",
        tags: []
      },
      {
        title: "PEARS AND GOATS CHEESE",
        tags: ["ORGANIC", "GLUETEN FREE"]
      },
      {
        title: "NEO CAPRES",
        tags: []
      },
      {
        title: "CARB BISQUE",
        tags: ["ORGANIC"]
      },
      {
        title: "POACHED EGGS AND ASPARAGUS",
        tags: []
      },
      {
        title: "WHOLE WHEAT PIZZA A-LA BOSTON",
        tags: []
      },
      {
        title: "SMOKED SALMON WITH BRANDY ",
        tags: []
      },
      {
        title: "SEA BASS AND ORANGES",
        tags: ["SPICY", "ORGANIC"]
      }
    ]
  },
  {
    heading: `FRESH PINEAPPLE AND MINT`,
    name: "HOLIDAYS MENU",
    content: "Jingle bell all the way to your table",
    items: [
      {
        title: "A SHOT OF HOMEMADE EGGNOG, MODERN STYLE",
        tags: []
      },
      {
        title: "MINI POLENTA CAKES STUFFED WITH MUSHROOMS AND FETA",
        tags: []
      },
      {
        title: "BOLANO'S FESTIVE SALAD WITH HONEY-GRILLED APPLES",
        tags: ["ORGANIC"]
      },
      {
        title: "ROSTED YAMS WITH A DASH OF BOURBON",
        tags: []
      },
      {
        title: "RUSTIC CURED TURKEY ENCRUSTED WITH CANDIED PINE NUTS",
        tags: ["SPICY", "ORGANIC"]
      },
      {
        title: "BACON ROSEMARY MASHED POTATOES AND PARSLEY        ",
        tags: []
      },
      {
        title: "PORK MEDALLIONS TOPPED WITH SWEET CORN CREAM",
        tags: []
      },
      {
        title: "QUINOA PUTTANESCA WITH CHILI CRANBERRY SAUSE",
        tags: ["HOT"]
      }
    ]
  }
];

const MenusComponent = () => {
  return (
    <Wrapper className="wrapper">
      <h1 style={{ marginBottom: 64 }}>Menus</h1>

      {data.map(item => (
        <>
          <h3>{item.heading}</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 64
            }}
          >
            <h3>{item.name}</h3>
            <p style={{ color: "#aaa", marginTop: 0, textAlign: "center" }}>
              {item.content}
            </p>
            <div
              style={{
                width: "10%",
                height: 1,
                backgroundColor: "#000",
                marginBottom: 64
              }}
            />

            <Container>
              {item.items.map(item => {
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      margin: "16px 0"
                    }}
                  >
                    <h5 style={{ textAlign: "center" }}>{item.title}</h5>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center"
                      }}
                    >
                      {item.tags.map(tag => (
                        <p
                          style={{
                            color: "#fff",
                            backgroundColor: "#000",
                            margin: "0 8px",
                            padding: 4
                          }}
                        >
                          {tag}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </Container>
          </div>
        </>
      ))}
    </Wrapper>
  );
};

class Reservations extends React.Component {
  render() {
    const iframe = `<script type="text/javascript" src='//www.opentable.com/widget/reservation/loader?rid=1049302

    &domain=com&type=standard&theme=standard&lang=en&overlay=false&iframe=true'></script>`;
    return (
      <>
        <Helmet>
          <title>Reservations | Samudhra Indian Premier Lounge</title>
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
              image={"/static/images/reservationsBanner.jpg"}
              height={700}
              strength={0}
            />
            <Contact />
            {/* <MenusComponent /> */}
            {/* <div dangerouslySetInnerHTML={{ __html: iframe }} /> */}
            <Footer />
          </Desktop>
        </ParallaxProvider>
        <ParallaxProvider>
          <Mobile>
            <MHeader />
            {/* <PlainParallax
              image={"/static/images/reservationsBannerMobile.jpg"}
              height={450}
              strength={0}
            />{" "} */}

            <PlainParallaxMobile
              image={"/static/images/reservationsBannerMobile.jpg"}
            />
            {/* <MenusComponent /> */}
            {/* <Contact /> */}
            <Heading style={{ textAlign: "center", margin: 0 }}>
              {" "}
              Reservations
            </Heading>
            <div
              dangerouslySetInnerHTML={{ __html: iframe }}
              style={{ display: "flex", justifyContent: "center" }}
            />
            <Footer />
          </Mobile>
        </ParallaxProvider>
      </>
    );
  }
}

export default Reservations;
