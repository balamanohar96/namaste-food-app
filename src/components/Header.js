import React, { useContext } from "react";
import { LOGO_CDN } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

function Header() {
  const { userName } = useContext(UserContext);

  const noOfItemsInCart = useSelector((store) => store.cartSlice.quantity);

  return (
    <div className="z-10 fixed top-0 bg-white w-screen md:items-center flex md:flex-row flex-col  justify-between md:px-24 py-0 shadow-lg  ">
      <div className="flex justify-between sm:hidden lg:block">
        <Link className="" to="/">
          <img className="h-16" alt="logo" src={LOGO_CDN}></img>
        </Link>
      </div>

      <div className="flex md:flex-row justify-between p-2  md:items-center">
        <Link
          className="md:mx-4  font-bold  md:text-lg hover:[color:#ffa700]"
          to="/"
        >
          Home
        </Link>

        <Link
          className="md:mx-4  font-bold  md:text-lg hover:[color:#ffa700]"
          to="/about"
        >
          About
        </Link>

        <Link
          className="md:mx-4 font-bold  md:text-lg hover:[color:#ffa700]"
          to="/grocery"
        >
          Grocery
        </Link>

        <Link
          className="md:mx-4 font-bold whitespace-nowrap md:text-lg hover:[color:#ffa700]"
          to="/contact"
        >
          Contact Us
        </Link>

        <Link
          className="md:mx-4 font-bold whitespace-nowrap  md:text-lg hover:[color:#ffa700]"
          to="/cart"
        >
          Cart [<span className="text-cyan-600">{noOfItemsInCart}</span>]
        </Link>

        <div className="mx-4 ml-2 hidden md:block font-bold  leading-tight">
          <p className="font-normal">welcome</p>
          <p className="  text-lg text-orange-400">{userName}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
