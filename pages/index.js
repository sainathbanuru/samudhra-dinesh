import ReactDOM from "react-dom";
import Popup from "reactjs-popup";
import DHeader from "../components/desktop/header";
import Footer from "../components/desktop/footer";
import HomeIntro from "../components/desktop/home-intro";
import AboutProgram from "../components/desktop/about-program";
import About from "../components/desktop/about-samudhra";
import Desktop from "../components/common/desktop";
import Mobile from "../components/common/mobile";
import MHeader from "../components/mobile/header";
import aboutData from "../data/about";
import FarmToTable from "../components/desktop/farmToTable";
import { ParallaxProvider } from "react-scroll-parallax";
import Reviews from "../components/desktop/reviews";
import PlainParallax from "../components/desktop/plainParallax";
import Contact from "../components/desktop/contact";
import AboutMobile from "../components/mobile/about-pro-mobile";
import FarmToTableMobile from "../components/mobile/farmToTable";
import Testi from "../components/desktop/testimonial";
import Happenings from "../components/desktop/happenings";
import Heading from "../components/common/heading";
import PopupModal from "../components/common/popupmodal";
import HomeIntroMobile from "../components/mobile/homeIntroMobile";
import { Helmet } from "react-helmet";
import PlainParallaxMobile from "../components/mobile/plainParallaxMobile";
import styled from "styled-components";

const PopupComponent = () => {
  return (
    <Popup
      modal
      open
      contentStyle={{
        background: "transparent",
        width: "auto",
        padding: 0,
        borderWidth: 0
      }}
      overlayStyle={{
        backgroundColor: "rgba(0,0,0,0.8)"
      }}
    >
      {close => (
        <div className="modal">
          <div className="content">
            <img
              src={"/static/images/popup.jpg"}
              style={{ width: 450, height: "auto" }}
            />
          </div>
        </div>
      )}
    </Popup>
  );
};

const GridContainer = styled.div`
  height: 80vh;
  /* width: 1000px; */
  max-height: 720px;
  display: grid;
  grid-template-columns: 1fr 20px 1fr 1fr 1fr;
  grid-template-rows: 1fr 20px 1fr 1fr 1fr;
  grid-gap: 20px;
  justify-items: center;
  margin: 20px;
`;

const GridItem = styled.div`
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  font-size: 30px;
  text-align: center;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Home extends React.Component {
  state = {
    showHeader: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    // Add the logic here
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      this.setState({ showHeader: true });
    } else {
      this.setState({ showHeader: false });
    }
  };

  render() {
    const iframe = `<script type="text/javascript" src='//www.opentable.com/widget/reservation/loader?rid=1049302

    &domain=com&type=standard&theme=standard&lang=en&overlay=false&iframe=true'></script>`;

    // const x = (
    //   <>
    //     <DHeader
    //       ref={ele => (this.stickyHeader = ele)}
    //       showHeader={this.state.showHeader}
    //     />
    //     <HomeIntro />

    //     <FarmToTable />
    //     <PlainParallax
    //       image={"/static/images/footer2.jpg"}
    //       strength={0}
    //       height={700}
    //     />
    //     <About />
    //     <PlainParallax
    //       image={"/static/images/footer3.jpg"}
    //       strength={0}
    //       height={700}
    //     />
    //     <Happenings showText={false} />
    //     {/* <Testi /> */}
    //     {/* <AboutProgram data={aboutData} /> */}
    //     <Reviews />
    //     <PlainParallax
    //       image={"/static/images/reservationsHome.jpg"}
    //       height={700}
    //       strength={0}
    //     />
    //     <Contact />
    //     <Footer showImage={true} strength={0} />
    //     <PopupComponent />
    //   </>
    // );

    return (
      <>
        <Helmet>
          <title>
            Discovery of Samudhra - Premier Indian Restaurant & Lounge
          </title>
          <meta
            name={"description"}
            content={`Samudhra means ocean of flavors named after the emotive flavours of Indian cuisine as we proudly bring Indian food culture and its authentic taste to New Jersey`}
          />
        </Helmet>
        <ParallaxProvider>
          <Desktop>
            <DHeader
              ref={ele => (this.stickyHeader = ele)}
              showHeader={this.state.showHeader}
            />
            <HomeIntro />

            <FarmToTable />
            <PlainParallax
              image={"/static/images/footer2.jpg"}
              strength={0}
              height={700}
            />
            <About />
            <PlainParallax
              image={"/static/images/footer3.jpg"}
              strength={0}
              height={700}
            />
            <Happenings showText={false} />
            {/* <Testi /> */}
            {/* <AboutProgram data={aboutData} /> */}
            <Reviews />
            <PlainParallax
              image={"/static/images/reservationsHome.jpg"}
              height={700}
              strength={0}
            />
            <Contact />
            <Footer showImage={true} strength={0} />
          </Desktop>
        </ParallaxProvider>
        <ParallaxProvider>
          <Mobile>
            <MHeader />

            <HomeIntroMobile />
            <FarmToTable removeSpace={true} />
            <PlainParallaxMobile image={"/static/images/footer2Mobile.jpg"} />
            <About removeSpace={true} />
            <PlainParallaxMobile image={"/static/images/footer3Mobile.jpg"} />
            <Happenings showText={false} removeMargin={true} />
            {/* <Testi /> */}
            {/* <AboutMobile /> */}
            <Reviews removeSpace={true} />
            <PlainParallaxMobile
              image={"/static/images/reservationsHomeMobile.jpg"}
            />
            <div style={{ backgroundColor: "#fff", margin: 0 }}>
              <Heading style={{ textAlign: "center", margin: 0, padding: 0 }}>
                {" "}
                Reservations
              </Heading>
              <div
                dangerouslySetInnerHTML={{ __html: iframe }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#fff"
                }}
              />
            </div>
            <Footer strength={0} />
            {/* <PopupComponent /> */}
          </Mobile>
        </ParallaxProvider>
      </>
    );
  }
}

export default Home;
