import React, { Component } from "react";
import styled from "styled-components";
import aboutData from "../../data/about";
import AboutPoint from "../../common/about-point";

import { ParallaxBanner } from "react-scroll-parallax";
import about from "../../data/about";

const PageWrapper = styled.div`
  background-color: #fff;
  padding: 16px 0;
`;

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
// `;

// const Heading = styled.h1`
//   font-family: PlayfairDisplay-Bold;
//   font-size: 24px;
//   color: #132c48;
//   letter-spacing: 1px;
//   margin-top: 150px;
//   margin-bottom: 20px;
//   text-align: center;
// `;

// const Quote = styled.h2`
//   font-family: Objectivity-Bold;
//   font-size: 32px;
//   color: #132c48;
//   line-height: 50px;
//   margin-top: 0px;
//   text-align: center;
// `;

// const Button = styled.div`
//   display: flex;
//   border: 2px solid #00c48a;
//   border-radius: 6px;
//   width: 200px;
//   height: 60px;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
// `;

// const Buttontext = styled.div`
//   font-family: Objectivity-Bold;
//   font-size: 16px;
//   color: #00c48a;
// `;

// const Image = styled.img`
//   opacity: 1;
//   display: block;
//   width: 100%;
//   height: auto;
//   transition: 0.5s ease;
//   backface-visibility: hidden;
// `;

// const Middle = styled.div`
//   transition: 0.5s ease;
//   opacity: ;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   -ms-transform: translate(-50%, -50%);
//   text-align: center;
// `;

const ContainerComponent = styled.div`
  display: grid;
  @media (max-width: 767px) {
    margin-bottom: 16px;
  }

  @media (min-width: 768px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const data = [
  {
    imageUrl:
      "https://image.shutterstock.com/z/stock-photo-indian-platter-thali-indian-food-set-1262587624.jpg",
    heading: "THALI BRUNCH",
    description: " "
  },
  {
    imageUrl:
      "https://image.shutterstock.com/z/stock-photo-cheerful-girls-living-it-up-on-the-dance-floor-107906309.jpg",
    heading: "DIVA NIGHT ",
    description: " "
  },
  {
    imageUrl:
      "https://image.shutterstock.com/z/stock-photo-cocktail-glass-on-the-wood-table-654644041.jpg",
    heading: "THALI BRUNCH",
    description: " "
  },
  {
    imageUrl:
      "https://image.shutterstock.com/z/stock-photo-dj-console-at-the-nightclub-nightlife-1082108243.jpg",
    heading: "SATURDAY NIGHT",
    description: " "
  }
];

class Testi extends Component {
  render() {
    return (
      <PageWrapper>
        <ContainerComponent>
          {data.map((image, index) => {
            return (
              <div className="imageContainer" key={image.heading}>
                <img
                  src={image.imageUrl}
                  alt="Avatar"
                  className={"image"}
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="middle">
                  <h2 style={{ textAlign: "center", color: "#fff" }}>
                    {image.heading}
                  </h2>
                  <p>{image.description}</p>
                </div>
              </div>
            );
          })}
        </ContainerComponent>
      </PageWrapper>
    );
  }
}

export default Testi;
