import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Text from "./Text";

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
    margin-bottom: 20px;
  }
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    margin-top: 20px;
    width: 100%;
  }

  @media (min-width: 768px) {
    align-items: center;
    justify-content: center;
    width: 30%;
  }
`;

const AddressBlock = props => {
  const fb = props.icons ? "facebook" : "facebookB";
  const instagram = props.icons ? "instagram" : "instagramB";
  const yelp = props.icons ? "yelp" : "yelpB";
  const twitter = props.icons ? "twitter" : "twitterB";
  const youtube = props.icons ? "youtube" : "youtubeB";
  return (
    <AddressContainer>
      <IconsContainer>
        <SocialContainer>
          <Link href="https://facebook.com/samudhrausa-102132237796713/">
            <a target="_blank">
              <SocialIcon src={`/static/images/${fb}.png`} />
            </a>
          </Link>
          <Link href="https://www.instagram.com/samudhrausa/">
            <a target="_blank">
              <SocialIcon src={`/static/images/${instagram}.png`} />
            </a>
          </Link>
          <Link href="https://twitter.com/Samudhrausa">
            <a target="_blank">
              <SocialIcon src={`/static/images/${twitter}.png`} />
            </a>
          </Link>
          <Link href="https://yelp.to/qTKq/NApINzA3bZ">
            <a target="_blank">
              <SocialIcon src={`/static/images/${yelp}.png`} />
            </a>
          </Link>
          <Link href="https://www.youtube.com/channel/UC9h9dAaRg-FRmSwVyyeG8rg?view_as=subscriber">
            <a target="_blank">
              <SocialIcon src={`/static/images/${youtube}.png`} />
            </a>
          </Link>
          {/* <SocialIcon src={`/static/images/${fb}.png`} />
          <SocialIcon src={`/static/images/${instagram}.png`} />
          {/* <SocialIcon src={`/static/images/${snapchat}.png`} /> */}
          {/* <SocialIcon src={`/static/images/${twitter}.png`} /> */}
        </SocialContainer>
      </IconsContainer>
      <img
        src={`/static/images/${props.logo}.png`}
        height={70}
        style={{ margin: 16 }}
        alt={"Logo"}
      />

      <ContactDetails>
        <Text
          style={{
            textAlign: "center",
            color: props.textColor,
            margin: 0
          }}
        >
          3391 State Route 27
          <br />
          Franklin Park, NJ 08823
        </Text>
        {/* <Text
          style={{
            textAlign: "center",
            color: props.textColor,
            margin: 0
          }}
        >
          Ph: +1 732 369 9960
        </Text> */}
        <Text
          style={{
            textAlign: "center",
            color: props.textColor,
            margin: 0
          }}
        >
          Toll-Free: +1 855 SAMUDHR
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: props.textColor,
            margin: 0
          }}
        >
          Phone: +1 (732) 369-9942
        </Text>
      </ContactDetails>

      {/* <h1>&#9650;</h1> */}

      {/* <Text style={{ color: props.textColor, margin: 0 }}>Back to Top</Text> */}
    </AddressContainer>
  );
};

AddressBlock.defaultProps = {
  textColor: "#fff",
  width: "30%",
  logo: "samudhra_white",
  icons: 1
};

export default AddressBlock;
