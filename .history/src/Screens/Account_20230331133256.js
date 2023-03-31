/** @format */

import React, { useEffect, useState } from "react";
import img from "../images/cart 5.png";
import { useNavigate } from "react-router";
import axios from "axios";
import { Modal } from "react-bootstrap";

const Account = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [ levels  , setLevels ] = useState([])

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/user/641ae82ccbf0088ed19942fb`
      );
      setData(data.result);
    } catch (e) {
      console.log(e);
    }
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
        <Modal.Body style={{padding : '0px'}}>
            <div className="LevelModal">
            {levels?.}
                <p>BEGINNER</p>
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
          <div className="main" key={index} onClick={() => {
            setLevels(item.course?.levels)
            setModalShow(true)}}>
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
