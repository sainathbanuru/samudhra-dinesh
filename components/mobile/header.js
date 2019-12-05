import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { withRouter } from "next/router";
import { stack as Menu } from "react-burger-menu";

import { mainMenuItems, sideMenu } from "../../data/header";

const PageWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.05);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .bm-icon {
    height: 18px !important;
    width: 18px !important;
  }

  > div:nth-child(2) {
    position: absolute;
    width: 30%;
    top: 0;
    right: 0;
  }

  .bm-burger-button {
    text-align: right;
    top: 24px;
    right: 20px;
  }

  .bm-menu {
    background-color: #fff;
  }

  .bm-item {
    &.menu-item {
      padding: 15px 0 15px 22%;

      &:first-child {
        margin-top: 70px;
      }

      &.download-button {
        bottom: 50px;
        position: absolute;
        text-align: center;
      }

      a {
        text-decoration: none;
        color: #000;
        &:hover {
          color: #20c08e;
        }
      }

      &.menu-active {
        a {
          color: #20c08e;
        }
      }
    }
  }

  .bm-cross-button {
    position: fixed !important;
    top: 20px !important;
    right: 20px !important;
  }
  .bm-cross {
    background-color: #000;
  }
`;

const Wrapper = styled.div`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 36px;
  width: auto;
`;

const DownloadApp = styled.a`
  color: #fff !important;
  background: #20c08e;
  box-shadow: 0 5px 12px 0 rgba(0, 196, 138, 0.5);
  border-radius: 6px;
  padding: 15px;
`;

class Header extends React.Component {
  render() {
    return (
      <PageWrapper>
        <div style={{ padding: 16 }}>
          <Link href="/">
            <Logo src={"/static/images/S2.png"} alt={"Logo"} />
          </Link>
        </div>
        <Menu right customBurgerIcon={<img src="/static/images/hammy.png" />}>
          {mainMenuItems.map((menuItem, index) => {
            if (menuItem.name == "Gift Cards") {
              return (
                <li
                  key={index}
                  className={`menu-item ${
                    menuItem.path === this.props.router.route
                      ? "menu-active"
                      : undefined
                  }`}
                >
                  <Link>
                    <a
                      href={"https://www.toasttab.com/samudhrausa/giftcards"}
                      target="_blank"
                      style={{ fontFamily: "Quicksand-Regular" }}
                    >
                      {menuItem.name}
                    </a>
                  </Link>
                </li>
              );
            }
            return (
              <li
                key={index}
                className={`menu-item ${
                  menuItem.path === this.props.router.route
                    ? "menu-active"
                    : undefined
                }`}
              >
                <Link href={menuItem.path}>
                  <a style={{ fontFamily: "Quicksand-Regular" }}>
                    {menuItem.name}
                  </a>
                </Link>
              </li>
            );
          })}

          {sideMenu.map((menuItem, index) => (
            <li
              key={index}
              className={`menu-item ${
                menuItem.path === this.props.router.route
                  ? "menu-active"
                  : undefined
              }`}
            >
              <Link href={menuItem.path}>
                <a style={{ fontFamily: "Quicksand-Regular" }}>
                  {menuItem.name}
                </a>
              </Link>
            </li>
          ))}
        </Menu>
      </PageWrapper>
    );
  }
}

export default withRouter(Header);
