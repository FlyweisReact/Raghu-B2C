
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../images/logo.png";
import "./Header.css";
import CartImg from "../images/cart 5.png";
import img1 from "../images/person 1.jpg";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [userModal, setuserModal] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  function SignOut() {
    localStorage.removeItem("token");
    setuserModal(false);
  }

  return (
    <>

    <div className="HeaderUp">
    <div className="left">
      <div className="under">
        <p>info@expert-works.com</p>
      </div>

      <div className="under">
      <div>
        <p>+1 512-277-3004</p>
        <p>+91</p>
      </div>
      </div>
    </div>

    </div>

      <div className="HomeNewnav">
        <div className="left">
        <Link to={'/'}>
        <img src={img} alt=""  />
        </Link>
        </div>
        <div className="right">
          <ul>
            <Link to={"/"}>
              <li className="normalList">Home</li>
            </Link>
            <li className="normalList">About </li>
            <Link to={"/allCou"}>
              <li className="normalList">Courses</li>
            </Link>
            <li className="normalList">Resources</li>

            {token ? (
              <>
                <li>
                  <input type={"search"} placeholder="Search" />
                </li>
                <li>
                  <i
                    class="fa-solid fa-heart normalList"
                    style={{ color: "red" }}
                  >
                    {" "}
                  </i>
                </li>
                <li onClick={() => navigate("/cart")}>
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
                    onClick={() => setuserModal(!userModal)}
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

      {userModal ? (
        <div className="Userinfo">
          <button type="button" onClick={() => navigate("/NewCoursePage")}>
            My Account
          </button>
          <button type="button" onClick={() => navigate("/cart")}>Go to Cart</button>
          <button type="button">Notification</button>
          <button type="button" onClick={() => SignOut()}>
            Sign out
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;