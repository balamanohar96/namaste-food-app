import React from "react";
import { useState } from "react";
import { LOGO_CDN } from "../utils/constants";
import { Link } from "react-router-dom";

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="header-container">
      <img className="logo" alt="logo" src={LOGO_CDN}></img>
      <ul className="nav-items">
        <li>
          <Link className="nav-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/cart">
            Cart
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/contact">
            Contact Us
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/grocery">
            Grocery
          </Link>
        </li>
        <button
          className="login-btn pointer"
          onClick={() => {
            setIsLogin(!isLogin);
          }}
        >
          {isLogin ? "Logout" : "Login"}
        </button>
      </ul>
    </div>
  );
}

export default Header;
