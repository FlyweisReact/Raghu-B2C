/** @format */

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import auth from "../../Auth";
import img from "../../images/cart 5.png";

const Cart = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [ cartId , setCartId ] = useState("")

  const userId = localStorage.getItem("UserId")

  const fetchHandler = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/cart/${userId}` , auth
      );
      setData(data);
      setCartId(data._id)
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
        } , auth
      );
      console.log(data)
      alert("item removed");
      fetchHandler();
    } catch (err) {
      console.log(err);
    }
  };


  console.log(cartId)

  const goBack = () => {
    navigate(-1);
  };

  const Payment = async (e) => {
    e.preventDefault()
    try{
      const { data } = await axios.post(`https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/payment` , { userId : userId ,  "currency": "USD",})
    }catch(err){
      console.log(err)
    }
  }

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

      <div className="goBackBtn" style={{marginLeft : '5%'}}>
        <button onClick={() => goBack()}>
          Go Back <span style={{ position: "absolute" , right : '10px' }}>{"<<"}</span>
        </button>
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
                    onClick={() => removeHandler(i._id)}
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
                  <p className="fake">${i.fake}</p>
                  <p>Quantity :{i.quantity} </p>
                </div>
              </div>
            ))}
          </div>

          <div className="right">
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
