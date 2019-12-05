import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";

const Point = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    margin: 40px 0;
  }

  @media (max-width: 767px) {
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

const PointImage = styled.img`
  @media (min-width: 768px) {
    flex: 1;
    width: 100%;
  }

  @media (max-width: 767px) {
    flex: 1;
    width: 100%;
  }
`;

const PointDetail = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    > div {
      margin: ${props => (props.right ? "0 0 0 80px" : "0 80px 0 0")};
    }
  }
`;

const PointTitle = styled.h3`
  font-family: Objectivity-Bold;
  font-size: 24px;
  color: #132c48;
  text-align: left;
  margin-bottom: 0;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const PointDesc = styled.p`
  font-family: Objectivity-Regular;
  font-size: 16px;
  color: #132c48;
  letter-spacing: 0;
  text-align: left;
  line-height: 32px;
  margin-top: 8px;
  margin-bottom: 16px;

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

const ComingSoon = styled.div`
  background: rgba(32, 192, 142, 0.1);
  border: 1px solid #20c08e;
  border-radius: 6px;
  width: 130px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const ComingSoonText = styled.p`
  font-family: Objectivity-Regular;
  font-size: 14px;
  color: #20c08e;
  letter-spacing: 0.88px;
`;

const ImageWrapper = styled.div`
  width: 48%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Button = styled.div`
  border: 2px solid #00c48a;
  border-radius: 6px;
  width: 200px;
  height: 60px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: ${({ hideButtons }) => (hideButtons ? "none" : "flex")};
  @media (max-width: 767px) {
    width: 100%;
    height: 50px;
  }
`;

const Buttontext = styled.div`
  font-family: Objectivity-Bold;
  font-size: 16px;
  color: #00c48a;
`;

class AboutPoint extends Component {
  renderImage = about => {
    return (
      <ImageWrapper>
        <PointImage
          right
          src={about.imageUrl || "/static/images/about-our-program.png"}
        />
      </ImageWrapper>
    );
  };

  renderDetail = (about, index) => {
    return (
      <PointDetail right={index % 2 === 0}>
        <div>
          {about.isComingSoon ? (
            <ComingSoon>
              <ComingSoonText>Coming Soon</ComingSoonText>
            </ComingSoon>
          ) : null}
          <PointTitle>{about.title}</PointTitle>
          <PointDesc>{about.desc}</PointDesc>
          <Link href={about.path}>
            <Button {...this.props}>
              <Buttontext>{about.buttonText}</Buttontext>
            </Button>
          </Link>
        </div>
      </PointDetail>
    );
  };

  renderItem = items => {
    return items.map((item, index) => {
      if (index % 2 == 0 || this.props.mobile) {
        return (
          <Point key={index}>
            {this.renderImage(item)}
            {this.renderDetail(item, index)}
          </Point>
        );
      } else {
        return (
          <Point key={index}>
            {this.renderDetail(item, index)}
            {this.renderImage(item)}
          </Point>
        );
      }
    });
  };

  render() {
    const { items } = this.props;
    return <div>{this.renderItem(items)}</div>;
  }
}

export default AboutPoint;
