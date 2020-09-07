import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import Burger from "./Burger";
import "./../styles/lay.header-main.css";

export default function HeaderMain({ burgerCallback }) {
  return (
    <header id="header-main">
      <Logo />
      <Nav />
      <Burger burgerCallback={burgerCallback} />
    </header>
  );
}
