import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import "./create.scss";

const SignUpOtp = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState();
  //   const [confirm, setConfirm] = useState();
  async function confirmSignUp() {
    try {
      const data = {
        userIdentifier: email,
        otp: otp,
      };
      const url = "https://r-education-flyweis.herokuapp.com/user/signup-otp";
      const response = await axios.post(url, data);
      console.log("response", response);
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
                  <h1>Create Account</h1>
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
                    placeholder="OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
                <div className="fastname_lastname">
                  {/* <input
                    type="text"
                    placeholder="Confirm Password*"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                  /> */}
                  {/* <input type="text" placeholder="Confirm Email" /> */}
                </div>
                {/* <div className="fastname_lastname">
                  <input type="text" placeholder="Residence" />
                  <input type="text" placeholder="Profession" />
                </div> */}

                <div className="buttn_div">
                  <div className="loginbtn">
                    <button onClick={confirmSignUp}>Sign Up Now</button>
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

export default SignUpOtp;
