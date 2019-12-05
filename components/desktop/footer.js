import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Heading from "../common/heading";

import { Parallax, Background } from "react-parallax";
import AddressBlock from "../common/addressBlock";
import Popupmodal from "../common/popupmodal";

const Wrapper = styled.div`
  display: grid;
  background-color: #fff;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: ${props => (props.showImage ? "1fr " : "1fr")};
  }
`;

// const MainFooter = styled.div`
//   display: flex;
//   flex: 1;
//   padding: 75px 0 50px 0;

//   @media (max-width: 767px) {
//     flex-direction: column;
//   }
// `;

// const Section = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;

//   @media (max-width: 767px) {
//     flex-direction: column;
//     margin-bottom: 20px;
//   }

//   @media (min-width: 768px) {
//     width: 270px;
//   }
// `;

// const Logo = styled.img`
//   width: 20px;
//   height: 20px;
// `;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SocialIcon = styled.img`
  height: 24px;
  width: 24px;
  margin-right: 16px;
`;

const IconsContainer = styled.div`
  @media (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    padding-top: 75px;
    justify-content: center;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;

    justify-content: center;
  }
`;

const Text = styled.p`
  font-family: Quicksand-Regular;
  color: #fff;
`;

const FooterContainer = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  align-content: center;
  background-color: rgba(0, 0, 0, 0.5);

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    height: 540px;
    grid-template-columns: 1fr 1fr;
  }
`;
class Footer extends React.Component {
  static defaultProps = {
    showImage: false
  };

  render() {
    const { showImage, imageUrl, strength } = this.props;

    const sectionStyle = [
      {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "16px auto"
      }
    ];

    const timingsText = day => day.padEnd(20);

    return (
      <Wrapper showImage={showImage}>
        <Parallax
          blur={0}
          // bgImage={imageUrl || "/static/images/footer1.jpg"}
          bgImage={"/static/images/homepage1.jpg"}
          bgImageAlt="the cat"
          strength={0}
          style={{
            height: "auto",
            backgroundSize: "contain"
          }}
          bgImageSizes={"(max-width: 767px) 200px,800px"}
        >
          <FooterContainer>
            <AddressBlock />
            <div>
              <Heading style={{ color: "#fff" }}>Timings</Heading>
              <Text>
                <span style={{ width: 80 }}>Monday &nbsp; - &nbsp;</span> 11:30
                AM to 11:00 PM
              </Text>
              <Text>
                <span style={{ width: 80 }}>Tuesday &nbsp; - &nbsp;</span> 11:30
                AM to 11:00 PM
              </Text>
              <Text>
                <span style={{ width: 80 }}>Wednesday &nbsp; - &nbsp;</span>
                11:30 AM to 11:00 PM
              </Text>
              <Text>
                <span style={{ width: 80 }}>Thursday &nbsp; - &nbsp;</span>
                11:30 AM to 11:00 PM
              </Text>
              <Text>
                <span style={{ width: 80 }}>Friday &nbsp; - &nbsp;</span> 11:30
                AM to 12:00 AM
              </Text>
              <Text>
                <span style={{ width: 80 }}>Saturday &nbsp; - &nbsp;</span>
                11:30 AM to 12:00 AM
              </Text>
              <Text>
                <span style={{ width: 80 }}>Sunday &nbsp; - &nbsp;</span> 11:30
                AM to 11:00 PM
              </Text>
            </div>
          </FooterContainer>
        </Parallax>
      </Wrapper>
    );
  }
}

export default Footer;
