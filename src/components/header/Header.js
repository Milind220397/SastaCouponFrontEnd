import React, { useLayoutEffect, useState } from "react";
import "./Header.css";
import Logo from "./Site_Icon.png"
import NavModal from './navModal/navModal'
import LogIn from "../LogIn/LogIn";
import { Link, redirect } from "react-router-dom";
export default function Header(props) {
  let [windowWidth, setWindowWidth] = useState(0);
  //let [showLoginModal, setShowLoginModal] = useState(false);

  useLayoutEffect(() => {
    function updateSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  let showModal = (e) => {
    document.querySelector('.nav-modal').classList.remove('out');
    document.querySelector('.nav-modal').classList.add('active');
  }


  return (
    <>
    {/* {showLoginModal?<LogIn setShowLoginModal={setShowLoginModal}/>: null} */}
    {windowWidth>769? 
    <nav className="nav">
        <ul className="nav-list">
          <Link to="/home">Home</Link>
          <Link to="/about">Mission</Link>
          <Link to="/discover">Discover</Link>
          <Link to='/'><img src={Logo} alt="site_logo" className='site_icon'></img></Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/upload-coupon">Sell your coupon</Link>
          <Link to="/logIn"><span className="material-icons">person</span></Link>
        </ul>
      </nav>  :  <nav className="nav">
      <span className="nav-icons material-icons md-48 white" onClick={showModal}>menu</span>
      <a href='/'><img src={Logo} alt="site_logo" className='site_icon'></img></a>
      <Link to="/logIn"><span className="nav-icons material-icons md-48 white">person</span></Link>
      <NavModal/>
      </nav>}
    </>
  );
}
