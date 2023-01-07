import React from "react";
import Topbar from "../../navigation/Topbar";
import "./FreeTrial.css";
import img from "../../../images/Main copy 2.png";
import img2 from "../../img/New/Main copy 1.png";

const Subscription = () => {
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

      <div className="subsImages">
        <div className="subsDIV"></div>
        <img src={img} alt=""  />
        <img src={img2} alt=""  />
      </div>
    </>
  )
}

export default Subscription