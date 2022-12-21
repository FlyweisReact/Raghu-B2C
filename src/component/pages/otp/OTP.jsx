/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

const OTP = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState();
  async function verifyOtp() {
    const temp = {
      userIdentifier: email,
      otp: otp,
    };
    try {
      const url =
        "https://r-education-flyweis.herokuapp.com/user/forgot-password-otp";
      const response = await axios.post(url, temp);
      console.log("response", response.data);

      localStorage.setItem("resetToken", response.data.passwordResetToken);
      navigate("/reset");
    } catch (err) {
      console.log("error", err);
    }
  }
  return (
    <>
      <div className="login_main_container">
        <div className="login_container">
          <div className="nav">
            <div className="nav_items_containers">
              <div className="logo">
                <Link to="/" className="links">
                  <h1>LOGO</h1>
                </Link>
              </div>

              <div className="buttons">
                <button>LOGIN</button>
                <button>LOGIN WITH FREE</button>
              </div>
            </div>

            <div className="loginForm">
              <div action="" className="inputForm">
                <div className="logo">
                  <h1>WELLCOME</h1>
                </div>

                <input
                  type="tel"
                  placeholder="Enter Your Phone"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />

                <div className="loginbtn">
                  <button onClick={verifyOtp}>Verify</button>
                </div>

                {/* <span onClick={() => navigate("/emailVerify")}>
                  forget Password
                </span> */}

                <div className="create">
                  <Link to="/create-acount" className="links">
                    <button>Create an account</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTP;
