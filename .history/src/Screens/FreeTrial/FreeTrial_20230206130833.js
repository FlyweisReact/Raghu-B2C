/** @format */

import React, { useState } from "react";
import Header from "../../component/Header/Header";
import "./FreeTrial.css";

const FreeTrial = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Header />
      <div className="FreeTrialBanner"></div>
      <div className="FreeTrialForm">
        <form>
          <p className="head">Enter Your Details</p>
          <div className="MainInput">
            <p>First Name</p>
            <input type="text" />
          </div>
          <div className="MainInput">
            <p>Last Name</p>
            <input type="text" />
          </div>
          <div className="MainInput">
            <p>Email Address</p>
            <input type="email" />
          </div>
          <div className="MainInput">
            <p>Phone Number </p>
            <input type="tel" pattern="[0-9]{10}" />
          </div>
          <button onClick={() => setShow(true)}>START FREE TRIAL</button>
        </form>
      </div>
      <div className="FreeTriallastbanner"></div>

      {show ? (
        <div className="otpDiv">
          <form>
            <input type="tel" pattern="[0-9]{4}" placeholder="Enter Your OTP" />
            <br />
            <button>Submit</button>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FreeTrial;
