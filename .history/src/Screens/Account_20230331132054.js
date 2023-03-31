/** @format */

import React, { useState } from "react";
import img from "../images/cart 5.png";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();

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
