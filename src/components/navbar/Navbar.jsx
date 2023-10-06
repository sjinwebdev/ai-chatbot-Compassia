import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/compassia.svg";
import "./navbar.css";

// child component for the Navbar component to use a repeating code
const Menu = () => (
  //fragment
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#compassia">What is Compassia AI</a>
    </p>
    <p>
      <a href="#features">Features</a>
    </p>
    <p>
      <a href="#possibility">Possibilities</a>
    </p>
    <p>
      <a href="#blog">Blog</a>
    </p>
  </>
);
const Navbar = () => {
  // state for three bars
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {/* Its menu that going to show up for mobile devices */}
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {/*logical and evaluates second value if the first is true*/}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3-navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
