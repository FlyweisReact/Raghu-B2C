import React, { useState } from "react";
import img from "../images/cart 5.png";
import img1 from "../images/play-button-icon-png-18921 10.png";
import Modal from 'react-bootstrap/Modal';

const AccountDetail = () => {
    const [open, setOpen] = useState(false);


    function FullVideo(props) {
      return (
        <Modal
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
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
        </Modal>
      );
    }

    return (
      <>  
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
          <div className="main">
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

export default AccountDetail