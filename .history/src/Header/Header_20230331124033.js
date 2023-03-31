/** @format */

import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../images/logo.png";
import "./Header.css";
import CartImg from "../images/cart 5.png";
import img1 from "../images/person 1.jpg";
import axios from "axios";
import LoginModal from "../Modals/LoginModal";
import UserDashModal from "../Modals/UserDashModal";
import SideBarCanvas from "../OffCanvas/SideBarCanvas";

const Header = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [userDetailModal, setUserDetailModal] = React.useState(false);
  const [shiow, setShow] = useState(false);
  const location = useLocation();
  const [length, setLength] = useState("");
  const userId = localStorage.getItem("UserId");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const cartLength = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/cart/length/${userId}`
      );
      setLength(data?.message);
    } catch (err) {
      console.log(err);
    }
  }, [userId]);

  useEffect(() => {
    if (token) {
      cartLength();
    }
  }, [token, cartLength]);

  return (
    <>
      <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
      <UserDashModal
        show={userDetailModal}
        onHide={() => setUserDetailModal(false)}
      />

      <SideBarCanvas show={shiow} onHide={() => setShow(false)} />

      <div className="HeaderUp">
        <div className="left">
          <div className="under">
            <i className="fa-sharp fa-solid fa-envelope"></i>
            <p>info@expert-works.com</p>
          </div>

          <div className="under">
            <i className="fa-solid fa-phone"></i>
            <div>
              <p>+1 512-277-3004</p>
              <p>+91 9347113488</p>
            </div>
          </div>
        </div>

        <div className="right">
          <a
            href="https://www.facebook.com/Expertworks2021"
            target={"_blank"}
            rel="noreferrer"
            style={{ color: "black" }}
          >
            <i
              className="fa-brands fa-square-facebook"
              style={{ color: "#426fec" }}
            ></i>
          </a>

          <a
            href="https://www.instagram.com/expertworks2020/"
            target={"_blank"}
            rel="noreferrer"
            style={{ color: "black" }}
          >
            <i
              className="fa-brands fa-square-instagram"
              style={{ color: "#8441b0" }}
            ></i>
          </a>
        </div>
      </div>

      <div className="HomeNewnav">
        <div className="left">
          <Link to={"/"}>
            <img src={img} alt="" />
          </Link>
        </div>
        <div className="right">
          <ul>
            <Link to={"/"}>
              <li className={location.pathname === '/' ? "activeLink" :"normalList"} >Home</li>
            </Link>
            <Link to={"/about"}>
              <li  className={location.pathname === '/about' ? "activeLink" :"normalList"}>About</li>
            </Link>
            <Link to={"/secondCourse"}>
              <li className="normalList">Courses</li>
            </Link>
            <Link to={"/resource"}>
              <li className="normalList">Resources</li>
            </Link>
            {token ? (
              <>
                <li>
                  <input type={"search"} placeholder="Search" />
                </li>

                <li onClick={() => navigate("/wishlist")}>
                  <i
                    className="fa-solid fa-heart normalList"
                    style={{ color: "red" }}
                  >
                    {" "}
                  </i>
                </li>
                <li
                  onClick={() => navigate("/cart")}
                  style={{ position: "relative" }}
                >
                  <span
                    style={{
                      position: "absolute",
                      right: "-12px",
                      top: "-10px",
                      color: "red",
                    }}
                  >
                    {" "}
                    {length}
                  </span>
                  <img
                    src={CartImg}
                    alt="Cart"
                    className="CartImg"
                    style={{ marginTop: "5px" }}
                  />
                </li>
                <li>
                  <img
                    src={img1}
                    alt=""
                    className="personImg"
                    onClick={() => setUserDetailModal(true)}
                  />
                </li>
              </>
            ) : (
              <>
                <li
                  style={{ fontWeight: "bold" }}
                  className="normalList"
                  onClick={() => setModalShow(true)}
                >
                  Login
                </li>
                <Link to={"/freeTrial"}>
                  <button>Free Trial </button>
                </Link>
                <li>
                  <i
                    className="fa-solid fa-magnifying-glass normalList"
                    style={{ cursor: "pointer" }}
                  ></i>
                </li>
              </>
            )}
          </ul>
          <div className="sideBarMenu">
            <i
              className="fa-solid fa-bars"
              onClick={() => setShow(true)}
              style={{ cursor: "pointer" }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
