/** @format */

import React from "react";
import Topbar from "../../navigation/Topbar";
import img3 from "../../../images/classic 1.png";
import "./FreeTrial.css";

const Billing = () => {
  return (
    <>
      <div
        className="courses_main_container"
        style={{ backgroundColor: "black" }}
      >
        <div className="course_header_content">
          <div className="navbarss">
            <Topbar />
          </div>
        </div>
      </div>

      <div className="BillingDiv">
        <div className="left">
          <div className="divSub">
            <div className="up">
              <h2>Billing Address</h2>
              <div>
                <div className="inputDIvv">
                  <label>
                    {" "}
                    <i class="fa-solid fa-user"></i> FullName
                  </label>{" "}
                  <br />
                  <input type={"text"} /> <br />
                </div>
                <div className="inputDIvv">
                  <label>
                    {" "}
                    <i class="fa-solid fa-envelope"></i> Email
                  </label>
                  <br />
                  <input type={"text"} /> <br />
                </div>

                <div className="inputDIvv">
                  <label>
                    {" "}
                    <i class="fa-solid fa-location-dot"></i> Address
                  </label>
                  <br />
                  <input type={"text"} /> <br />
                </div>



                <div className="inputDIvv">
                  <label>
                    <i class="fa-solid fa-city"></i> City
                  </label>
                  <br />
                  <input type={"text"} /> <br />
                </div>


                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    gap: "1rem",
                    marginTop: '20px'
                  }}
                >
                  <div>
                    <label> State</label> <br />
                    <input type={"text"} style={{ width: "150px" }} />
                  </div>
                  <div>
                    <label> Zip</label> <br />
                    <input type={"text"} style={{ width: "150px" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="down">
              <h2>Payment</h2>
              <div>
                <label>Accepted Cards</label>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    marginTop: "3%",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div style={{ width: "40px" }}>
                    <img src={img3} alt="" style={{ width: "100%" }} />
                  </div>
                  <div style={{ width: "40px" }}>
                    <img src={img3} alt="" style={{ width: "100%" }} />
                  </div>
                  <div style={{ width: "40px" }}>
                    <img src={img3} alt="" style={{ width: "100%" }} />
                  </div>
                  <div style={{ width: "40px" }}>
                    <img src={img3} alt="" style={{ width: "100%" }} />
                  </div>
                </div>
                <div className="inputDIvv">
                <label>Name on Card</label> <br />
                <input type={"text"} /> <br />
                </div>

                <div className="inputDIvv">
                <label>Credit Card Number</label> <br />
                <input type={"text"} /> <br />
                </div>

                <div className="inputDIvv">
                <label>Exp Month</label> <br />
                <input type={"text"} /> <br />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    gap: "1rem",
                    marginTop : '20px'
                  }}
                >
                  <div>
                    <label> Exp Year</label> <br />
                    <input type={"text"} style={{ width: "150px" }} />
                  </div>
                  <div>
                    <label> CVV</label> <br />
                    <input type={"text"} style={{ width: "150px" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <input
              type={"checkbox"}
              style={{ width: "20px", height: "20px" }}
            />{" "}
            Shipping address same as billing
          </div>

          <button>Continue to checkout</button>
        </div>

        <div className="right">
          <h5>Cart</h5>
          <p>Product1</p>
          <p>Product2</p>
          <p>Product3</p>
          <div
            style={{
              width: "90%",
              height: "2px",
              backgroundColor: "black",
              marginTop: "5%",
              marginLeft: "5%",
            }}
          ></div>
          <h6>Total</h6>
        </div>
      </div>
    </>
  );
};

export default Billing;
