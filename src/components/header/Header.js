import React, { useLayoutEffect, useState } from "react";
import "./Header.css";
import Logo from "./Site_Icon.png"
export default function Header(props) {
  let [windowWidth, setWindowWidth] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);


  return (
    <>
    {windowWidth>769? 
    <nav className="nav">
        <ul className="nav-list">
          <li>Home</li>
          <li>Mission</li>
          <li>Discover</li>
          <a href='/'><img src={Logo} alt="site_logo" className='site_icon'></img></a>
          <li>FAQ</li>
          <li>Sell your coupon</li>
          <span className="material-icons">person</span>
        </ul>
      </nav>  :  <nav className="nav">
      <span class="nav-icons material-icons md-48 white">menu</span>
      <a href='/'><img src={Logo} alt="site_logo" className='site_icon'></img></a>
      <span className="nav-icons material-icons md-48 white">person</span>
      </nav>}
    </>
  );
}
