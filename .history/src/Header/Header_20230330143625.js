/** @format */

import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../images/logo.png";
import "./Header.css";
import CartImg from "../images/cart 5.png";
import img1 from "../images/person 1.jpg";
import axios from "axios";
import LoginModal from "../Modals/LoginModal";
import UserDashModal from "../Modals/UserDashModal";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current?.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [modalShow, setModalShow] = React.useState(false);
  const [userDetailModal, setUserDetailModal] = React.useState(false);
  const [length, setLength] = useState("");

  let domNode = useClickOutside(() => {
    setOpen(false);
  });

  const cartLength = async () => {
    try {
      const { data } = await axios.get(
        `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/cart/length/${userId}`
      );
      setLength(data?.message);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    cartLength();
  }, [userId]);

  return (
    <>
      <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
      <UserDashModal
        show={userDetailModal}
        onHide={() => setUserDetailModal(false)}
      />

      <div className="HeaderUp">
        <div className="left">
          <div className="under">
            <i class="fa-sharp fa-solid fa-envelope"></i>
            <p>info@expert-works.com</p>
          </div>

          <div className="under">
            <i class="fa-solid fa-phone"></i>
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
            <i class="fa-brands fa-square-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/expertworks2020/"
            target={"_blank"}
            rel="noreferrer"
            style={{ color: "black" }}
          >
            <i class="fa-brands fa-square-instagram"></i>
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
              <li className="normalList">Home</li>
            </Link>
            <Link to={"/about"}>
              <li className="normalList">About</li>
            </Link>
            <Link to={token ? "/allCou" : "/secondCourse"}>
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
                    class="fa-solid fa-heart normalList"
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
                    class="fa-solid fa-magnifying-glass normalList"
                    style={{ cursor: "pointer" }}
                  ></i>
                </li>
              </>
            )}
          </ul>
          <div className="sideBarMenu">
            <i
              class="fa-solid fa-bars"
              onClick={() => setOpen(!open)}
              style={{ cursor: "pointer" }}
            ></i>
          </div>
        </div>
      </div>

      {open ? (
        <div
          className="sideMenuRes"
          style={{ marginLeft: "10px" }}
          ref={domNode}
        >
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
                  <img
                    src={img1}
                    alt=""
                    className="personImg"
                    style={{ width: "80px" }}
                    onClick={() => {
                      setOpen(false);
                      setUserDetailModal(true);
                    }}
                  />
                </li>
              </>
            ) : (
              <>
                <li
                  style={{ fontWeight: "bold" }}
                  className="normalList"
                  onClick={() => {
                    setOpen(false);
                    setModalShow(true);
                    setUserDetailModal(false);
                  }}
                >
                  Login
                </li>
                <Link to={"/freeTrial"}>
                  <button>Free Trial </button>
                </Link>
              </>
            )}
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
            {token ? (
              <>
                <li>
                  <img
                    src={img1}
                    alt=""
                    className="personImg"
                    style={{ width: "80px" }}
                    onClick={() => setUserDetailModal(true)}
                  />
                </li>
              </>
            ) : (
              <>
                <li style={{ fontWeight: "bold" }} className="normalList">
                  Login
                </li>
                <Link to={"/freeTrial"}>
                  <button>Free Trial </button>
                </Link>
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
