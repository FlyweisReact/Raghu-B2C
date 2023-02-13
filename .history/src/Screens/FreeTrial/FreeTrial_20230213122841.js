/** @format */

import axios from "axios";
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
    };

    document.addEventListener("mousedown" , maybeHandler) ;

    return() => {
      document.removeEventListener("mousedown" , maybeHandler)
    };

  })

  return domNode;
}

const FreeTrial = () => {
  const [show, setShow] = useState(false);
  const [ first , setFirst] = useState("")
  const [ last   , setLast   ] = useState("")
  const [email , setEmail  ] = useState("")
  const [mobile , setMobile ] = useState("")
  const [ password  , setPassword ] = useState("")

  const navigate = useNavigate()


  let domNode = useClickOutside ( () => {
    setShow(false)
  })

  const Verifyotp = async () => {
    setShow(false)
    navigate('/allCou')
    localStorage.setItem('token' , 'IamReactDeveloper')
    console.log(localStorage.getItem('token'))
  }

  const registerUser = async () => {
    try{
      const {data} = await axios.post("https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/register" , {
        first , last , email , mobile  , password
      })
      alert(`Your Otp is ${data.otp}`)
    }catch(err){
      console.log(err)
    }
  } 


  return (
    <>
      {/* <Header /> */}
      <Header />
      <div className="FreeTrialBanner"></div>
      <div className="FreeTrialForm">
        <form onSubmit={registerUser}>
          <p className="head">Enter Your Details</p>
          <div className="MainInput">
            <p>First Name</p>
            <input type="text" onChange={(e) => setFirst(e.target.value)} />
          </div>
          <div className="MainInput">
            <p>Last Name</p>
            <input type="text" onChange={(e) => setFirst(e.target.value)} />
          </div>
          <div className="MainInput">
            <p>Email Address</p>
            <input type="email" onChange={(e) => setFirst(e.target.value)} />
          </div>
          <div className="MainInput">
            <p>Phone Number </p>
            <input type="tel" pattern="[0-9]{10}" onChange={(e) => setFirst(e.target.value)} />
          </div>
          <button onClick={() => setShow(true)} type="button">
            START FREE TRIAL
          </button>
        </form>
      </div>
      <div className="FreeTriallastbanner"></div>

      {show ? (
        <div className="otpDiv" useRef={domNode}>
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
