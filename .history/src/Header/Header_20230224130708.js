/** @format */

import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../images/logo.png";
import "./Header.css";
import CartImg from "../images/cart 5.png";
import img1 from "../images/person 1.jpg";
import { Modal, Form } from "react-bootstrap";
import axios from "axios";

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

// Login Modal
function LoginModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/sign",
        { email, password }
      );
      console.log(data)
      localStorage.setItem("token", data.token);
      localStorage.setItem("UserId" , data.user._id)
      console.log(localStorage.getItem("token"))
      props.onHide();
      alert("User Login Successfully");
      navigate("/allCou");
    } catch (err) {
      alert(err.response.data.message)
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={loginUser}>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <button
            style={{
              backgroundColor: "#426fec",
              color: "#fff",
              padding: "5px",
              width: "130px",
              borderRadius: "0px",
              border: "1px solid #426fec",
              fontSize: "20px",
            }}
            type="submit"
          >
            Login
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

// UserDetailModal

function MyVerticallyCenteredModal(props) {
  const navigate = useNavigate();

  function SignOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("UserId");
    props.onHide();
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="Userinfo">
          <button type="button" onClick={() => navigate("/NewCoursePage")}>
            My Account
          </button>
          <button type="button" onClick={() => navigate("/wishlist")}>Wishlist</button>
          <button type="button" onClick={() => navigate("/cart")}>
            Go to Cart
          </button>
          <button type="button" onClick={() => SignOut()}>
            Sign out
          </button>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [modalShow, setModalShow] = React.useState(false);
  const userId = localStorage.getItem("UserId")
  const [userDetailModal, setUserDetailModal] = React.useState(false);

  let domNode = useClickOutside(() => {
    setOpen(false);
  });


  const cartLength = async () => {
    try{
        const { data } = await axios.get(``)
    }catch(err){
      console.log(err)
    }
  }


  return (
    <>
      <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
      <MyVerticallyCenteredModal
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
        <a href='https://www.facebook.com/Expertworks2021' target={"_blank"}  rel="noreferrer" style={{color : 'black'}}>
        <i class="fa-brands fa-square-facebook"></i>
        </a>
        
        <a href='https://www.instagram.com/expertworks2020/' target={"_blank"}  rel="noreferrer" style={{color : 'black'}}>
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
            <Link to={token ? "/allCou" : "/secondCourse"} >
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
