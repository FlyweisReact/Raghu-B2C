/** @format */

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import auth from "../../Auth";
import img from "../../images/cart 5.png";

const Cart = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const userId = localStorage.getItem("UserId")

  const fetchHandler = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/cart/${userId}` , auth
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  },[userId])

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  const removeHandler = async (id) => {
    try {
      const data = await axios.put(
        `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/cart/${userId}`,
        {
          courseId: id,
        }
      );
      console.log(data)
      alert("item removed");
      fetchHandler();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="Cart">
        <div className="left">
          <p>Cart Details</p>
        </div>
        <div className="right">
          {" "}
          <img src={img} alt="" />
          <div></div>
        </div>
      </div>

      <div className="bigCart">
        <div className="upper">
          <div className="left">
            <p className="title">{data?.quatotal} Course in Cart</p>
            {data?.items?.map((i, index) => (
              <div className="box" key={index}>
                <img src={i.image} alt="" style={{ padding: "10px" }} />
                <p className="next">{i.name}</p>
                <div className="remove">
                  <button
                    onClick={() => removeHandler(i.course)}
                    style={{
                      color: "red",
                      border: "none",
                      fontSize: "18px ",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>

                  <p>Save For Later</p>
                  <p>Move to Watchlist</p>
                </div>
                <div className="price">
                  <p className="real"> ${i.price} </p>
                  <p className="fake">$49.95</p>
                  <p>Quantity :{i.quantity} </p>
                </div>
              </div>
            ))}
          </div>

          <div className="right">
            <p className="up">$49.95</p>
            <div className="sub">
              <p style={{ fontSize: "20px" }}>Subtotal: </p>
              <p
                style={{
                  fontSize: "30px",
                  color: "#358bf0",
                  fontWeight: "bold",
                }}
              >
                ${data?.total}
              </p>
            </div>
            <div className="sub">
              <p style={{ fontSize: "20px" }}> Total Savings (80%): </p>
              <p style={{ color: "#c2c2c2", textDecoration: " line-through" }}>
                $39.95
              </p>
            </div>
            <button onClick={() => navigate("/billing")}>CheckOut</button>

            <div className="coupon">
              <p className="head">Promotions</p>
              <div className="tww">
                <p>X EXPERTWORKS</p>
                <p style={{ color: "#c2c2c2", textDecoration: "line-through" }}>
                  $70.00
                </p>
              </div>
              <div className="tww2">
                <input type="text" placeholder="Enter Coupon"/> <button>Apply</button>
              </div>
            </div>
          </div>
        </div>

        <div className="down">
          <button>Manage Order</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
