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

const Wrapper = styled.p`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

const Container = styled.div`
  display: flex;
  margin: 16px;
  @media (max-width: 767px) {
    flex-direction: column;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const data = [
  {
    name: "sainath banuru",
    role: "Chief Chef",
    image: "/static/images/meet.jpeg",
    description:
      "Samudhra brings Indian food culture to New Jersey, showcasing the authentic taste of India and its multifaceted traditions.   We are a premier Indian restaurant and lounge featuring a sprawling spread of increasingly sought after ethnic Indian cuisine, the finest wines and handcrafted cocktails, all set in vibrant and stylish interiors which add a distinct aura to the festival of gastronomy! There’s a phrase that is deeply rooted in Indian tradition, 'the way to the heart is through the stomach'. We have carefully crafted all aspects to create a culinary experience that is a treat for all your senses!"
  },
  {
    name: "sainath banuru",
    role: "Chief Chef",
    image: "/static/images/meet.jpeg",
    description:
      "Samudhra brings Indian food culture to New Jersey, showcasing the authentic taste of India and its multifaceted traditions.   We are a premier Indian restaurant and lounge featuring a sprawling spread of increasingly sought after ethnic Indian cuisine, the finest wines and handcrafted cocktails, all set in vibrant and stylish interiors which add a distinct aura to the festival of gastronomy! There’s a phrase that is deeply rooted in Indian tradition, 'the way to the heart is through the stomach'. We have carefully crafted all aspects to create a culinary experience that is a treat for all your senses!"
  },
  {
    name: "sainath banuru",
    role: "Chief Chef",
    image: "/static/images/meet.jpeg",
    description:
      "Samudhra brings Indian food culture to New Jersey, showcasing the authentic taste of India and its multifaceted traditions.   We are a premier Indian restaurant and lounge featuring a sprawling spread of increasingly sought after ethnic Indian cuisine, the finest wines and handcrafted cocktails, all set in vibrant and stylish interiors which add a distinct aura to the festival of gastronomy! There’s a phrase that is deeply rooted in Indian tradition, 'the way to the heart is through the stomach'. We have carefully crafted all aspects to create a culinary experience that is a treat for all your senses!"
  }
];

const Text = styled.p`
  font-family: Quicksand-Regular;
  color: ${props => (props.color ? props.color : "#000")};
  text-align: ${props => (props.center ? "center" : "left")};
`;

const EmptyView = styled.div`
  width: 100%;
  height: 2px;
  background-color: #ddd;
  margin: 0;
`;

const Content = styled.p`
  font-family: Quicksand-Regular;
  font-size: 14px;
  color: #000;
  letter-spacing: 0;
  line-height: 32px;
  margin-top: 0;
  margin-left: 16px;
  text-align: justify;
  flex: 3;
  @media (min-width: 768px) {
    width: 60%;
  }
`;

const FolksComponent = () => {
  return (
    <>
      {data.map((chef, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
          key={chef.name + index}
        >
          <EmptyView />
          <Heading style={{ marginBottom: 0 }}>{chef.name}</Heading>
          {/* <Text style={{ marginBottom: 0 }}>{chef.name}</Text> */}
          <Text color={"#aaa"} center>
            {chef.role}
          </Text>
          <EmptyView />
          <Container>
            <div style={{ flex: 2 }}>
              <img
                src={chef.image}
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "cover",
                  marginRight: 16
                }}
                alt={"Folks"}
              />
            </div>
            <Content style={{ width: "60%" }}>{chef.description}</Content>
          </Container>
        </div>
      ))}
    </>
  );
};

class MeetFolks extends React.Component {
  render() {
    return (
      <>
        <ParallaxProvider>
          <Desktop>
            <DHeader showHeader={true} />
            <PlainParallax
              image={
                "https://image.shutterstock.com/z/stock-photo-hot-spices-on-rustic-background-166780229.jpg"
              }
              height={600}
            />
            <FolksComponent />
            {/* <MenusComponent /> */}
            <Footer />
          </Desktop>
        </ParallaxProvider>
        <ParallaxProvider>
          <Mobile>
            <MHeader />
            {/* <PlainParallax strength={0} height={450} /> */}
            <PlainParallaxMobile
              image={
                "https://image.shutterstock.com/z/stock-photo-hot-spices-on-rustic-background-166780229.jpg"
              }
            />
            <FolksComponent />
            {/* <MenusComponent /> */}
            <Footer />
          </Mobile>
        </ParallaxProvider>
      </>
    );
  }
}

export default MeetFolks;
