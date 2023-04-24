/** @format */

import { useNavigate } from "react-router";
import axios from "axios";
import { Alert, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";

function EditProfileModal(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{ padding: "0px" }}>
          <div className="loginDiv">
            <i className="fa-solid fa-x" onClick={() => props.onHide()}></i>
          </div>
      
              <div className="loginDiv2">
                <h1>Enter Your Details</h1>
              </div>
              <div className="loginDiv3">
                <form >
                  <div className="mb-3  ">
                    <p>Email Address</p>
                    <input
                      type="email"
                    />
                  </div>
                  <div className="mb-3">
                    <p>Password</p>
                    <input
                      type="password"
                    />
                    <p
                      style={{
                        color: "blue",
                        fontSize: "14px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setDefaultModal(false);
                        setForget(true);
                      }}
                    >
                      Forgot Password !
                    </p>
                  </div>
                  <button type="submit">Login</button>
                </form>
              </div>
            </>
          ) : (
            ""
          )}
          {forget ? (
            <>
              <div className="loginDiv2">
                <h1> Reset Password </h1>
                <h6 style={{ textAlign: "center" }}>
                  Enter Registered Email Address
                </h6>
              </div>
              <div className="loginDiv3">
                <form onSubmit={verifyEmail}>
                  <div className="mb-3  ">
                    <p>Email Address</p>
                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button type="submit">Send</button>
                </form>
              </div>
            </>
          ) : (
            ""
          )}

          {otpModal ? (
            <>
              <div className="loginDiv2">
                <h1>Enter OTP</h1>
                <h6 style={{ textAlign: "center" }}>
                  Enter Given OTP on registered email
                </h6>
              </div>
              <div className="loginDiv3">
                <form onSubmit={OtpVerify}>
                  <div className="mb-3  ">
                    <p>OTP</p>
                    <input
                      type="number"
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </>
          ) : (
            ""
          )}

          {resetModal ? (
            <>
              
              <div className="loginDiv2">
                <h1>Reset Password</h1>
              </div>
              {forgotError ? (
                <Alert variant="danger">Passwords Do Not Match !</Alert>
              ) : (
                ""
              )}
              <div className="loginDiv3">
                <form onSubmit={updatePassword}>
                  <div className="mb-3  ">
                    <p>Password</p>
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3  ">
                    <p>Confirm Password</p>
                    <input
                      type="password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </>
          ) : (
            ""
          )}

          <div className="loginDiv4"></div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditProfileModal;
