/** @format */

import React, { useState } from "react";
import img from "../images/cart 5.png";
import img1 from "../images/play-button-icon-png-18921 10.png";
import Modal from "react-bootstrap/Modal";

const AccountDetail = () => {
  const [open, setOpen] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  function FullVideo(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{ padding: "0" }}>
      
          <div className="VideoModal">
            <video controls>
              <source
                src="https://d3s24np0er9fug.cloudfront.net/phase1/public/LMS%20New.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  const data = [
    {
      title : 'Session 1'
    },
    {
      title : 'Session 1'
    },
    {
      title : 'Session 1'
    },
    {
      title : 'Session 1'
    },
  ]

  return (
    <>
      <FullVideo show={modalShow} onHide={() => setModalShow(false)} />
      <div className="CourseDetail">
        <p className="head">Java Beginner Sessions</p>
        <ul>
          <li>Introduction</li>
          <li>Session 1</li>
          <li>Session 2</li>
          <li>Session 3</li>
          <li>Session 4</li>
          <li>Session 5</li>
          <li>Session 6</li>
          <li>Session 7</li>
          <li>Session 8</li>
          <li>Session 9</li>
        </ul>
        <button onClick={() => setOpen(!open)}>
          Documents <i className="fa-sharp fa-solid fa-caret-down"></i>
        </button>
        {open ? (
          <div className="document">
            <p>Mini Projects</p>
            <p>Assignments</p>
            <p>Q&A</p>
            <p>Reference Links</p>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="particualCourseHeader">
        <div></div>
        <p>Java Beginner</p>
        <div className="bigOne">
          <img src={img} alt="" />
          <div className="empty"></div>
        </div>
      </div>

      <div className="courseDeatil2">
        <p>Introduction Video</p>
        <img src={img1} alt="" />
      </div>

      <div className="courseDetail3">
        <div className="main" onClick={() => setModalShow(true)}>
          <p>Session 1</p>
          <img src={img1} alt="" />
        </div>
        <div className="main">
          <p>Session 2</p>
          <img src={img1} alt="" />
        </div>
        <div className="main">
          <p>Session 3</p>
          <img src={img1} alt="" />
        </div>
        <div className="main">
          <p>Session 4</p>
          <img src={img1} alt="" />
        </div>
        <div className="main">
          <p>Session 5</p>
          <img src={img1} alt="" />
        </div>
        <div className="main">
          <p>Session 6</p>
          <img src={img1} alt="" />
        </div>
        <div className="main">
          <p>Session 7</p>
          <img src={img1} alt="" />
        </div>
        <div className="main">
          <p>Session 8</p>
          <img src={img1} alt="" />
        </div>
        <div className="main">
          <p>Session 9</p>
          <img src={img1} alt="" />
        </div>
      </div>
    </>
  );
};

export default AccountDetail;