import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { withRouter } from "next/router";

import { slide as Menu } from "react-burger-menu";
import SideBar from "../common/sidebar";

import { mainMenuItems, sideMenu } from "../../data/header";

const PageWrapper = styled.div`
  z-index: 1;
  width: 100%;
  // opacity: ${props => (props.showHeader ? 1 : 0)};
  transition: all .3s ease .15s;

  // display: ${props => (props.showHeader ? "block" : "none")};
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: ${props => (props.isFixed ? "fixed" : "static")};
  background-color: ${props =>
    props.showHeader ? "#fff" : props.backgroundColor};
  // -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.48);
  // box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.48);
`;

const Logo = styled.img`
  height: 64px;
  width: auto;
  margin-left: 32px;
`;

// const SocialContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   background-color: #fff;
// `;

// const SocialIcon = styled.img`
//   height: 24px;
//   width: 24px;
//   margin-right: 16px;
// `;

const MenuItem = styled.ul`
  padding: 0;
  margin: 0;
  font-size: 20px;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  margin: 0px 16px;
  align-items: center;
  list-style: none;
  li {
    margin-left: 48px;
    a {
      text-decoration: none;
      color: ${props => (props.showHeader ? "#000" : "#fff")};
      // &:hover {
      //   color: #20c08e;
      // }
      font-family: Sans-Narrow-Bold;
    }

    &.menu-active {
      a {
      }
    }
  }
`;

const data = JSON.parse(
  '{"EXPERIMENT_AIM":"To study and evaluate stability of sitagitptin tablets 50mg (Blend was taken from Batch No. SIT-100-038)","EXPERIMENT_KEY":160526,"EXPERIMENT_NAME":"SIT-50-001","Int_Index":"13","Component_Name":"sitagliptin","SAMPLE_NAME":"SIT-50-001-0028564","SECTION_KEY":678266,"Bath":null,"Interval_":"13","SECTION_KEY_CQA":678266,"Assay_":null,"RT":"3.95","LOD":null,"LOQ":null,"Max":null,"Min":null,"RRF":null,"RRT":null,"_RSD":null,"Area":"4025660","Mean":null,"_Area":null,"IntType":"BB","RT_min_":null,"CalCurveId":null,"Area_V_sec_":null,"LabelClaim_mg_":"100","PeakHeight_V_":null,"Totalimpurities":null,"SingleMaximumKnown":null,"SingleMaxiumUnknown":null,"_RelatedSubstancesResult_Calculated_":null}'
);

const DownloadApp = styled.a`
  color: #fff !important;
  background: #20c08e;
  box-shadow: 0 5px 12px 0 rgba(0, 196, 138, 0.5);
  border-radius: 6px;
  padding: 15px;
`;

const HamburgerStrip = styled.div`
  width: 20px;
  height: 3px;
  background-color: ${props => (props.showHeader ? "#000" : "#fff")};
  margin: 3px 8px;
`;

class Header extends React.Component {
  state = {
    isOpen: false
  };

  render() {
    const { showHeader } = this.props;

    const logoImage = showHeader ? "S2" : "samudhra_white";
    return (
      <PageWrapper>
        <Wrapper showHeader={this.props.showHeader} {...this.props}>
          <Link href="/">
            <a>
              <Logo src={`/static/images/S2.png`} />
            </a>
          </Link>

          <MenuItem {...this.props}>
            {mainMenuItems.map((menuItem, index) => (
              <li
                key={index}
                className={
                  menuItem.path === this.props.router.route
                    ? "menu-active"
                    : undefined
                }
              >
                <Link>
                  <a
                    href={
                      menuItem.name == "Gift Cards"
                        ? "https://www.toasttab.com/samudhrausa/giftcards"
                        : menuItem.path
                    }
                    style={{ fontFamily: "Sans-Narrow-Bold" }}
                    target={menuItem.name == "Gift Cards" ? "_blank" : "_self"}
                  >
                    {menuItem.name}
                  </a>
                </Link>
              </li>
            ))}
            <li
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center"
              }}
              className="menu-item "
              onClick={() => {
                document.body.style.overflow = "hidden";
                this.setState({ isOpen: true });
              }}
            >
              <div>
                <HamburgerStrip {...this.props} />
                <HamburgerStrip {...this.props} />
                <HamburgerStrip {...this.props} />
              </div>
              <a style={{ fontFamily: "Sans-Narrow-Bold" }}>More</a>
            </li>
          </MenuItem>

          <SideBar
            isOpen={this.state.isOpen}
            hideMenu={() => {
              document.body.style.overflow = "visible";
              this.setState({ isOpen: false });
            }}
          />
        </Wrapper>
      </PageWrapper>
    );
  }
}

Header.defaultProps = {
  isFixed: true,
  backgroundColor: "transparent",
  showHeader: false
};

export default withRouter(Header);
