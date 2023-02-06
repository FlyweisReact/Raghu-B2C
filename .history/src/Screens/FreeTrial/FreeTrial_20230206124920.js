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
            <div className="MainInput">
                <p>First Name</p>
            </div>
        </form>
      </div>
    </>
  );
};

export default FreeTrial;
