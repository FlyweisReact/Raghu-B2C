/** @format */

import React, { useState } from "react";
import img from "../../images/cart 5.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import LoginModal from "../../Modals/LoginModal";

const ParticularCourse = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [ modalShow , setModalShow ] = useState(false)

  const handleClose = () => setOpen(false);
  const handleShow = () => setOpen(true);
  const navigate = useNavigate();

  function GoBack() {
    navigate(-1);
  }

  function openLoginModal () {
    alert('Please Login to Continue')
  }

  return (
    <>
    <LoginModal show={modalShow} onHide={() => setModalShow(false)} />


      <div className="particualCourse">
        <button onClick={() => GoBack()}>Back</button>
        <p>ABOUT JAVA</p>
        <p className="desc">
          Let us take you to the world of one of the top programming languages,
          JAVA! This course is designed by an experienced JAVA programmer to
          provide you the best real-time content. This course will help you
          understand everything needed to excel in this programming language.
          All the best!
        </p>
      </div>

      <div className="particualCourseHeader">
        <div>
          <i className="fa-solid fa-bars" onClick={() => handleShow()}></i>
        </div>
        <p>JAVA</p>
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

                <div>
                  <i className="fa-solid fa-heart"> </i>
                  <img src={img} alt="" />
                </div>
              </div>

              <div className="upper">
                <div></div>
                <Link to="/course/detail">
                  <p className="head">INTERMEDIATE</p>
                </Link>

                <div>
                  <i className="fa-solid fa-heart"> </i>
                  <img src={img} alt="" />
                </div>
              </div>

              <div className="upper">
                <div></div>
                <Link to="/course/detail">
                  <p className="head">EXPERT</p>
                </Link>

                <div>
                  <i className="fa-solid fa-heart"> </i>
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="bottom">
          <p>Full Course</p>
          <div>
            <i className="fa-solid fa-heart"> </i>
            <img src={img} alt="" onClick={() => navigate("/cart")} />
          </div>
        </div>
      </div>

      {/* OffCanvas */}
      <Offcanvas show={open} onHide={handleClose}>
        <Offcanvas.Body
          style={{
            backgroundImage: "linear-gradient(#f3c485, #c292aa, #8b69c9)",
          }}
        >
          <div className="particualCourse2">
            <button>Back</button>
            <p>ABOUT JAVA</p>
            <p className="desc">
              Let us take you to the world of one of the top programming
              languages, JAVA! This course is designed by an experienced JAVA
              programmer to provide you the best real-time content. This course
              will help you understand everything needed to excel in this
              programming language. All the best!
            </p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ParticularCourse;
