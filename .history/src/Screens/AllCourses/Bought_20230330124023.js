/** @format */

import React from "react";
import img from "../../images/cart 5.png";
import img1 from "../../images/AA Beg.jpg";

const Bought = () => {
  return (
    <>
      <div className="bought">
        <div className="bigOne">
          <img src={img} alt="" />
          <div className="empty"></div>
        </div>
      </div>

      <div className="boughtone">
        <div className="left">
          <p className="head">Frequently Bought Together</p>

          <div className="main">
            <div className="firstZero">
              <img src={img1} alt="" />
            </div>

            <div className="first">
              <p className="p1">Java Intermediate level course</p>

              <div className="first1">
                <div>
                  <p className="p2">$3.33</p>
                  <div className="first2">
                    <p style={{ textDecoration: "line-through" }}> $00.00 </p>
                    <p>0.00% off</p>
                  </div>
                </div>
                <div style={{ display: "grid" }}>
                  <input type="checkbox" />
                </div>
              </div>
            </div>
          </div>

          <div className="main">
            <div className="firstZero">
              <img src={img1} alt="" />
            </div>
            <div className="first">
              <p className="p1">Java Expert level course</p>

              <div className="first1">
                <div>
                  <p className="p2">$3.33</p>
                  <div className="first2">
                    <p style={{ textDecoration: "line-through" }}> $00.00 </p>
                    <p>0.00% off</p>
                  </div>
                </div>
                <div style={{ display: "grid" }}>
                  <input type="checkbox" />
                </div>
              </div>
            </div>
          </div>

          <div className="main2">
            <p>
              {" "}
              Total : <strong>$9.99</strong>{" "}
            </p>
            <button>Add all to cart</button>
          </div>

          <div className="main3">
            <p className="p1">Trending courses </p>
            <div className="three-sec">
                <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bought;
