/** @format */

import React from "react";
import Header from "../../Header/Header";
import img from "../../images/download.jpg";

const ThankYOu = () => {
  return (
    <>
    <Header />

      <img
        src={img}
        alt=""
        style={{ marginTop: "2%", width: "200px" }}
        className="ok-Image"
      />
      <h1 style={{ marginTop: "2%", fontWeight: "bold" , textAlign : 'center' }}>
        Subscription successful
      </h1>
      <p style={{ fontSize: "2rem"  ,textAlign : 'center'}}>
        Thankyou for purchasing our product! You will receive an email shortly.
        <br />
        Happy Learning!
      </p>
      <div className="twoBtns">
        <button className="btn2"> Continue Shopping</button>
        <button className="btn3"> Manage Order</button>
      </div>
    </>
  );
};

export default ThankYOu;
