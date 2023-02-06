/** @format */

import React from "react";
import { Link } from "react-router-dom";
import img from '../../images/logo.png'
import './Header.css'

const Header = () => {
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
            <div className='sidebarMenu' > 
            <ul
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
