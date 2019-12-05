import { useState } from "react";
import styled from "styled-components";
import MeetFolks from "../components/admin/folks";
import Happenings from "../components/admin/happeningsAdmin";

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
    title: "Happenings",
    component: ""
  },
  {
    title: "Menu",
    component: ""
  },
  {
    title: "Blog",
    component: ""
  }
];

const returnContent = tab => {
  switch (tab) {
    case 0:
      return <Happenings />;
      break;
    case 1:
      return <MeetFolks />;

    default:
      return <Happenings />;
  }
};

const samAdmin = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <Wrapper>
      <SideMenu>
        <img
          src={"/static/images/samudhra.png"}
          style={{ height: 36, width: 200, alignSelf: "center" }}
          alt={"Logo"}
        />

        {sideMenuData.map((menuItem, index) => (
          <h3
            key={menuItem.title}
            style={{ color: "#fff", padding: "0 0 0 16px" }}
            onClick={() => setSelectedTab(index)}
          >
            {menuItem.title}
          </h3>
        ))}
      </SideMenu>
      <Container>{returnContent(selectedTab)}</Container>
    </Wrapper>
  );
};
export default samAdmin;
