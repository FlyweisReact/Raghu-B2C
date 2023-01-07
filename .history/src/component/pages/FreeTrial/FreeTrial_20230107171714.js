/** @format */

import React from "react";
import Topbar from "../../navigation/Topbar";
import img from "../../../images/Group 833.png";
import "./FreeTrial.css";

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
        <div>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div>
          <input type="text" placeholder="User Name" />
          <input type="text" placeholder="Email" />
        </div>
        <div>
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm Password" />
        </div>
        <div style={{justifyContent : 'flex-start' , marginLeft : '19.3%'}}>
          <input type="text" placeholder="Phone Number" />
          {/* <input type="text" placeholder="Confirm Password" /> */}
        </div>
        <button>SUBMIT</button>
      </div>
    </>
  );
};

export default FreeTrial;
