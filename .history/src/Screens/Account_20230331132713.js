/** @format */

import React, { useEffect, useState } from "react";
import img from "../images/cart 5.png";
import { useNavigate } from "react-router";
import axios from "axios";
import { Modal  } from "react-bootstrap"; 


const Account = () => {
  const navigate = useNavigate();
  const [ data , setData ] = useState([])


  const fetchData = async () => {
    try{
        const { data } = await axios.get(`https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/user/641ae82ccbf0088ed19942fb`)
        setData(data.result)
    }catch(e) { 
        console.log(e)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  function GoBack() {
    navigate(-1);
  }


  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
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
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
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
      {data?.courseId?.map((item , index ) => (
        <div className="main" key={index}>
          <div className="left">
            <button className="head"> {item.course?.title}  </button>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};
export default Account;
