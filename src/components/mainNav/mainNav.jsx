import React from "react";
import "./mainNav.scss";
import search from "../.././images/search.png";
import logo from "../.././images/logo.png";

const Menu = () => (
  <div className="main">
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
    <div className="titleBar">
      <p className="candidate">Candidate Roadmap</p>
      <img src={search} alt="Search" />
    </div>
  </div>
);

export default Menu;
