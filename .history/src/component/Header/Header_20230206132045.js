/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const token = localStorage.getItem("token");

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
           
            {token ? (
            <>
              <li>
                <input type={'search'} placeholder='Search' />
              </li>
              <li>
              <i class="fa-solid fa-heart"></i>
              </li>
            </>
            ) : (
             <>
             <li style={{ fontWeight: "bold" }}>Login</li>
              <Link to={"/freeTrial"}>
                <button>Free Trial </button>
              </Link>
              <li>
              <i
                class="fa-solid fa-magnifying-glass"
                style={{ cursor: "pointer" }}
              ></i>
            </li>
             </>
            )}

           
          </ul>
          <div className="sideBarMenu">
            <i class="fa-solid fa-bars" onClick={() => setOpen(!open)}></i>
          </div>
        </div>
      </div>

      {open ? (
        <div className="sideMenuRes" style={{ marginLeft: "10px" }}>
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
            <Link to={"/freeTrial"}>
              <button>Free Trial </button>
            </Link>
          </ul>
        </div>
      ) : (
        <div className="sideMenuRes">
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
            <Link to={"/freeTrial"}>
              <button>Free Trial </button>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
