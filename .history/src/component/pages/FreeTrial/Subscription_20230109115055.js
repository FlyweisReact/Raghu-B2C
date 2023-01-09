/** @format */

import React from "react";
import Topbar from "../../navigation/Topbar";
import "./FreeTrial.css";
import img from "../../../images/Main copy 2.png";
import img2 from "../../../images/Main copy 1.png";
import { useNavigate } from "react-router";

const Subscription = () => {

  const navigate = useNavigate()

  return (
    <>
      <div
        className="courses_main_container"
        style={{ backgroundColor: "black" }}
      >
        <div className="course_header_content">
          <div className="navbarss">
            <Topbar />
          </div>
        </div>
      </div>

      <h1
        style={{
          fontWeight: "bold",
          marginTop: "1%",
          fontSize: "3.5rem",
          textAlign: "center",
        }}
      >
        SUBSCRIPTIONS
      </h1>
      <p
        style={{ textAlign: "center", marginTop: "30px", marginBottom: "30px" , fontSize : '2rem' }}
      >
        Experience the best E-learning experience with the best affordable and
        tailored packages.
      </p>

      <div className="subsImages">
        <div className="subsDIV"></div>
        <div className="Images">
          <img src={img} alt="" onClick={() => navigate('billing')} />
          <img src={img2} alt="" />
        </div>
      </div>
    </>
  );
};

export default Subscription;
