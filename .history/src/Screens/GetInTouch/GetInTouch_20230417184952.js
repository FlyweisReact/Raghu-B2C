/** @format */

import axios from "axios";
import { useState } from "react";
import Header from "../../Header/Header";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router";
import { Modal } from "react-bootstrap";

const GetInTouch = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate()

  const postData = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/touch",
        { first, last, email, phone }
      );
      console.log(data);
      navigate('/')
    } catch (err) {
      console.log(err);
    }
  };


  // OTP Modal
  function OtpModal(props) {
    const [otp, setOtp] = useState("");
    const Verifyotp = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/touch/verify",
          { otp }
        );
        
      alert("One of our associates will reach you shortly!!");
        localStorage.setItem("token", data.token);
        localStorage.setItem("UserId", data.user._id);

        navigate("/secondCourse");
      } catch (err) {
        alert(err.response.data.message);
      }
    };

    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            ENTER OTP
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="otpDiv">
            <form onSubmit={Verifyotp}>
              <input type="number" onChange={(e) => setOtp(e.target.value)} />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    );
  }


  return (
    <>
      {/* <Header /> */}
      <Header />
      <div className="FreeTrialBanner"></div>
      <div className="FreeTrialForm">
        <form onSubmit={postData}>
          <p className="head">Enter Your Details</p>
          <div className="MainInput">
            <p>First Name</p>
            <input
              type="text"
              onChange={(e) => setFirst(e.target.value)}
              required
            />
          </div>
          <div className="MainInput">
            <p>Last Name</p>
            <input
              type="text"
              onChange={(e) => setLast(e.target.value)}
              required
            />
          </div>
          <div className="MainInput">
            <p>Email Address</p>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="MainInput">
            <p>Phone Number </p>
            {/* <input
              type="tel"
              pattern="[0-9]{10}"
              onChange={(e) => setPhone(e.target.value)}
              required
            /> */}
                <PhoneInput
              defaultCountry="IN"
              value={phone}
              onChange={setPhone}
              maxLength={15}
              minLength={8}
              required
            />
          </div>
          <button
            type="submit"
            style={{ borderRadius: "50px", width: "200px" }}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="FreeTriallastbanner"></div>
    </>
  );
};

export default GetInTouch;
