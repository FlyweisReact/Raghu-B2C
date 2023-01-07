/** @format */

import React from "react";
import Topbar from "../../navigation/Topbar";
import img from "../../../images/Group 833.png";
import './FreeTrial.css'

const FreeTrial = () => {
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

      <div className="Trialheader">
        <img src={img} alt="" />
      </div>
      <div className="TrialForm">
        
      </div>
    </>
  );
};

export default FreeTrial;
