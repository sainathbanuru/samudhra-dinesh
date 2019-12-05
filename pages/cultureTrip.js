import React, { PureComponent } from "react";
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
import { Helmet } from "react-helmet";
import { firestore } from "../components/firebase";

const Wrapper = styled.p`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

const Container = styled.div`
  font-family: Sans-Narrow-Regular;
  @media (max-width: 767px) {
    padding: 16px;
  }

  @media (min-width: 768px) {
    margin: 64px auto;
    width: 60%;
  }
`;

const Text = styled.p`
  font-family: Quicksand-Regular;
  line-height: 1.5;
  text-align: justify;
`;

const BoldText = styled.p`
  font-family: Quicksand-Bold;
  text-decoration: underline;
  text-align: center;
`;

const data = [
  {
    title: "Hyderabadi Biryani",
    description:
      "When we think of Indian food, we think of Biryani, that is how deep-rooted it is in Indian gastronomy. It was originally created in the royal kitchens of the Mughals introduced to Indians by Mughal Dynasty. Biryani is an enticing blend of rice, hidden gems of Indian spice and cuts of best meats, all prepared meticulously in a sealed pot to bask in the aroma and flavors to their fullest."
  },
  {
    title: "Masala Dosa",
    description:
      "Masala Dosa or the ‘Indian pancake’, is a savory breakfast staple in south India. Although it originated in the southern region of India the dish is now popular across the country. A paper thin crepe made up of a fermented batter of rice, lentils and black gram which is not just delicious and appetizing but also a nutritious meal for any time of the day served with piping hot sambar, chutney and a variety of vegetable fillings."
  },
  {
    title: "Chole Bhatoore",
    description:
      "No food trip is complete without relishing “Chole Bhatoore”. A versatile dish made of chickpeas served along with fluffy, rounded wheat bread that can be a complete meal ideal for all-day lunch or can be a satiating evening snack."
  },
  {
    title: "Thali",
    description:
      "A celebration in itself, Thali is a lavish yet wholesome meal served in a round platter and katoris (bowls) with a variety of dishes that looks like a color palette on the table. It includes a variety of curries both veg/non-veg, curd, rice &amp; roti and a sweet treat at the end of the meal. An Indian way of having meal that is balanced, delicious and enjoyable with the idea that mealtime is a feast time!"
  },
  {
    title: "Lal Maas",
    description:
      "While there is a range of lip-smacking vegetarian dishes in Indian cuisine, there is Lal Maas for the meat lovers. It is a traditional Rajasthani mutton curry made up of yogurt, Indian spices and Mathania chili that is distinct to the region. A lovely companion to Beer."
  },
  {
    title: "Haleem",
    description:
      "Haleem imparts the royal vibe to the dining table. It is a signature dish created by the Shahi Khanasama (royal chefs) of Nizams of Hyderabad. An aromatic stew made up of Lamb/lentils and always include wheat or barley cooked over a slow flame in combination with mystifying Indian spices &amp; grains soaked overnight."
  },
  {
    title: "Dal tadka",
    description:
      "Dal is representative of an Indian meal. A staple dish every Indian grew up relishing the taste and nutritional value. Dal is a stew made from a variety of lentils or pulses with a hint of Tadka, tempering with garlic, dried red chilies, cumin &amp; mustard seeds."
  },
  {
    title: "Samosa",
    description:
      "A crispy fried or baked triangular shaped savory made up of white flour filled with mashed potatoes or other varieties mixed with spices. They are best relished during soul- quenching Indian monsoons and chilly winter evenings. A samosa a day keeps hunger pangs away!"
  },
  {
    title: "Chicken/Paneer 65",
    description:
      "Chicken 65, a very popular entree that gives a tantalizing start to the meal and that’s what starters are meant for to set the mood for food! A fried dish with a striking red color and spicy hot taste originally started in Chennai. The main ingredient for this dish varies such as chicken, cottage cheese (paneer) or selected veggies."
  },
  {
    title: "Indian Desserts",
    description:
      "Meals and festivals are incomplete unless ended with a taste of sweet. Malpua or sweet pancakes, a dessert from eastern India – Odisha is made up of flour and semolina served with chilled condensed milk or Rabri. A Mughlai festive pudding, Sheer Khurma is a subtle combination of milk, vermicelli drizzled with pistachios and cashews. Double ka meetha from Hyderabad is a simple yet luxurious preparation of bread slices soaked in hot milk, saffron, and aromatic cardamom."
  }
];

const DataComponent = ({ data, removeMargin }) => {
  const removeMarginFlag = removeMargin ? { margin: 0 } : {};
  return (
    <>
      <Heading style={{ textAlign: "center", ...removeMarginFlag }}>
        Culture Trip
      </Heading>
      <Container dangerouslySetInnerHTML={{ __html: data }} />
    </>
  );
};

class cultureTrip extends PureComponent {
  state = {
    content: ""
  };

  componentDidMount() {
    firestore
      .collection("cultureTrip")
      .doc("cultureTrip")
      .get()
      .then(trip => {
        this.setState({
          content: trip.data().content
        });
      });
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Culture Trip | Samudhra Indian Premier Lounge</title>
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
              image={"/static/images/cultureBanner.jpg"}
              height={700}
              strength={0}
            />
            <DataComponent data={this.state.content} />
            {/* <MenusComponent /> */}
            <Footer />
          </Desktop>
        </ParallaxProvider>
        <ParallaxProvider>
          <Mobile>
            <MHeader />
            {/* <PlainParallax
              image={"/static/images/cultureBannerMobile.jpg"}
              height={450}
              strength={0}
            />{" "} */}
            <PlainParallaxMobile
              image={"/static/images/cultureBannerMobile.jpg"}
            />
            <DataComponent data={this.state.content} removeMargin={true} />
            {/* <MenusComponent /> */}
            <Footer />
          </Mobile>
        </ParallaxProvider>
      </>
    );
  }
}

export default cultureTrip;
