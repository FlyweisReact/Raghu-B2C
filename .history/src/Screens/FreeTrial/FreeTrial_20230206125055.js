/** @format */

import React from "react";
import Header from "../../component/Header/Header";
import "./FreeTrial.css";

const FreeTrial = () => {
  return (
    <>
      <Header />
      <div className="FreeTrialBanner"></div>
      <div className="FreeTrialForm">
        <form>
        <p className="head"></p>
            <div className="MainInput">
                <p>First Name</p>
                <input type='text' />
            </div>
            <div className="MainInput">
                <p>Last Name</p>
                <input type='text' />
            </div>
            <div className="MainInput">
                <p>Email Address</p>
                <input type='email' />
            </div>
            <div className="MainInput">
                <p>Phone Number </p>
                <input type='tel' pattern="[0-9]{10}" />
            </div>
        </form>
      </div>
    </>
  );
};

export default FreeTrial;
