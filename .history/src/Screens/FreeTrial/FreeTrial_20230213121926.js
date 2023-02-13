/** @format */

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../../Header/Header";
// import Header from "../../component/Header/Header";
import "./FreeTrial.css";


let useClickOutside = (handler) => {
  let domNode = useRef()

  useEffect(() => {
    let maybeHandler = (event) => {
      if(!domNode.current?.contains(event.target)){
        handler()
      }
    }

    document.addEventListener("mousedown" , maybeHandler) ;
  })
}

const FreeTrial = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate()

  const Verifyotp = async () => {
    setShow(false)
    navigate('/allCou')
    localStorage.setItem('token' , 'IamReactDeveloper')
    console.log(localStorage.getItem('token'))
  }

  // const register


  return (
    <>
      {/* <Header /> */}
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
          <button onClick={() => setShow(true)} type="button">
            START FREE TRIAL
          </button>
        </form>
      </div>
      <div className="FreeTriallastbanner"></div>

      {show ? (
        <div className="otpDiv">
          <form>
            <input type="tel" pattern="[0-9]{4}" placeholder="Enter Your OTP" />
            <br />
            <button type="button" onClick={() => Verifyotp()}>
              Submit
            </button>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FreeTrial;
