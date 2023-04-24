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
            <i className="fa-solid fa-x" onClick={() => ponHide()}></rops.i>
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
                  
                    >
                      Forgot Password !
                    </p>
                  </div>
                  <button type="submit">Login</button>
                </form>
              </div>
       
             
          <div className="loginDiv4"></div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditProfileModal;
