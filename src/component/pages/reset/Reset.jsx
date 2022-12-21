/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

const Reset = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState();
  const [password, setPassword] = useState();

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("token"));
  //   if (items) {
  //     setItems(items);
  //   }
  // }, []);

  const token = localStorage.getItem("resetToken");

  console.log("token", token);
  async function reset() {
    const temp = {
      passwordResetToken: token,
      password: password,
    };
    try {
      const url =
        "https://r-education-flyweis.herokuapp.com/user/password-reset";
      const response = await axios.post(url, temp, token);
      console.log("response", response.data);

      navigate("/");
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
                  hidden
                  type="tel"
                  placeholder="Enter Your Phone"
                  value={token}
                  //onChange={(e) => setToken(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div className="loginbtn">
                  <button onClick={reset}>Change Password</button>
                </div>

                <span onClick={() => navigate("/emailVerify")}>
                  forget Password
                </span>

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

export default Reset;
