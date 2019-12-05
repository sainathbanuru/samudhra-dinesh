import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { sideMenu } from "../../data/header";

import onClickOutside from "react-onclickoutside";

var styles = {
  bmMenuWrap: {
    position: "fixed",
    height: "100vh"
    // width: "30%"
  },
  bmMenu: {
    background: "#cc5500",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
    position: "absolute",
    right: 0,
    left: 0,
    top: 0,
    marginTop: -50
  },
  bmBurgerBars: {
    background: "red"
  },
  bmMorphShape: {
    fill: "#cc5500"
  },
  bmBurgerBarsHover: {
    background: "#a90000"
  },
  bmItemList: {
    color: "red"
  },
  bmItem: {
    color: "#000",
    marginBottom: 16,
    textDecorationLine: "none",
    fontFamily: "Sans-Narrow-Bold",
    borderWidth: 0
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

const SideBar = props => {
  SideBar.handleClickOutside = () => props.hideMenu();

  return (
    // Pass on our props
    <Menu isOpen={props.isOpen} right styles={styles}>
      {sideMenu.map((menuItem, index) => (
        <a
          className="menu-item"
          style={{ padding: "8px 24px" }}
          key={menuItem.name}
          href={menuItem.path}
        >
          {menuItem.name}
        </a>
      ))}
    </Menu>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => SideBar.handleClickOutside
};

export default onClickOutside(SideBar, clickOutsideConfig);
