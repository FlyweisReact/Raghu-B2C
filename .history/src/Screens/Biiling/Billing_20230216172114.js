/** @format */

import React, { useState } from "react";
import img3 from "../../images/classic 1.png";
import { useNavigate } from "react-router";
import Header from "../../Header/Header";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Billing = () => {
  const navigate = useNavigate();
  const reciptId = localStorage.getItem("recipt");
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  const totalPrice = localStorage.getItem("Total");

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Expert-Works",
            amount: {
              currency_code: "USD",
              value: totalPrice,
            },
          },
        ],
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
      success ? alert("Success") : alert("decline");
    });
  };

  return (
    <>
      <Header />

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
                    marginTop: "20px",
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
                    marginTop: "20px",
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

          <button onClick={() => navigate("/thank")} type="button">
            Continue to checkout
          </button>
          <PayPalScriptProvider
            options={{
              "client-id":
                "ATdysrjgkk_eI5vhi9XgXaZPDOHY2XbqtfcC3e_9PV2Kz1Vhb-ZG0-t9j_mwNRgE23950RjiOMYg8zPY",
            }}
          >
            <PayPalButtons
              style={{ layout: "horizontal" }}
              createOrder={(data , actions ) => {
               return actions.order.create({
                purchase_units : [
                  {
                    description : "Expert-Works" , 
                    amount : {
                      value : 3000
                    }
                  }
                ]
               })
              }}
              onApprove={()}
            />
          </PayPalScriptProvider>
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
