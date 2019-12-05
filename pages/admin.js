import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HappeningsAdmin from "../components/admin/happeningsAdmin";
import MeetFolks from "../components/admin/folks";
import BlogAdmin from "../components/admin/blogAdmin";
import GalleryAdmin from "../components/admin/galleryAdmin";
import CareersAdmin from "../components/admin/careersAdmin";
import UnlimitedThaliAdmin from "../components/admin/unlimitedThaliAdmin";
import HappyHoursAdmin from "../components/admin/happyHoursAdmin";
import DiscoveryAdmin from "../components/admin/discoveryAdmin";
import ExploreAdmin from "../components/admin/exploreAdmin";
import CultureTripAdmin from "../components/admin/cultureTripAdmin";
import WeekendBrunch from "../components/admin/weekendBrunchAdmin";
import SaturdayNightsAdmin from "../components/admin/saturdayNightsAdmin";
import DivaNightsAdmin from "../components/admin/divaNightsAdmin";
import BollywoodNightAdmin from "../components/admin/bollywoodNightAdmin";
import { firestore, signInWithGoogle, auth } from "../components/firebase";
import Text from "../components/common/Text";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
`;

const SideMenu = styled.div`
  width: 25%;
  background-color: #424242;
  height: 100%;
  overflow: hidden;
  position: fixed;
`;

const Container = styled.div`
  flex: 1;
  padding: 16px;
  background-color: #fff;
  margin-left: 25%;
`;

const Button = styled.div`
  display: flex;
  border: 2px solid #00c48a;
  border-radius: 6px;
  width: 150px;
  height: 48px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 16px;
  margin-top: 16px;
`;

const Buttontext = styled.div`
  font-family: Sans-Narrow-Bold;
  font-size: 16px;
  color: #00c48a;
`;

const sideMenuData = [
  {
    title: "Gallery",
    component: ""
  },
  {
    title: "Folks",
    component: MeetFolks
  },
  {
    title: "Blog",
    component: BlogAdmin
  },
  {
    title: "Happenings",
    component: HappeningsAdmin
  },
  {
    title: "Careers",
    component: CareersAdmin
  },
  {
    title: "Discovery",
    component: DiscoveryAdmin
  },
  {
    title: "Explore",
    component: ExploreAdmin
  },
  {
    title: "Culture Trip",
    component: CultureTripAdmin
  },
  {
    title: "Unlimited Thali",
    component: UnlimitedThaliAdmin
  },
  {
    title: "Happy Hours",
    component: HappyHoursAdmin
  },
  {
    title: "Weekend Brunch",
    component: WeekendBrunch
  },
  {
    title: "Saturday Nights",
    component: WeekendBrunch
  },
  {
    title: "Diva Nights",
    component: WeekendBrunch
  },
  {
    title: "Bollywood Night",
    component: WeekendBrunch
  }
  // {
  //   title: "Gallery",
  //   component: ""
  // }
];

const renderComponent = key => {
  switch (key) {
    case 0:
      return <GalleryAdmin />;

    case 1:
      return <MeetFolks />;

    case 2:
      return <BlogAdmin />;

    case 3:
      return <HappeningsAdmin />;
    case 4:
      return <CareersAdmin />;

    case 5:
      return <DiscoveryAdmin />;
    case 6:
      return <ExploreAdmin />;

    case 7:
      return <CultureTripAdmin />;

    case 8:
      return <UnlimitedThaliAdmin />;
    case 9:
      return <HappyHoursAdmin />;
    case 10:
      return <WeekendBrunch />;
    case 11:
      return <SaturdayNightsAdmin />;
    case 12:
      return <DivaNightsAdmin />;
    case 13:
      return <BollywoodNightAdmin />;
    default:
      break;
  }
};

// const Admin = () => {
//   const [contentType, setContentType] = useState(0);
//   const [signedIn, setSignedIn] = useState(false);
//   const [user, setUser] = useState();

//   useEffect(() => {
//     // firestore
//     //   .collection("users")
//     //   .doc("userEmail")
//     //   .get()
//     //   .then(userDetails => {
//     //     // thaliDetails.data();
//     //     // this.setState({
//     //     //   ...thaliDetails.data()
//     //     // });
//     //   });

//     const authStateListener = auth.onAuthStateChanged(user => {
//       setUser(user);
//       setSignedIn(true);
//     });
//   });
// };

class Admin extends React.Component {
  state = {
    contentType: 0,
    signedIn: false
  };

  unSubscribeAuth = null;

  componentDidMount() {
    this.unSubscribeAuth = auth.onAuthStateChanged(user => {
      if (user)
        firestore
          .collection("users")
          .doc("userEmail")
          .get()
          .then(userDetails => {
            // thaliDetails.data();
            // this.setState({
            //   ...thaliDetails.data()
            // });
            if (userDetails.data().email == user.email)
              this.setState({
                signedIn: true
              });
            else {
              this.setState({
                unAuthorizedMessage: "Unauthorized user"
              });

              auth.signOut();
            }
          });
    });
  }

  componentWillUnmount() {
    this.unSubscribeAuth();
  }

  setContentType = contentType => {
    this.setState({ contentType });
  };

  render() {
    const { signedIn, contentType } = this.state;
    return (
      <Wrapper>
        {/* <div
          style={{
            position: "fixed",
            height: "100%",
            width: "25%",
            backgroundColor: "red"
          }}
        >
          <img
            src={"/static/images/samudhra.png"}
            style={{ height: 36, width: 200, alignSelf: "center" }}
          />
          {sideMenuData.map(menuItem => (
            <h3
              key={menuItem.title}
              style={{ color: "#fff", padding: "0 0 0 16px" }}
            >
              {menuItem.title}
            </h3>
          ))}
        </div> */}
        {signedIn ? (
          <>
            <SideMenu>
              <img
                src={"/static/images/samudhra_white.png"}
                style={{
                  height: 48,
                  width: 200,
                  alignSelf: "center",
                  borderBottomWidth: 1,
                  borderColor: "#fff"
                }}
              />

              {sideMenuData.map((menuItem, index) => (
                <h3
                  key={menuItem.title}
                  style={{
                    color: "#fff",
                    padding: "0 0 0 16px",
                    cursor: "pointer"
                  }}
                  onClick={() => this.setContentType(index)}
                >
                  {menuItem.title}
                </h3>
              ))}
            </SideMenu>
            <Container>
              {/* <MeetFolks /> */}
              <div style={{ width: "80%" }}>
                <Text
                  style={{
                    color: "steelblue",
                    textAlign: "right",
                    marginRight: 24,
                    cursor: "pointer"
                  }}
                  onClick={() =>
                    auth
                      .signOut()
                      .then(user => this.setState({ signedIn: false }))
                  }
                >
                  Logout
                </Text>
                {renderComponent(contentType)}
              </div>
            </Container>
          </>
        ) : (
          <div
            style={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <img
              src={"/static/images/S2.png"}
              style={{
                height: 48,
                width: 200,
                alignSelf: "center",
                borderBottomWidth: 1,
                borderColor: "#fff"
              }}
            />{" "}
            <Text
              onClick={signInWithGoogle}
              style={{
                border: "1px solid #000",
                padding: 16,
                borderRadius: 4,
                margin: "16px 0",
                cursor: "pointer"
              }}
            >
              Signin with Google
            </Text>
            <Text style={{ color: "red" }}>
              {this.state.unAuthorizedMessage}
            </Text>
          </div>
        )}
      </Wrapper>
    );
  }
}

export default Admin;
