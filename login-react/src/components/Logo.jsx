import React from "react";
import logo from "./../assets/logo.svg";
import { Link } from "react-router-dom";
import "./../styles/mod.logo.css";

export default function Logo() {
  return (
    <Link to="/" className="link-wrap">
      <img className="logo" alt="logo react" src={logo} />
    </Link>
  );
}
