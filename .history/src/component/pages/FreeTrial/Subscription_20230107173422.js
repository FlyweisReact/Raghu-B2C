import React from "react";
import Topbar from "../../navigation/Topbar";
import "./FreeTrial.css";

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