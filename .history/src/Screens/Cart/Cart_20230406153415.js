/** @format */

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import img from "../../images/cart 5.png";
import { Modal, Button } from "react-bootstrap";

const Cart = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [cartId, setCartId] = useState("");
  const [id, setId] = useState("");
  const userId = localStorage.getItem("UserId");
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState("");
  const [couponData, setCouponData] = useState([]);
  const [couponPercentage, setCouponPercentage] = useState("");
  const [ showTotal , setShowTotal] = useState(false)

  const totalPrice = couponPercentage/total * 100


  const fetchCoupons = async () => {
    try {
      const { data } = await axios.get(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/coupon"
      );
      setCouponData(data);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchHandler = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/cart/${userId}`
      );
      setData(data);
      setTotal(Math.round(data.result[0].total));
      setCartId(data.result[0]._id);
      localStorage.setItem("Total", data.total);
    } catch (err) {
      console.log(err);
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      fetchHandler();
    }
    fetchCoupons();
  }, [fetchHandler, userId]);

  const removeHandler = async (id) => {
    try {
      const data = await axios.put(
        `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/cart/${userId}`,
        {
          courseId: id,
        }
      );
      console.log(data);
      alert("item removed");
      fetchHandler();
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  const Payment = async (e) => {
    try {
      const { data } = await axios.post(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/payment",
        {
          userId,
          cartId,
          quantity: 5,
        }
      );

      console.log(data);
      console.log(data.result.url);
      window.location.href = data.result.url;
    } catch (err) {
      console.log(err);
    }
  };

  function Wishlist(props) {
    const AddWishlist = async (e) => {
      try {
        const { data } = await axios.post(
          "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/addwishlist",
          {
            userId: userId,
            courseId: id,
          }
        );
        console.log(data);
        alert("Course Added to Wishlist");
        props.onHide();
      } catch (Err) {
        console.log(Err);
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ zIndex: 9999 }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 style={{ textAlign: "center", marginBottom: "20px" }}>
            Add To Wishlist
          </h4>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <Button variant="outline-danger" onClick={() => props.onHide()}>
              Decline
            </Button>
            <Button variant="outline-success" onClick={() => AddWishlist()}>
              Confirm
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }
  return (
    <>
      <Wishlist show={show} onHide={() => setShow(false)} />
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

      <div className="goBackBtn" style={{ marginLeft: "5%" }}>
        <button onClick={() => goBack()}>Go Back</button>
      </div>

      <div className="bigCart">
        <div className="upper">
          <div className="left">
            <p className="title">{data?.qua} Course in Cart</p>
            {data?.result?.map((i) =>
              i.items?.map((item) =>
                item?.level?.map((a, index) => (
                  <div className="box" key={index}>
                    <img src={a?.image} alt="" style={{ padding: "10px" }} />
                    <p className="next" style={{ textTransform: "uppercase" }}>
                      {a?.title}
                    </p>
                    <div className="remove">
                      <button
                        onClick={() => removeHandler(item._id)}
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
                      <p
                        onClick={() => {
                          setId(a._id);
                          setShow(true);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        Move to Wishlist
                      </p>
                    </div>
                    <div className="price">
                      <p className="real"> ${a?.actualPrice} </p>
                      <p className="fake">${a?.price}</p>
                      <p>Quantity :{item?.quantity} </p>
                    </div>
                  </div>
                ))
              )
            )}
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
                {total}
              </p>
            </div>
            <div className="sub">
              <p style={{ fontSize: "20px" }}> Total Savings (80%): </p>
              <p style={{ color: "#c2c2c2", textDecoration: " line-through" }}>
                $39.95
              </p>
            </div>
            <button
              onClick={() => {
                Payment();
              }}
            >
              CheckOut
            </button>

            <div className="coupon">
              <p className="head">Promotions</p>
              <select onChange={(e) => setCouponPercentage(e.target.value)}>
                <option>-Select Coupon--</option>
                {couponData?.map((i, index) => (
                  <option key={index} value={i.discount}>
                    {" "}
                    {i.code} {i.discount}%{" "}
                  </option>
                ))}
              </select>
              {/* {couponData?.map((i, index) => (
                <div key={index} className="tww">
                  <p>{i.code} </p>
                  <p
                    style={{ color: "#c2c2c2", textDecoration: "line-through" }}
                  >
                    {" "}
                    {i.discount}%{" "}
                  </p>
                </div>
              ))} */}
              <div className="tww2">
                {/* <input type="text" placeholder="Enter Coupon" />{" "} */}
                <button onClick={() => s} >Apply</button>
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
