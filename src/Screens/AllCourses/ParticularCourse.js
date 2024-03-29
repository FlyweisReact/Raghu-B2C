/** @format */

import React, { useCallback, useEffect, useState } from "react";
import img from "../../images/cart 5.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import LoginModal from "../../Modals/LoginModal";
import axios from "axios";

const ParticularCourse = () => {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);
  const [CourseTitle, setCourseTitle] = useState("");
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

  const fetch = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/study/${id}`
      );
      setData(data);
      setCourseTitle(data.title);
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <>
      <LoginModal show={modalShow} onHide={() => setModalShow(false)} />

      <div className="particualCourse">
        <button onClick={() => GoBack()}>Back</button>
        <p>ABOUT </p>
        <p className="desc">{data?.about}</p>
      </div>

      <div className="particualCourseHeader">
        <div>
          <i className="fa-solid fa-bars" onClick={() => handleShow()}></i>
        </div>
        <p> {CourseTitle} </p>
        <div className="bigOne">
          <img src={img} alt="" onClick={() => navigate("/cart")} />
          <div className="empty"></div>
        </div>
      </div>

      <div className="ParticularCourseThree">
        <div className="main">
          <div className="left">
            <button className="head" onClick={() => setShow(!show)}>
              {CourseTitle}
            </button>
          </div>

          {show ? (
            <div className="right">
              {data?.levels?.map((i, index) => (
                <div className="upper" key={index}>
                  <div></div>
                  <Link to={`/course/detail/${data?._id}/${i._id}`}>
                    <p className="head" style={{textTransform : 'uppercase'}}>{i.level}</p>
                  </Link>
                  <div>
                    <i className="fa-solid fa-heart"> </i>
                    <img src={img} alt="" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="bottom">
          <p>Full Course</p>
          <div>
            <i
              className="fa-solid fa-heart"
              onClick={() => openLoginModal()}
              style={{ cursor: "pointer" }}
            >
              {" "}
            </i>
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
            <p>ABOUT</p>
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
