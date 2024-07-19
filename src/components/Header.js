import React, { useContext } from "react";
import { LOGO_CDN } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

function Header() {
  const { userName } = useContext(UserContext);

  const noOfItemsInCart = useSelector((store) => store.cartSlice.quantity);

  return (
    <div className="z-10 fixed top-0 bg-white w-screen items-center flex justify-between px-24 py-0 shadow-lg  ">
      <Link to="/">
        <img className="h-16" alt="logo" src={LOGO_CDN}></img>
      </Link>

      <ul className="flex items-center">
        <Link className="mx-4  font-bold  text-lg hover:[color:#ffa700]" to="/">
          Home
        </Link>

        <Link className="mx-4 font-bold  text-lg hover:[color:#ffa700]" to="/about">
          About
        </Link>

        <Link className="mx-4 font-bold  text-lg hover:[color:#ffa700]" to="/grocery">
          Grocery
        </Link>

        <Link className="mx-4 font-bold  text-lg hover:[color:#ffa700]" to="/contact">
          Contact Us
        </Link>

        <Link className="mx-4 font-bold  text-lg hover:[color:#ffa700]" to="/cart">
          Cart [<span className="text-cyan-600">{noOfItemsInCart}</span>]
        </Link>

        <h2 className="mx-4 ml-2  font-bold  leading-tight">
          <p className="font-normal">welcome</p>
          <p className="  text-lg text-orange-400">{userName}</p>
        </h2>
      </ul>
    </div>
  );
}

export default Header;
