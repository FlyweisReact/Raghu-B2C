/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const [ open , setOpen] = useState(false)
  return (
    <>
      <div className="HomeNewnav">
        <div className="left">
          <img src={img} alt="" />
        </div>
        <div className="right">
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <li>About </li>
            <Link to={"/allCou"}>
              <li>Courses</li>
            </Link>
            <li>Resources</li>
            <li style={{ fontWeight: "bold" }}>Login</li>
            <Link to={"/trial"}>
              <button>Free Trial </button>
            </Link>
            <li>
              <i class="fa-solid fa-magnifying-glass"></i>
            </li>
          </ul>
          <div className="sideBarMenu">
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>


   {open ?    <div className="sideMenuRes">
        <ul>
        <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <li>About </li>
            <Link to={"/allCou"}>
              <li>Courses</li>
            </Link>
            <li>Resources</li>
            <li style={{ fontWeight: "bold" }}>Login</li>
            <Link to={"/trial"}>
              <button>Free Trial </button>
            </Link>
            <li>
              <i class="fa-solid fa-magnifying-glass"></i>
            </li>
          </ul>
        </ul>
      </div> :    <div className="sideMenuRes">
        <ul>
        <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <li>About </li>
            <Link to={"/allCou"}>
              <li>Courses</li>
            </Link>
            <li>Resources</li>
            <li style={{ fontWeight: "bold" }}>Login</li>
            <Link to={"/trial"}>
              <button>Free Trial </button>
            </Link>
            <li>
              <i class="fa-solid fa-magnifying-glass"></i>
            </li>
          </ul>
        </ul>
      </div>}
    </>
  );
};

export default Header;
