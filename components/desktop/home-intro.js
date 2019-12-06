import React from "react";
import styled from "styled-components";
import Link from "next/link";
// import { Parallax } from "react-scroll-parallax";

// import { ParallaxBanner } from "react-scroll-parallax";

import { Parallax, Background } from "react-parallax";

const PageWrapper = styled.div``;

// const Wrapper = styled.div`
//   height: calc(100vh - 100px);
//   text-align: center;
//   min-height: 600px;
//   max-height: 1000px;
// `;

// const Image = styled.img`
//   height: inherit;
//   width: auto;
//   max-width: 100%;
//   min-height: inherit;
//   max-height: inherit;
// `;

// const IntroText = styled.div`
//   position: absolute;
//   text-align: center;
//   top: 50px;
//   width: calc(100% - 100px);
// `;

// const Points = styled.ul`
//   display: flex;
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   font-size: 16px;
//   justify-content: center;
//   font-family: "PlayfairDisplay-Bold";
//   color: #132c48;

//   li {
//     padding: 0 15px;
//   }
// `;

// const Slogan = styled.div`
//   font-family: "Objectivity-Bold";
//   font-size: 32px;
//   color: #132c48;
//   text-align: center;
//   line-height: 50px;
//   padding: 20px;
// `;

// const SubSlogan = styled.div`
//   font-size: 16px;
//   color: #132c48;
//   letter-spacing: 0;
//   line-height: 32px;
// `;

const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 767px) {
  }

  @media (min-width: 768px) {
    margin-top: 64;
  }
`;

// const ParallaxContainer = styled.div`
//   height: 300px;
//   padding-bottom: 50px;
//   padding-top: 50px;
// `;

// const ParallaxVideo = styled.video`
//   min-width: 100%;
//   position: fixed;
//   top: 0;
//   z-index: -999;
// `;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const SocialIcon = styled.img`
  height: 24px;
  width: 24px;
  margin: 16px;
`;

const Text = styled.p`
  font-family: Quicksand-Regular;
`;

class HomeIntro extends React.Component {
  state = {
    muted: true
  };

  // componentDidMount() {
  //   jarallax(document.querySelectorAll(".jarallax"));
  // }

  // componentWillUnmount() {
  //   jarallax(document.querySelectorAll(".jarallax"), "destroy");
  // }

  // playVideo = () => {
  //   document.getElementById("background-video").play();
  // };

  muteVideo = () => {
    this.setState({
      muted: !this.state.muted
    });
    document.getElementById("background-video").muted = false;
  };

  render() {
    const icon = this.state.muted ? "unmute" : "mute";
    return (
      <PageWrapper>
        {/* <Parallax
          blur={0}
          bgImage={"/static/images/footer1.jpg"}
          bgImageAlt="the cat"
          strength={-200}
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            backgroundSize: "cover"
          }}
          styleInner={{
            backgroundSize: "contain"
          }}
          y={[-20, 20]}
        > */}
        <div style={{ height: "100vh", width: "100%" }}>
          <video
            ref={"vidRef"}
            id="background-video"
            autoPlay
            loop
            style={{
              minWidth: "100%",
              height: "100%",
              position: "fixed",
              top: 0,
              zIndex: -999,
              maxHeight: 1280,
              objectFit: "fill"
            }}
            muted={this.state.muted}
          >
            <source src={"/static/video/home_video.mp4"} type="video/mp4" />
          </video>

          {/* <video loop style={{}}>
            <source src="/static/video/FP1.mp4" type="video/mp4" />
          </video> */}
          {/* <h3
              style={{
                color: "#000",
                fontSize: 48,
                textAlign: "center",
                margin: 0
              }}
              >
              GOURMET CHEF <br />
              </h3>
              <h3
              style={{
                color: "#000",
                fontSize: 48,
                textAlign: "center",
                margin: 0
              }}
              >
              AT YOUR DINNER TABLE
            </h3> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height: "100%"
            }}
          >
            <HeaderContainer>
              <SocialContainer>
                <Link href="https://facebook.com/samudhrausa-102132237796713/">
                  <a target="_blank">
                    <SocialIcon src="/static/images/facebook.png" />
                  </a>
                </Link>
                <Link href="https://www.instagram.com/samudhrausa/">
                  <a target="_blank">
                    <SocialIcon src="/static/images/instagram.png" />
                  </a>
                </Link>
                {/* <SocialIcon src="/static/images/snapchat.png" /> */}
                <Link href="https://twitter.com/Samudhrausa">
                  <a target="_blank">
                    <SocialIcon src="/static/images/twitter.png" />
                  </a>
                </Link>
                <Link href="https://yelp.to/qTKq/NApINzA3bZ">
                  <a target="_blank">
                    <SocialIcon src={`/static/images/yelp.png`} />
                  </a>
                </Link>
                <Link href="https://www.youtube.com/channel/UC9h9dAaRg-FRmSwVyyeG8rg?view_as=subscriber">
                  <a target="_blank">
                    <SocialIcon src={`/static/images/youtube.png`} />
                  </a>
                </Link>
              </SocialContainer>
            </HeaderContainer>
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                pointer: "cursor"
              }}
            >
              <img
                src={`static/images/${icon}.png`}
                style={{
                  width: 32,
                  height: 32,
                  zIndex: 10000,
                  pointer: "cursor"
                }}
                onClick={this.muteVideo}
                alt={"Mute"}
              />
              {/* <button onClick={this.muteVideo}>unMute</button> */}
              {/* <button onClick={this.playVideo}>Play</button> */}
            </div>{" "}
            <div
              style={{
                position: "fixed",
                bottom: 0,
                zIndex: 10000
              }}
            >
              <img
                src={`static/images/${icon}.png`}
                style={{
                  width: 32,
                  height: 32,
                  zIndex: 10000,
                  pointer: "cursor"
                }}
                onClick={this.muteVideo}
                alt={"Mute"}
              />
              {/* <button onClick={this.muteVideo}>unMute</button> */}
              {/* <button onClick={this.playVideo}>Play</button> */}
            </div>
          </div>
        </div>
        {/* </Parallax> */}
      </PageWrapper>
    );
  }
}

export default HomeIntro;
