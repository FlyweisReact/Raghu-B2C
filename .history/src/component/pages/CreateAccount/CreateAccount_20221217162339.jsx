import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

import "./create.scss";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();
  async function signUp() {
    try {
      const data = {
        userIdentifier: email,
        password: password,
        confirmPassword: confirm,
      };
      const url = "https://r-education-flyweis.herokuapp.com/user/signup";
      const response = await axios.post(url, data);
      console.log("response", response);
      navigate("/signUpOtp");
    } catch (err) {
      console.log("error", err);
    }
  }
  return (
    <>
      <div className="login_main_container">
        <div className="clogin_container">
          <div className="nav">
            <div className="nav_items_containerss">
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
              <div className="create_account_main_container">
                <div className="Create_account_header">
                  <h1 style={{textAlign : 'center'}}>Create Account</h1>
                  <p style={{ textAlign: "center"  , color : 'white'}}>
                    Welcome to Expert-Works! A top cloud-based e-learning
                    platform specially developed for professionals looking for
                    self-paced learning models. Sign Up Now!
                  </p>
                  <p style={{ textAlign: "center" }}>
                    You are about to join a vibrant community of learners who
                    are committed to achieving their goals and reaching their
                    full potential. Join us today to access our vast library of
                    courses, interactive assignments, projects, and personalized
                    learning plans.
                  </p>
                  <p style={{ textAlign: "center" }}>
                    Sign up now to take your education to the next level. You
                    can get the most out of Expert-works quickly and easily
                    thanks to our simple interface and helpful customer service
                    team. So, don't put it off any longer - sign up now and
                    begin achieving your learning goals!
                  </p>
                </div>

                <div className="fastname_lastname">
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="fastname_lastname">
                  <input
                    type="text"
                    placeholder="Confirm Password*"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                  />
                  {/* <input type="text" placeholder="Confirm Email" /> */}
                </div>
                {/* <div className="fastname_lastname">
                  <input type="text" placeholder="Residence" />
                  <input type="text" placeholder="Profession" />
                </div> */}

                <div className="buttn_div">
                  <div className="loginbtn">
                    <button onClick={signUp}>Send Otp</button>
                  </div>
                  <div className="loginbtn">
                    <Link to="/login">
                      <button>Login</button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* <form action='createloginFormss'> */}
              {/* <div className="logo">
                                    <h1>Create An Account</h1>
                                </div>

                                <div className="fastname_lastname">

                                        <input type="text" placeholder='Fast Name *'/>
                                        <input type="text" placeholder='Last Name' />
                                    

                                </div> */}
              {/* <div className="fastname_lastname">

                                        <input type="text" placeholder='Enter Your Email'/>
                                        <input type="text" placeholder='Confirm Email' />
                                    

                                </div> */}
              {/* <div className="fastname_lastname">

                                        <input type="text" placeholder='Residence'/>
                                        <input type="text" placeholder='Profession' />
                                    

                                </div> */}

              {/*                                
                                <div className="loginbtn">
                                  <button >Join Now</button>


                                </div>
                                <div className="loginbtn2">

                                  <Link to='/login'>
                                    <button >Login</button>
                                  
                                  </Link>
                                 


                                </div> */}

              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
