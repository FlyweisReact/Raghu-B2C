/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

import "./login.scss";
import img from '../../../images/logo.png'

const Login = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState();
  const [password, setPassword] = useState();
  async function login() {
    const temp = {
      userIdentifier: number,
      password: password,
    };
    try {
      // const url = "https://r-education-flyweis.herokuapp.com/user/login";
      // const response = await axios.post(url, temp);
      // console.log("response", response.data);

      // localStorage.setItem("token", response.data.data.token);
      navigate("/home");
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
                  <h1 style={{ textAlign: "center" , fontSize : '4rem'  }}>WELCOME</h1>
               
                </div>

                <input
                  type="text"
                  placeholder="Email or Phone"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div className="loginbtn">
                  <button onClick={login} style={{box-shadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>LOG IN</button>
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

export default Login;
