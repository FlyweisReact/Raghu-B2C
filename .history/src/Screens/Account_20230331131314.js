/** @format */

import React, { useState } from "react";
import img from '../images/cart 5.png'
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import LoginModal from "../Modals/LoginModal";

const Account = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setOpen(false);
  const handleShow = () => setOpen(true);
  const navigate = useNavigate();

  function GoBack() {
    navigate(-1);
  }

  function openLoginModal() {
    alert("Please Login to Continue");
    setModalShow(true);
  }

  return (
    <>

      <div className="particualCourse">
        <button onClick={() => GoBack()}>Back</button>
      </div>

      <div className="particualCourseHeader">
        <div>
          <i className="fa-solid fa-bars" onClick={() => handleShow()}></i>
        </div>
        <div className="bigOne">
          <img src={img} alt="" onClick={() => navigate("/cart")} />
          <div className="empty"></div>
        </div>
      </div>

      <div className="ParticularCourseThree">
        <div className="main">
          <div className="left">
            <button className="head" onClick={() => setShow(!show)}>
              {" "}
              Java{" "}
            </button>
          </div>

          {show ? (
            <div className="right">
              <div className="upper">
                <div></div>
                <Link to="/course/detail">
                  <p className="head">BEGINNER</p>
                </Link>
              </div>

              <div className="upper">
                <div></div>
                <Link to="/course/detail">
                  <p className="head">INTERMEDIATE</p>
                </Link>
              </div>

              <div className="upper">
                <div></div>
                <Link to="/course/detail">
                  <p className="head">EXPERT</p>
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="bottom">
          <p>Full Course</p>
        </div>
      </div>


    </>
  );
};
export default Account;
