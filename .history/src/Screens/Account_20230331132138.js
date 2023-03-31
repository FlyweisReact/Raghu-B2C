/** @format */

import React, { useState } from "react";
import img from "../images/cart 5.png";
import { useNavigate } from "react-router";
import axios from "axios";

const Account = () => {
  const navigate = useNavigate();

  const [ data , setData ] = useState([])

  const fetchData = async () => {
    try{
        const { data } = await axios.get(``)
    }catch(e) { 
        console.log(e)
    }
  }

  function GoBack() {
    navigate(-1);
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
        <div className="main">
          <div className="left">
            <button className="head"> Java </button>
          </div>
        </div>
        <div className="main">
          <div className="left">
            <button className="head"> Java </button>
          </div>
        </div>
        <div className="main">
          <div className="left">
            <button className="head"> Java </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Account;