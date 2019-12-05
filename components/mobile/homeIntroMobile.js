import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { Parallax, Background } from "react-parallax";

const PageWrapper = styled.div``;

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

class HomeIntroMobile extends React.Component {
  state = {
    muted: true
  };

  render() {
    const icon = this.state.muted ? "unmute" : "mute";
    return (
      <PageWrapper>
        <Parallax
          blur={0}
          bgImage={"/static/images/homeIntroMobile.jpeg"}
          bgImageAlt="the cat"
          strength={0}
          style={{
            height: 450,
            display: "flex",
            backgroundSize: "contain",
            flexDirection: "row"
          }}
        >
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
          </div>
        </Parallax>
      </PageWrapper>
    );
  }
}

export default HomeIntroMobile;
