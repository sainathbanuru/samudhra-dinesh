import React, { Component, PureComponent } from "react";
import styled from "styled-components";
import EmptyLines from "../common/emptyLines";
import Heading from "../common/heading";

import { Parallax, Background } from "react-parallax";
import { firestore } from "../firebase";

// const PageWrapper = styled.div`
//   display: flex;

//   @media (max-width: 767px) {
//     flex-direction: column-reverse;
//   }
//   @media (min-width: 768px) {
//     flex-direction: row;
//     height: 70vh;
//     max-height: 768px;
//   }
// `;

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

const Section = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    flex: 1;
  }
  @media (min-width: 768px) {
    height: 80vh;
  }
`;

const Content = styled.p`
  font-family: Sans-Narrow-Regular;
  font-size: 18px;
  color: #000;
  letter-spacing: 0;
  line-height: 32px;
  margin-top: 0;
  text-align: center;
  @media (min-width: 768px) {
  }
`;

const ContactNumber = styled.p`
  font-family: Quicksand-Regular;
  color: #132c48;
`;

const Container = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

class About1to12 extends PureComponent {
  state = {
    title: "",
    content: ""
  };

  componentDidMount() {
    firestore
      .collection("explore")
      .doc("exploreHome")
      .get()
      .then(explore => {
        this.setState({
          title: explore.data().title,
          content: explore.data().content
        });
      });
  }

  render() {
    const { title, content } = this.state;
    const { removeSpace } = this.props;
    return (
      <Container>
        <Parallax
          blur={0}
          bgImage={"/static/images/wave250Op.png"}
          bgImageAlt="the cat"
          strength={800}
          style={{
            height: "auto",
            display: "flex",
            justifyContent: "center",
            backgroundSize: "contain",
            padding: "16px 0",
            flexDirection: "row"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: removeSpace ? "0px auto" : "16px auto",
              padding: removeSpace ? 0 : "16px",
              maxWidth: "75%"
            }}
          >
            <Heading style={{ margin: removeSpace ? 0 : "16px" }}>
              {title}
            </Heading>

            {/* <EmptyLines /> */}

            <Content dangerouslySetInnerHTML={{ __html: content }} />

            {/* <ContactNumber>
            Tel: 123-456-7890 | Email: info@mysite.com
          </ContactNumber> */}
          </div>
        </Parallax>
      </Container>
    );
  }
}

export default About1to12;
