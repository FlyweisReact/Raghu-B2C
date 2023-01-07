/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";
import img from '../../../images/logo.png'

const Forgot = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  //   const [password, setPassword] = useState();
  async function emailVerify() {
    const temp = {
      userIdentifier: email,
    };
    try {
      const url =
        "https://r-education-flyweis.herokuapp.com/user/forgot-password";
      const response = await axios.post(url, temp);
      console.log("response", response.data);

      navigate("/otp");
    } catch (err) {
      console.log("error", err);
    }
  }
  return (
    <>
      <div className="bg-Img"></div>
      <div className="login_main_container">
        <div className="login_container">
          <div className="nav">
            <div className="nav_items_containers">
              <div className="logo">
              <Link to="/" className="links">
                  <img src={img } alt='' style={{width : '200px'}} />
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
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <div className="loginbtn">
                  <button onClick={emailVerify}>Send OTP</button>
                </div>

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

export default Forgot;
