/** @format */

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../../Header/Header";
import "./FreeTrial.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Alert } from "react-bootstrap";

const FreeTrial = () => {
  const [show, setShow] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [inputType, setInputType] = useState(false);

  const navigate = useNavigate();

  const Verifyotp = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/verify",
        { otp }
      );
      alert("Login SuccessFully");
      localStorage.setItem("token", data.token);
      localStorage.setItem("UserId", data.user._id);
      setShow(false);
      navigate("/secondCourse");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      try {
        const { data } = await axios.post(
          "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/register",
          {
            first,
            last,
            email,
            mobile,
            password,
          }
        );
        alert(`Your Otp is ${data.otp}`);
        setShow(true);
      } catch (err) {
        console.log(err);
      }
    } else {
      setPasswordError(true);
      console.log("dasdas");
    }
  };

  return (
    <>
      {/* <Header /> */}
      <Header />
      <div className="FreeTrialBanner"></div>
      <div className="FreeTrialForm">
        <form onSubmit={registerUser}>
          <p className="head">Enter Your Details</p>
          {passwordError ? (
            <Alert variant="danger">
              The password confirmation does not match
            </Alert>
          ) : (
            ""
          )}
          <div className="MainInput">
            <p>First Name</p>
            <input
              type="text"
              onChange={(e) => setFirst(e.target.value)}
              required
            />
          </div>
          <div className="MainInput">
            <p>Last Name</p>
            <input
              type="text"
              onChange={(e) => setLast(e.target.value)}
              required
            />
          </div>
          <div className="MainInput">
            <p>Email Address</p>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="MainInput">
            <p>Phone Number </p>
            {/* <input
              type="tel"
              pattern="[0-9]{10}"
              onChange={(e) => setMobile(e.target.value)}
            /> */}
            <PhoneInput
              defaultCountry="IN"
              value={mobile}
              onChange={setMobile}
              maxLength={15}
              minLength={8}
              required
            />
          </div>
          <div className="MainInput">
            <p>Set Password </p>
            <div>
              
            </div>
            <input
              type={inputType ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {inputType ? (
              <i
                className="fa-solid fa-eye-slash"
                onClick={() => setInputType(false)}
              ></i>
            ) : (
              <i
                className="fa-solid fa-eye"
                onClick={() => setInputType(true)}
              ></i>
            )}
          </div>

          <div className="MainInput">
            <p>Confirm Password </p>
            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">START FREE TRIAL</button>
        </form>
      </div>
      <div className="FreeTriallastbanner"></div>

      {show ? (
        <div className="otpDiv">
          <form onSubmit={Verifyotp}>
            <input
              type="tel"
              pattern="[0-9]{4}"
              placeholder="Enter Your OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FreeTrial;
