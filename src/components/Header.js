import React, { useState, useContext } from "react";
import { LOGO_CDN } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const { userName } = useContext(UserContext);

  return (
    <div className="flex justify-between px-24 shadow-lg">
      <Link to="/">
        <img className="h-24" alt="logo" src={LOGO_CDN}></img>
      </Link>

      <ul className="flex items-center">
        <li>
          <Link className="m-4 font-bold text-lg hover:[color:#ffa700]" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className="m-4 font-bold text-lg hover:[color:#ffa700]"
            to="/about"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            className="m-4 font-bold text-lg hover:[color:#ffa700]"
            to="/cart"
          >
            Cart
          </Link>
        </li>
        <li>
          <Link
            className="m-4 font-bold text-lg hover:[color:#ffa700]"
            to="/contact"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            className="m-4 font-bold text-lg hover:[color:#ffa700]"
            to="/grocery"
          >
            Grocery
          </Link>
        </li>
        <button
          className="m-4 w-12 font-bold text-lg hover:[color:#ffa700]"
          onClick={() => {
            setIsLogin(!isLogin);
          }}
        >
          {isLogin ? "Logout" : "Login"}
        </button>
        <li>
          <Link className="m-4 font-bold text-lg hover:[color:#ffa700]">
            {userName}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
