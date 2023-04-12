import { useNavigate } from "react-router";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

function For(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{ padding: "0px" }}>
          <div className="loginDiv"></div>
          <div className="loginDiv2">
            <h1>Enter Your Details</h1>
          </div>
          <div className="loginDiv3">
            <form onSubmit={loginUser}>
              <div className="mb-3  ">
                <p>Email Address</p>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <p>Password</p>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
          <Link to=''>Forgot Password</Link>

              </div>
              <button type="submit">Login</button>
            </form>
          </div>
          <div className="loginDiv4">  
          </div>
        </Modal.Body>
      </Modal>
    );
  }


  export default LoginModal