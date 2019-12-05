import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Carousel, { Modal, ModalGateway } from "react-images";
import Slider from "react-slick";

import DHeader from "../components/desktop/header";
import Footer from "../components/desktop/footer";
import Desktop from "../components/common/desktop";
import Mobile from "../components/common/mobile";
import MHeader from "../components/mobile/header";
import { ParallaxProvider } from "react-scroll-parallax";
import PlainParallax from "../components/desktop/plainParallax";
import PlainParallaxMobile from "../components/mobile/plainParallaxMobile";
import Heading from "../components/common/heading";
import { firestore } from "../components/firebase";
import Text from "../components/common/Text";

import { Helmet } from "react-helmet";

const Wrapper = styled.p`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #db841d;
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

// function useWindowWidth() {
//   const [width, setWidth] = useState(window.innerWidth);
//   const [numberofImagesToShow, setNumberofImages] = useState(3);

//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//       if (window.innerWidth > 1220) {
//         setNumberofImages(4);
//       } else if (window.innerWidth > 950) {
//         setNumberofImages(3);
//       } else if (window.innerWidth > 768) {
//         setNumberofImages(2);
//       } else {
//         setNumberofImages(1);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   });

//   return [width, numberofImagesToShow];
// }

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

const photos = [
  "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
  "https://source.unsplash.com/Dm-qxdynoEc/800x799",
  "https://source.unsplash.com/qDkso9nvCg0/600x799",
  "https://source.unsplash.com/iecJiKe_RNg/600x799",
  "https://source.unsplash.com/epcsn8Ed8kY/600x799",
  "https://source.unsplash.com/NQSWvyVRIJk/800x599",
  "https://source.unsplash.com/zh7GEuORbUw/600x799",
  "https://source.unsplash.com/PpOHJezOalU/800x599",
  "https://source.unsplash.com/I1ASdgphUH4/800x599"
];

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

const GalleryComponent = props => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  //   const [width, numberofImagesToShow] = useWindowWidth();
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <Wrapper>
      <Heading>Gallery</Heading>

      <div className="container">
        <Slider {...settings}>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
};

class Gallery extends React.Component {
  state = {
    numberofImagesToShow: 4,
    currentImage: 0,
    viewerIsOpen: false,
    gallery: []
  };

  unsubscribeFromFirestore = null;

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.unsubscribeFromFirestore = firestore
      .collection("gallery")
      .onSnapshot(snapshot => {
        const gallery = snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() };
        });
        this.setState({ gallery });
      });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    this.unsubscribeFromFirestore();
  }

  setNumberofImages = numberofImagesToShow => {
    this.setState({
      numberofImagesToShow
    });
  };

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      viewerIsOpen: false
    });
  };

  handleResize = () => {
    if (window.innerWidth > 1220) {
      this.setNumberofImages(4);
    } else if (window.innerWidth > 950) {
      this.setNumberofImages(3);
    } else if (window.innerWidth > 768) {
      this.setNumberofImages(2);
    } else {
      this.setNumberofImages(1);
    }
  };

  returnSliderComponent = (title, images, galleryIndex) => {
    const { viewerIsOpen, currentImage, numberofImagesToShow } = this.state;
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: numberofImagesToShow,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div key={title}>
        <Heading style={{ textAlign: "center", marginBottom: 0 }}>
          {title}
        </Heading>
        <div className="container">
          <Slider {...settings}>
            {images.map((image, index) => {
              if (!image) {
                return null;
              }
              return (
                <div
                  onClick={() => {
                    this.setState({
                      currentImage: index,
                      viewerIsOpen: true,
                      galleryIndex: galleryIndex
                    });
                  }}
                  key={title + index}
                >
                  <img
                    style={{
                      width: 275,
                      height: 200,
                      objectFit: "cover",
                      borderRadius: 8
                    }}
                    src={image}
                    alt={"Slider Image"}
                  />
                </div>
              );
            })}
            <div />
          </Slider>
        </div>
      </div>
    );
  };

  render() {
    const {
      currentImage,
      viewerIsOpen,
      numberofImagesToShow,
      galleryIndex,
      gallery
    } = this.state;
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: numberofImagesToShow,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <>
        <Helmet>
          <title>Gallery | Samudhra Indian Premier Lounge</title>
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
              image={"/static/images/galleryBanner.jpg"}
              height={600}
              strength={0}
            />

            <Heading
              style={{
                textAlign: "center",
                color: "#fff",
                backgroundColor: "#DB841D",
                margin: 0,
                padding: "32px 0"
              }}
            >
              Gallery
            </Heading>

            {this.state.gallery.map((galleryItem, galleryIndex) => (
              <div
                key={galleryItem.title}
                style={{ backgroundColor: "#DB841D" }}
              >
                <Heading
                  style={{ textAlign: "center", margin: 0, color: "#fff" }}
                >
                  {galleryItem.title}
                </Heading>
                <div
                  className="container"
                  style={{ backgroundColor: "#DB841D" }}
                >
                  <Slider {...settings}>
                    {galleryItem.images.map((galleryImage, index) => (
                      <div
                        onClick={() => {
                          this.setState({
                            currentImage: index,
                            viewerIsOpen: true,
                            galleryIndex: galleryIndex
                          });
                        }}
                        key={galleryImage}
                      >
                        <img
                          src={galleryImage}
                          style={{
                            width: 275,
                            height: 200,
                            objectFit: "fill",
                            borderRadius: 8
                          }}
                          alt={"Gallery Image"}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            ))}

            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={this.closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={gallery[galleryIndex].images.map(image => ({
                      src: image
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
            <Footer imageUrl={"/static/images/footer2.jpg"} />
          </Desktop>
        </ParallaxProvider>
        <ParallaxProvider>
          <Mobile>
            <MHeader />
            {/* <PlainParallax
              image={"/static/images/galleryBannerMobile.jpg"}
              height={"auto"}
              strength={0}
            /> */}
            <PlainParallaxMobile
              image={"/static/images/galleryBannerMobile.jpg"}
            />
            {/* <GalleryComponent /> */}
            {/* <MenusComponent /> */}

            <Heading
              style={{
                textAlign: "center",
                color: "#fff",
                backgroundColor: "#DB841D",
                margin: 0,
                padding: 0
              }}
            >
              Gallery
            </Heading>

            {this.state.gallery.map((galleryItem, galleryIndex) => (
              <div
                key={galleryItem.title}
                style={{ backgroundColor: "#DB841D" }}
              >
                <Heading
                  style={{ textAlign: "center", margin: 0, color: "#fff" }}
                >
                  {galleryItem.title}
                </Heading>
                <div
                  className="container"
                  style={{ backgroundColor: "#DB841D" }}
                >
                  <Slider {...settings}>
                    {galleryItem.images.map((galleryImage, index) => (
                      <div
                        onClick={() => {
                          this.setState({
                            currentImage: index,
                            viewerIsOpen: true,
                            galleryIndex: galleryIndex
                          });
                        }}
                        key={galleryImage}
                      >
                        <img
                          src={galleryImage}
                          style={{
                            width: 275,
                            height: 200,
                            objectFit: "fill",
                            borderRadius: 8
                          }}
                          alt={"Gallery Image"}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            ))}

            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={this.closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={gallery[galleryIndex].images.map(image => ({
                      src: image
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>

            <Footer imageUrl={"/static/images/footer2.jpg"} />
          </Mobile>
        </ParallaxProvider>
      </>
    );
  }
}

export default Gallery;
