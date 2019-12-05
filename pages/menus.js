import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import DHeader from "../components/desktop/header";
import Footer from "../components/desktop/footer";
import Desktop from "../components/common/desktop";
import Mobile from "../components/common/mobile";
import MHeader from "../components/mobile/header";
import { ParallaxProvider } from "react-scroll-parallax";
import PlainParallax from "../components/desktop/plainParallax";
import PlainParallaxMobile from "../components/mobile/plainParallaxMobile";
import Heading from "../components/common/heading";
import Text from "../components/common/Text";
import MenuComponent from "../components/desktop/menuComponent";
import { Parallax, Background } from "react-parallax";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  display: grid;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const H3heading = styled.h3`
  font-family: Sans-Narrow-Bold;
  text-align: center;
`;

const data = [
  {
    heading: "",
    name: "Soups",
    content: "",
    items: [
      {
        title: "Kokum Rasam",
        description:
          "A tongue tickling version of south indian rasam made from Goan Konkan fruit with Indian Tempering in Clarified Butter. A comfort soup that also goes well with rice.",
        tags: [],
        price: "$8.00"
      },
      {
        title: "Gummadikaya Rasam",
        description:
          "Pumpkin is called as Gummadikaya in Southern Indian. A simple sweet, sour stew made of Gummadikaya. A comfort food that goes well with rice.",
        tags: [],
        price: "$9.00"
      },
      {
        title: "Kozhi Charu",
        description:
          " A flavourful chicken broth cooked with the goodness of spices from Southern India.",
        tags: [],
        price: "$10.00"
      },
      {
        title: "Gosht Shorba",
        description:
          " A delightful stew of lamb bones cooked over slow flame with a few simple spices and herbs from Southern India.",
        tags: [],
        price: "$12.00"
      }
    ]
  },
  {
    heading: "",
    name: "Veg. Appetizers",
    content: "",
    items: [
      {
        title: "Aloo Tikki",
        description:
          "Shallow fried patty with crispy outer layer and soft &amp; spicy filling of mashed potatoes and Peas",
        tags: [],
        price: "$11.00"
      },
      {
        title: "Chatpatta Gobi",
        description:
          "Tangy Cauliflower cooked in assorted spices. Chatpatta means piquant and a bit spicy",
        tags: [],
        price: "$11.00"
      },
      {
        title: "Dahi Ke Sholay",
        description:
          "A delightful entree made of hung curd and our chef’s special spices rolled in bread slices and deep fried.",
        tags: [],
        price: "$12.00"
      },
      {
        title: "Chotte Samosa’s",
        description:
          "A stuffed savory pastry with spiced onions served with fresh pudina (mint) chutney",
        tags: [],
        price: "$11.00"
      },
      {
        title: "Mirchi Bajji",
        description:
          "A naughty fritter or bajji made of green chillies stuffed with the tangy tamarind and nutty twist of peanuts and onions dipped in gram flour and fried",
        tags: [],
        price: "$12.00"
      },
      {
        title: "Paneer 65",
        description:
          "A combination of mild milky flavor and strong spicy flavor made with chef’s special spices and indian cottage Cheese (Paneer)",
        tags: [],
        price: "$12.00"
      },
      {
        title: "Pakoda Platter",
        description:
          "Crispy fried Fritters stuffed with a mix of veggies onion, Cabbage, Sweet Corn, dill leaves and eggplant dipped in a chickpea batter served with dollop of        cold yoghurt chutney.",
        tags: [],
        price: "$14.00"
      },
      {
        title: "Palak Chaat",
        description:
          "Fritters of fresh spinach served with a topping of yogurt, chutney, fresh coriander and a generous drizzle of chaat masala.",
        tags: [],
        price: "$11.00 "
      },
      {
        title: "Mysore Bonda",
        description:
          "crispy from outside and soft from inside these fritters are made from fermented yogurt based subtly spiced batter.",
        tags: [],
        price: "$12.00"
      }
    ]
  },
  {
    heading: "",
    name: "Non-Veg. Appetizers",
    content: "",
    items: [
      {
        title: "Aanda Chat",
        description:
          "Boiled and fried eggs topped with chopped onions, tomatoes, corriander and sprinkled with SEV-tasty noodles made from Chickpea flour paste.",
        tags: [],
        price: "$12.00"
      },
      {
        title: "Kodi 65",
        description:
          " Irresistably succulent pieces of chicken in red-hot indian sauce.",
        tags: [],
        price: "$13.00"
      },
      {
        title: "Kodi Roast",
        description:
          "Tempting dry roasted chicken marinated in chef’s special spices and cooked with curry leaves and cashews",
        tags: [],
        price: "$14.00"
      },
      {
        title: "Murgh Kalimirch",
        description:
          " Aromatic boneless chicken dry rubbed with freshly ground black pepper or Kali mirchi and cooked in combination other spices.",
        tags: [],
        price: "$14.00"
      },
      {
        title: "Gosht Sukka",
        description:
          "$Deliciously spicy slices of boneless meat with a thick coating of spices are made by slow cooking small pieces of goat with broth and onions until almost dry.",
        tags: [],
        price: "16.00"
      },
      {
        title: "Kheema Patties",
        description:
          "A mouth melting delicacy made of minced meat spiced with assorted spices and herbs lightly cooked on medium flame until all the water dries up.",
        tags: [],
        price: "$16.00"
      },
      {
        title: "Khandari Machli",
        description:
          "Full- flavoured shallow fried fried fish fillets marinated in carom herb (Ajwain), finely coated with a batter made of gram flour, egg and lemon juice.",
        tags: [],
        price: "$18.00"
      },
      {
        title: "Jhinga Masala",
        description:
          "A delicate blend of shrimp, spices and curry leaves. A tempting shrimp (Jhinga) preparation with a nice balance between tangy and spicy.",
        tags: [],
        price: "$22.00 "
      }
    ]
  },
  {
    heading: "",
    name: "Tandoor",
    content: "",
    items: [
      {
        title: "Aloo Gobi Malai Kebab",
        description:
          " Potato and cauliflower cream kebab is a mélange of veggies, milky flavor of malai and tongue-tickling taste of chaat masala along with assorted spices. Carefully cooked in a tandoor on skewers.",
        tags: [],
        price: "$14.00"
      },
      {
        title: "Paneer Tikka Kebab",
        description:
          "Succulent cottage cheese cubes marinated in our chef&#39;s special spices and cooked in a tandoor. A subtle blend of spicy, bitter and sour flavours",
        tags: [],
        price: "$15.00"
      },
      {
        title: "Murgh Tikka Seel Kand",
        description:
          "Grilled boneless chicken breast pieces marinated in exclusive tandoori spices stuffed with onion, pepper, garlic and pudina (Mint).Served with mashed potatoes, coriander and fresh pudina chutney and roasted sun-dried Tomatoes.",
        tags: [],
        price: "$18.00"
      },
      {
        title: "Murgh – e – Kalmi",
        description:
          " Mildly spiced, juicy chicken drumsticks marinated in yogurt, fragrant spices and gram flour.",
        tags: [],
        price: "$18.00"
      },
      {
        title: "Murgh Malai Tikka",
        description:
          "Juicy grilled chicken pieces marinated in fresh cream, garlic, lemon, chillies and chillies, garlic, lemon, savoury spices. A subtle blend of spicy, bitter and sour flavours.",
        tags: [],
        price: "$16.00"
      },
      {
        title: "Murgh Aatish Burra",
        description:
          "Flavour infused chicken pieces marinated twice in aromatic mixture of spices and grilled in Tandoor. Serve along with tangy coriander chutney.",
        tags: [],
        price: "$18.00"
      },
      {
        title: "Pathar Ka Gosth",
        description:
          "The royal Pathar ka gosht are tender pieces of goat marinated in rich spices and cooked on a wide stone on the flame.",
        tags: [],
        price: "$24.00"
      },
      {
        title: "Lamb Chops",
        description:
          "Grilled succulent Lamb Chops are infused in a marinade made of Greek yogurt, indian spices, lemon and cooked in a tandoor.",
        tags: [],
        price: "$29.00"
      },
      {
        title: "Tandoori Machi",
        description:
          "Luscious tikka-sized fish is dry-rubbed with seasoning of indian spices and cooked cooked in tandoor.",
        tags: [],
        price: "$26.00"
      }
    ]
  },
  {
    heading: "",
    name: "Veg. Entrees",
    content: "",
    items: [
      {
        title: "Bagara Baingan",
        description:
          "True to its name bagara means indian tempering with spices. Young eggplants are shallow fried and then added to the simmering tangy gravy of special indian masala (seasoning) made up of roasted sesame, poppy seeds and peanuts ground into a paste.",
        tags: [],
        price: "$20.00"
      },
      {
        title: "Dal Makhani",
        description:
          "A Finger licking Dal – Lentils, Makhani – Butter, literally translates to lentils cooked with butter in combination with Indian spices.",
        tags: [],
        price: "$14.00"
      },
      {
        title: "Mughlai Paneer",
        description:
          "Full bodied paneer pieces simmered in creamy and aromatic white gravy.",
        tags: [],
        price: "$18.00"
      },
      {
        title: "Malai Kofta",
        description:
          "Delicious melt in the mouth cottage cheese kofta in a rich , creamy and lightly sweetened onion- tomato based gravy.Masala",
        tags: [],
        price: "$16.00"
      },
      {
        title: "Masala Methi Paneer",
        description:
          "Creamy gravy of soft cottage cheese (Paneer) cubes cooked in exotic fenugreek herb, cashew nuts, garlic and onions.",
        tags: [],
        price: "$18.00"
      },
      {
        title: "Subzi Chilli Milli",
        description:
          "Classic vegetable gravy made with cream, selected veggies and secret spices",
        tags: [],
        price: "$16.00"
      },
      {
        title: "Yellow Dal Tadka",
        description:
          "Traditional Lentil stew tempered with cumin seeds, mustard seeds, garlic, chillies and, curry leaves in clarified butter.",
        tags: [],
        price: "$14.00"
      },
      {
        title: "Dum Aloo",
        description:
          "Flavourfull baby potatoes cooked slowly at a low flame in a mildly spiced gravy.",
        tags: [],
        price: "$14.00 "
      }
    ]
  },
  {
    heading: "",
    name: "Non-Veg. Entrees",
    content: "",
    items: [
      {
        title: "Murgh Ka Bharta",
        description:
          "Chicken Bharta has elements of both grilled and gravy cooking. Chicken Tandoori pieces are grilled and are then cooked in rich gravy made of cream, cumin powder, butter and tomato Puree.",
        tags: [],
        price: "$22.00"
      },
      {
        title: "Dum Ka Murgh",
        description:
          "Dum ka murgh or slow-cooked chicken curry is made with whole chicken marinated with roasted spices and subtly seasoned rich cashew nuts gravy.",
        tags: [],
        price: "$23.00"
      },
      {
        title: "Gongura Kodi",
        description:
          " Boneless Chicken cooked in tender sorrel leaves for a tangy flavor with special spices made in our kitchen.",
        tags: [],
        price: "$24.00"
      },
      {
        title: "Murgh Musallam",
        description:
          " A special recipe made of whole chicken as the name suggests Murgh - Chicken Musallam- whole. It is marinated in chef’s special spices, stuffed with eggs, and simmered in gravy prepared with indian seasoning or masala of saffron, cinnamon, cloves, poppy seeds, cardamom and chilli.",
        tags: [],
        price: "$25.00"
      },
      {
        title: "Murgh Makhani",
        description:
          "Boneless chicken cooked after dry rubbing special spices and marinating in Yogurt.",
        tags: [],
        price: "$22.00"
      },
      {
        title: "Dalcha Gosht",
        description:
          " A lamb- lentil stew made with pulses cooked in bone broth along with mutton pieces and bottle gourd added at the end.",
        tags: [],
        price: "$26.00"
      },
      {
        title: "Laal Maas Gosht",
        description:
          "A boldly flavored lamb preparation where meat is cookedin a variety of spices with a burst of red chillies cooked in ghee.",
        tags: [],
        price: "$26.00 "
      },
      {
        title: "Gongura Mamsam",
        description:
          "Boneless Cubes of Goat/Lamb cooked in tender sorrel leaves along with special spices made in our kitchen.",
        tags: [],
        price: "$26.00"
      },
      {
        title: "Chapala Pulusu",
        description:
          " A telugu style fish curry cooked in a mouthwatering tangy gravy made of onions, tomatoes, tamarind and special indian seasoning.",
        tags: [],
        price: "$28.00"
      },
      {
        title: "Gonguru Royallu",
        description:
          " Shrimps cooked in tender sorrel leaves and special spices gravy.",
        tags: [],
        price: "$28.00"
      }
    ]
  },
  {
    heading: "",
    name: "Rice",
    content: "",
    items: [
      {
        title: "Hyderabadi Murgh Dum Biryani",
        description:
          "An authentic recipe from Hyderabad in which succulent chicken pieces are marinated in special yakhni spices, then carefully layered with partially cooked rice, caramelized onions and cooked in a sealed pot that locks the aroma.",
        tags: [],
        price: "$19.00 "
      },
      {
        title: "Hyderabadi Gosht Dum Biryani",
        description:
          " Hyderabadi goat biryani is made of a mix of bone in- bone less goat pieces marinated in special yakhni spices, then carefully layered with partially cooked rice, caramelized onions and cooked in a sealed pot that locks the aroma.",
        tags: [],
        price: "$21.00"
      },
      {
        title: "Natukodi Pulao",
        description:
          "A traditional telugu pulao made of country chicken rubbed in Oil, Turmeric, dry spices and layered with fluffy rice.",
        tags: [],
        price: "$22.00 "
      },
      {
        title: "Mixed Subzi Pulao",
        description:
          " A simple recipe with all the goodness of veggies locked in a traditional pulao.",
        tags: [],
        price: "$16.00"
      },
      {
        title: "Panasakaya Pulao",
        description:
          "A traditional pulao made of Jackfruit, indian spices and rice.",
        tags: [],
        price: "$18.00 "
      },
      {
        title: "Jeera Rice",
        description:
          " Aromatic basmati rice tempered with Cumin seeds tempered in ghee.",
        tags: [],
        price: "$9.00"
      },
      {
        title: "Curd Rice",
        description:
          " A quintessential comfort food made of cooked rice seasoned with salt, tempered with mustard seeds, cumin seeds, chillies and, curry leaves and mixed with plain curd.",
        tags: [],
        price: "$12.00"
      }
    ]
  },
  {
    heading: "",
    name: "Breads",
    content: "",
    items: [
      {
        title: "Butter Naan",
        description: " ",
        tags: [],
        price: "$6.00"
      },
      {
        title: "Garlic Naan",
        description: "",
        tags: [],
        price: "$7.00"
      },
      {
        title: "Rosemary Naan",
        description: "",
        tags: [],
        price: "$8.00"
      },
      {
        title: "Cheese Jalapeno Naan",
        description: "",
        tags: [],
        price: "$8.00"
      },
      {
        title: "Pizza Naan",
        description: " ",
        tags: [],
        price: "$12.00"
      },
      {
        title: "Lacha Paratha",
        description: "",
        tags: [],
        price: "$10.00"
      },
      {
        title: "Bread Basket",
        description: "",
        tags: [],
        price: "$14.00"
      },
      {
        title: "Chole Bhature",
        description:
          " An authentic Punjabi gravy made of special indian and white spiced chickpeas chana masala paired with fried, rounded wheat bread called  bhatura.",
        tags: [],
        price: "$15.00"
      },
      {
        title: "Dosa",
        description:
          " Crispy and fragile indian pancake made with finely layered rice batter made from a fermented batter of rice and lentils.",
        tags: [],
        price: "$14.00"
      },
      {
        title: "Idli",
        description:
          " Steamed Ambrosia rice cake made with the batter of fermented black lentils and rice. Sereved with coconut chutney and sambhar or lentil- veggie stew!",
        tags: [],
        price: "$12.00"
      },
      {
        title: "Button Idili",
        description:
          "Steamed mini rice cakes made with the batter of fermented black lentils and rice. Served with coconut chutney and sambhar or lentil- veggie stew!",
        tags: [],
        price: "$12.00 "
      },
      {
        title: "Pesarattu Upma",
        description:
          "A crepe made from green lentils and rice, soaked overnight and grounded to form a coarse batter. Served topped with chopped onions and chutney.",
        tags: [],
        price: "$14.00 "
      },
      {
        title: "Poori Bhaji",
        description:
          " A wholesome combination of two dishes medium spiced boiled potato curry called bhaji and deep fried flaku bread made of whole wheat flour called Poori",
        tags: [],
        price: "$15.00"
      }
    ]
  },
  {
    heading: "",
    name: "Samudhra Specialties",
    content: "",
    items: [
      {
        title: "Kodi Kurra Chitti Gaare",
        description: " Crispy mini vada served with delicious chicken curry.",
        tags: [],
        price: "$24.00"
      },
      {
        title: "Chinta Chiguru Mamsam",
        description:
          " Meat cooked with young tamarind leaves with a subtle tart flavor without overpowering the meat.",
        tags: [],
        price: "$26.00"
      },
      {
        title: "Ragi Sankati",
        description:
          "Ragi means finger millet and mudde means moist ball. Cooked millets are made into moist balls is highly nutritious.",
        tags: [],
        price: "$24.00 "
      }
    ]
  },
  {
    heading: "",
    name: "Weekday Lunch Specialties",
    content: "(Available Monday thru Friday between 11:30 am to 3:30 pm)",
    items: [
      {
        title: "Samudhra Vegetarian Thali",
        description: "",
        tags: [],
        price: "$19.00"
      },
      {
        title: "Samudhra Non-Vegetarian Thali",
        description: "",
        tags: [],
        price: "$23.00"
      },
      {
        title: "Samudhra Seafood Thali",
        description: " ",
        tags: [],
        price: "$25.00"
      }
    ]
  },
  {
    heading: "",
    name: "Weekend Brunch Specialties",
    content: "(Available Saturday &amp; Sunday between 11:30 am to 3:30 pm)",
    items: [
      {
        title: "Brunch with Happy Hours",
        description: "",
        tags: [],
        price: "$30.00"
      },
      {
        title: "Samudhra Non-Vegetarian Thali",
        description: "",
        tags: [],
        price: "$23.00"
      },
      {
        title: "Samudhra Seafood Thali",
        description: " ",
        tags: [],
        price: "$25.00"
      }
    ]
  },
  {
    heading: "",
    name: "Desserts",
    content: "",
    items: [
      {
        title: "Qubani Ka Meetha",
        description:
          " An authentic hyderabadi delicacy made with dried apricots and is a traditional dessert garnished with fresh cream.",
        tags: [],
        price: "$14.00"
      },
      {
        title: "Double Ka Meetha",
        description:
          "Dulcified dessert made using bread slices soaked in warm milk, fried in clarified butter and served with a dollop of fresh cream loaded with dry fruits for a delicious crunch.",
        tags: [],
        price: "$14.00"
      },
      {
        title: "Sheer Khurma",
        description:
          "A traditional Mughlai recipe of vermicelli pudding made with milk, lots of nuts, dates and sugar! ",
        tags: [],
        price: "$13.00"
      },
      {
        title: "Malpua Rabri",
        description:
          "Nectarous fluffy fried pancakes dipped in sugar syrup and served with rabdi or sweetened condensed milk.",
        tags: [],
        price: "$15.00"
      },
      {
        title: "Chocolate Brownie with Ice Cream",
        description:
          "Delicious chewy chocolate fudge brownie smothered in rich chocolate fudge with vanilla ice cream and whipped cream.",
        tags: [],
        price: "$15.00"
      },
      {
        title: "Tres Leches Cake with Fruits",
        description:
          "Luscious Tres Leches Cake with mixed fruits is wonderfully soaked with a mixture of sweetened condensed milk, evaporated milk, and heavy cream. Added to it a dash of whipped cream and fruit makes it undeniably delicious!",
        tags: [],
        price: "$15.00 "
      }
    ]
  },
  {
    heading: "",
    name: "Drinks",
    content: "",
    items: [
      {
        title: "Madras Filter Coffee",
        description: " ",
        tags: [],
        price: "$8.00"
      },
      {
        title: "Hyderabadi Chai",
        description: "",
        tags: [],
        price: "$8.00"
      },
      {
        title: "Mango Lassi",
        description: "",
        tags: [],
        price: "$8.00"
      },
      {
        title: "Masala Chaas",
        description: "",
        tags: [],
        price: "$19.00"
      },
      {
        title: "Jigarthandai",
        description: "",
        tags: [],
        price: "$9.00"
      },
      {
        title: "",
        description: "",
        tags: [],
        price: ""
      }
    ]
  }
];

