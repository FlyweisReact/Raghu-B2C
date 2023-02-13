/** @format */

import React, { useState , useRef , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../images/logo.png";
import "./Header.css";
import CartImg from "../images/cart 5.png";
import img1 from "../images/person 1.jpg";
import {Button , Modal} from 'react-bootstrap'



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
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



const Header = () => {
  const [open, setOpen] = useState(false);
  const [userModal, setuserModal] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [modalShow, setModalShow] = React.useState(false);

  let domNode = useClickOutside(() => {
    setOpen(false);
    setuserModal(false);
  });


  function SignOut() {
    localStorage.removeItem("token");
    setuserModal(false);
  }


  



  return (
    <>
       <LoginModal
        show={modalShow}
        onHide={() => setModalShow(false)}
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

        <div className='right'>
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-square-twitter"></i>
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
                    onClick={() => setuserModal(!userModal)}
                  />
                </li>
              </>
            ) : (
              <>
                <li style={{ fontWeight: "bold" }} className="normalList" onClick={() => setModalShow(true)}>
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
            <i class="fa-solid fa-bars" onClick={() => setOpen(!open)} style={{cursor : 'pointer'}}></i>
          </div>
        </div>
      </div>

      {open ? (
        <div className="sideMenuRes" style={{ marginLeft: "10px" }} ref={domNode}>
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
                    style={{width : '80px'}}
                    onClick={() => setuserModal(!userModal)}
                  />
                </li>
              </>
            ) : (
              <>
                <li style={{ fontWeight: "bold" }} className="normalList" onClick={() => setModalShow(true)}>
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
                    style={{width : '80px'}}
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
              </>
            )}
          </ul>
        </div>
      )}

      {userModal ? (
        <div className="Userinfo" ref={domNode}>
          <button type="button" onClick={() => navigate("/NewCoursePage")}>
            My Account
          </button>
          <button type="button" onClick={() => navigate("/cart")}>
            Go to Cart
          </button>
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
