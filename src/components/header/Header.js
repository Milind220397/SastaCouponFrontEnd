import React from "react";
import "./Header.css";
import Logo from "./Logo.png"
export default function Header(props) {
  return (
    <div className="main">
      <div className="bc">
        <button className="b1">Home</button>
        <button className="b1">Mission</button>
        <button className="b1">Discover</button>
        <img id="logo" src={Logo}></img>
        <button className="b1">FAQs</button>
        <button className="b1">Sell</button>
        <button className="b1">My Profile</button>
      </div>
    </div>
  );
}
