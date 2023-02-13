/** @format */

import React from "react";
import img from "../../images/download.jpg";
// import "./FreeTrial.css";
import Header from "../../component/Header/Header";

const ThankYOu = () => {
  return (
    <>
      {/* <div
        className="courses_main_container"
        style={{ backgroundColor: "black" }}
      >
        <div className="course_header_content">
          <div className="navbarss">
            <Topbar />
          </div>
        </div>
      </div> */}
        <Header />

      <img
        src={img}
        alt=""
        style={{ marginTop: "2%", width: "200px" }}
        className="ok-Image"
      />
      <h1 style={{ marginTop: "2%", fontWeight: "bold" , textAlign : 'center' }}>
        Subscription successful
      </h1>
      <p style={{ fontSize: "2rem"  ,textAlign : 'center'}}>
        Thankyou for purchasing our product! You will receive an email shortly.
        <br />
        Happy Learning!
      </p>
      <div className="twoBtns">
        <button className="btn2"> Continue Shopping</button>
        <button className="btn3"> Manage Order</button>
      </div>
    </>
  );
};

export default ThankYOu;
