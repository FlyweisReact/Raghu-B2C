/** @format */

import { useNavigate } from "react-router";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";

function LoginModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [forget, setForget] = useState(false);
  const [otpModal, setOtpModal] = useState(false);
  const [defaultModal, setDefaultModal] = useState(true);
  const [resetModal, setResetModal] = useState(false);

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

  useEffect(() => {
    if (props.onHide) {
      setDefaultModal(true);
      setOtpModal(false);
      setForget(false);
      setResetModal(false)
    }
  }, [props.onHide]);

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
          {defaultModal ? (
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
                      onClick={() => {
                        setDefaultModal(false);
                        setForget(true);
                      }}
                    >
                      Forgot Password ?
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
                  You will recive otp on registered email
                </h6>
              </div>
              <div className="loginDiv3">
                <form>
                  <div className="mb-3  ">
                    <p>Email Address</p>
                    <input
                      type="email"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setDefaultModal(false);
                      setForget(false);
                      setOtpModal(true);
                    }}
                  >
                    Send
                  </button>
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
                <form>
                  <div className="mb-3  ">
                    <p>OTP</p>
                    <input type="tel" pattern="[0-9]{4}" />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setDefaultModal(false);
                      setForget(false);
                      setOtpModal(false);
                      setResetModal(true);
                    }}
                  >
                    Submit
                  </button>
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
              <div className="loginDiv3">
                <form>
                  <div className="mb-3  ">
                    <p>Password</p>
                    <input type="password" />
                  </div>
                  <div className="mb-3  ">
                    <p>Confirm Password</p>
                    <input type="password" />
                  </div>
                  <button type="button" onClick={() => props.onHide()}>
                    Submit
                  </button>
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
