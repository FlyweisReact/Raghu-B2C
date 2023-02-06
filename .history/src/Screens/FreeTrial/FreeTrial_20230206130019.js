/** @format */

import React from "react";
import Header from "../../component/Header/Header";
import "./FreeTrial.css";

const FreeTrial = () => {
    const []
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
          <button>START FREE TRIAL</button>
        </form>
      </div>

      <div className="FreeTriallastbanner"></div>
    </>
  );
};

export default FreeTrial;
