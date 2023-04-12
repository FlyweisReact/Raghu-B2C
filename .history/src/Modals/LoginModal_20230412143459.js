/** @format */

import { useNavigate } from "react-router";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [ forget , setForget ] = useState(false)

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

          {forget ? <></> :<></>}

      
          <div className="loginDiv4"></div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;
