/** @format */

import React, { useEffect, useState } from "react";
import img from "../images/cart 5.png";
import { useNavigate } from "react-router";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [levels, setLevels] = useState([]);
  const userId = localStorage.getItem('userId')

  const fetchData = async () => {
 
  };

  useEffect(() => {
    fetchData();
  }, []);

  function GoBack() {
    navigate(-1);
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{ padding: "0px" }}>
          <div className="LevelModal">
            {levels?.map((item, index) => (
              <Link to='/purachase-course' key={index} >
              <p  > {item.title} </p>
              </Link>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div className="PurachaseCourse">
        <button onClick={() => GoBack()}>Back</button>
      </div>

      <div className="PurachaseCourse1">
        <div className="bigOne">
          <img src={img} alt="" onClick={() => navigate("/cart")} />
          <div className="empty"></div>
        </div>
      </div>

      <div className="PurachaseCourse2">
        {data?.courseId?.map((item, index) => (
          <div
            className="main"
            key={index}
            onClick={() => {
              setLevels(item.course?.levels);
              setModalShow(true);
            }}
          >
            <div className="left">
              <button className="head"> {item.course?.title} </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Account;
