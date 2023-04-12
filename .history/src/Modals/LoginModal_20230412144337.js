/** @format */

import { useNavigate } from "react-router";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { useState } from "react";

function LoginModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [forget, setForget] = useState(false);
  const [otpModal, setOtpModal] = useState(false);
  const [ defaultModal , setDefaultModal ] = useState("")

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/sign",
        { email, password }
      );
      localStorage.setItem("token", data.token);
      localStorage.setItem("UserId", data.user._id);
      props.onHide();
      alert("Logged in Successfully");
      navigate("/secondCourse");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{ padding: "0px" }}>
          <div className="loginDiv"></div>
        {
          de
        }
          {forget ? (
            <>
              <div className="loginDiv2">
                <h1>Password Reset</h1>
                <h6 style={{ textAlign: "center" }}>
                  You will recive otp on registered email
                </h6>
              </div>
              <div className="loginDiv3">
                <form>
                  <div className="mb-3  ">
                    <p>Email Address</p>
                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setOtpModal(true);
                    }}
                  >
                    Send
                  </button>
                </form>
              </div>
            </>
          ) : (
            <>
              <div className="loginDiv2">
                <h1>Enter Your Details</h1>
              </div>
              <div className="loginDiv3">
                <form onSubmit={loginUser}>
                  <div className="mb-3  ">
                    <p>Email Address</p>
                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <p>Password</p>
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <p
                      style={{
                        color: "blue",
                        fontSize: "14px",
                        cursor: "pointer",
                      }}
                      onClick={() => setForget(true)}
                    >
                      Forgot Password
                    </p>
                  </div>
                  <button type="submit">Login</button>
                </form>
              </div>
            </>
          )}

          {otpModal ? (
            <>
              <div className="loginDiv2">
                <h1>Password Reset</h1>
                <h6 style={{ textAlign: "center" }}>
                  You will recive otp on registered email
                </h6>
              </div>
              <div className="loginDiv3">
                <form>
                  <div className="mb-3  ">
                    <p>Email Address</p>
                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button type="button">Send</button>
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

export default LoginModal;