const barData = [
  {
    heading: "",
    name: "Drinks",
    content: "",
    items: [
      {
        title: "Madras Filter Coffee",
        description: " ",
        tags: [],
        price: "$8.00"
      },
      {
        title: "Hyderabadi Chai",
        description: "",
        tags: [],
        price: "$8.00"
      },
      {
        title: "Mango Lassi",
        description: "",
        tags: [],
        price: "$8.00"
      },
      {
        title: "Masala Chaas",
        description: "",
        tags: [],
        price: "$19.00"
      },
      {
        title: "Jigarthandai",
        description: "",
        tags: [],
        price: "$9.00"
      },
      {
        title: "",
        description: "",
        tags: [],
        price: ""
      }
    ]
  }
];

const Type = styled.p`
  font-family: Sans-Narrow-Regular;
  margin: 32px 16px;
  border-bottom: ${props =>
    props.selected ? "1px solid #000" : "0px solid #fff"};
  font-size: 16px;
  cursor: pointer;
`;

const MenusComponent = () => {
  return (
    <Wrapper>
      {data.map((item, index) => (
        <div key={item.name} style={{ width: "100%" }}>
          <h3 style={{ fontFamily: "Sans-Narrow-Bold", margin: 0 }}>
            {item.heading}
          </h3>
          <Parallax
            blur={0}
            bgImage={"/static/images/wave250Op.png"}
            bgImageAlt="the cat"
            strength={600}
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundSize: "contain",
              flexDirection: "row",
              width: "100%"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: 32
              }}
            >
              <h3 style={{ fontFamily: "Sans-Narrow-Bold", marginTop: 0 }}>
                {item.name}
              </h3>
              {item.content.length > 0 && (
                <Text
                  style={{ color: "#aaa", marginTop: 0, textAlign: "center" }}
                >
                  {item.content}
                </Text>
              )}
              <div
                style={{
                  width: "10%",
                  height: 1,
                  backgroundColor: "#000",
                  marginBottom: 16
                }}
              />

              <Container>
                {item.items.map(item => {
                  return (
                    <div
                      key={item.title}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "16px 0"
                      }}
                    >
                      <H3heading style={{ textAlign: "center", margin: 0 }}>
                        {item.title}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span
                          style={{
                            fontSize: 14,
                            fontFamily: "Sans-Narrow-Regular"
                          }}
                        >
                          {item.price}
                        </span>
                      </H3heading>
                      <Text style={{ textAlign: "center", fontSize: 14 }}>
                        {item.description}
                      </Text>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center"
                        }}
                      >
                        {item.tags.map(tag => (
                          <p
                            style={{
                              color: "#fff",
                              backgroundColor: "#000",
                              margin: "0 8px",
                              padding: 4
                            }}
                            key={tag}
                          >
                            {tag}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </Container>
            </div>
          </Parallax>
        </div>
      ))}
    </Wrapper>
  );
};

const BarComponent = () => {
  return (
    <Wrapper className="wrapper">
      {barData.map((item, index) => (
        <div key={item.name}>
          <h3 style={{ fontFamily: "Sans-Narrow-Bold", margin: 0 }}>
            {item.heading}
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 64
            }}
          >
            <h3 style={{ fontFamily: "Sans-Narrow-Bold", marginTop: 0 }}>
              {item.name}
            </h3>
            {item.content.length > 0 && (
              <Text
                style={{ color: "#aaa", marginTop: 0, textAlign: "center" }}
              >
                {item.content}
              </Text>
            )}
            <div
              style={{
                width: "10%",
                height: 1,
                backgroundColor: "#000",
                marginBottom: 64
              }}
            />

            <Container>
              {item.items.map(item => {
                return (
                  <div
                    key={item.title}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      margin: "16px 0"
                    }}
                  >
                    <H3heading style={{ textAlign: "center", margin: 0 }}>
                      {item.title}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span
                        style={{
                          fontSize: 14,
                          fontFamily: "Sans-Narrow-Regular"
                        }}
                      >
                        {item.price}
                      </span>
                    </H3heading>
                    <Text style={{ textAlign: "center", fontSize: 14 }}>
                      {item.description}
                    </Text>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center"
                      }}
                    >
                      {item.tags.map(tag => (
                        <p
                          style={{
                            color: "#fff",
                            backgroundColor: "#000",
                            margin: "0 8px",
                            padding: 4
                          }}
                          key={tag}
                        >
                          {tag}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </Container>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

// const Menus = () => {
//   const menuScript = `<script id="w8k-z" type="text/javascript" src="https://imenupro.com/!w8k-z"></script>`;

//   const renderMenu = () => {
//     const script = document.createElement("script");

//     script.async = true;
//     script.id = "w8k-z";
//     script.src = "https://imenupro.com/!w8k-z";
//     // document.head.appendChild(script);

//     const childrenLength = document.getElementById("menuContainer").children
//       .length;

//     if (childrenLength == 0) {
//       console.log(childrenLength);
//       document.getElementById("menuContainer").appendChild(script);
//     }
//   };

//   useEffect(() => {
//     document.onload = function() {
//       renderMenu();
//     };
//   }, []);

//   return (
//     <>
//       <ParallaxProvider>
//         <Desktop>
//           <DHeader showHeader={true} />
//           <PlainParallax
//             image={"/static/images/menu.jpg"}
//             height={700}
//             strength={300}
//           />

//           <Heading style={{ marginTop: 64, textAlign: "center" }}>
//             Menus
//           </Heading>

//           <div id={"menuContainer"} />

//           <Footer />
//         </Desktop>

//         <Mobile>
//           <MHeader />
//           <PlainParallax
//             image={"/static/images/menu.jpg"}
//             height={700}
//             strength={300}
//           />
//           <Heading style={{ marginTop: 64, textAlign: "center" }}>Menu</Heading>
//           <div
//             dangerouslySetInnerHTML={{ __html: menuScript }}
//             style={{ display: "flex", justifyContent: "center" }}
//           />
//           <Footer />
//         </Mobile>
//       </ParallaxProvider>
//     </>
//   );
// };

// const MenuMobileCodeContainer = styled.div`
//   @media (max-width: 767px) {
//     display: block;
//   }

//   @media (min-width: 768px) {
//     display: none;
//   }
// `;

// const MenuDesktopCodeContainer = styled.div`
//   @media (max-width: 767px) {
//     display: block;
//   }

//   @media (min-width: 768px) {
//     display: none;
//   }
// `;

const MenuD = styled.div`
  #imp-love {
    display: none;
  }
`;

class Menus extends React.Component {
  renderMenu = () => {
    const script = document.createElement("script");

    script.async = true;
    script.id = "w8k-z";
    script.src = "https://imenupro.com/!w8k-z";
    // document.head.appendChild(script);

    if (window.innerWidth > 768) {
      const menuDesktop = document.getElementById("menuDesktop");
      if (menuDesktop.children.length == 0) {
        menuDesktop.appendChild(script);
      }
    } else {
      const menuMobile = document.getElementById("menuMobile");
      if (menuMobile.children.length == 0) {
        menuMobile.appendChild(script);
      }
    }

    // const childrenLength = document.getElementById("menuContainer").children
    //   .length;

    // if (childrenLength == 0) {
    //   console.log(childrenLength);
    //   document.getElementById("menuContainer").appendChild(script);
    // }
  };

  componentDidMount() {
    this.renderMenu();
    // window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    // window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {};

  render() {
    const menuScript = `<script id="w8k-z" type="text/javascript" src="https://imenupro.com/!w8k-z"></script>`;
    return (
      <>
        <Helmet>
          <title> Explore Samudhra - Franklin Park, NJ</title>
          <meta
            name={"description"}
            content={`Samudhra presents a sprawling spread of ethnic Indian food, south Indian thalis, handcrafted cocktails, wines & spirits all set in vibrant & stylish interiors.`}
          />
        </Helmet>
        <ParallaxProvider>
          <Desktop>
            <DHeader showHeader={true} />
            <PlainParallax
              image={"/static/images/menu.jpg"}
              height={700}
              strength={0}
            />
            <Heading style={{ marginTop: 64, textAlign: "center" }}>
              Menu
            </Heading>
            <MenuD id="menuDesktop" />

            <Footer />
          </Desktop>
        </ParallaxProvider>
        <ParallaxProvider>
          <Mobile>
            <MHeader />
            {/* <PlainParallax
              image={"/static/images/menuMobile.jpg"}
              height={450}
              strength={0}
            /> */}

            <PlainParallaxMobile image={"/static/images/menuMobile.jpg"} />
            <Heading style={{ marginTop: 64, textAlign: "center", margin: 0 }}>
              Menu
            </Heading>

            <MenuD id="menuMobile" />

            <Footer />
          </Mobile>
        </ParallaxProvider>
      </>
    );
  }
}

export default Menus;
