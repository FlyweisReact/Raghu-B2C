/** @format */

import React from "react";
import img from "../../images/cart 5.png";

const Bought = () => {
  return (
    <>
      <div className="bought">
        <div className="bigOne">
          <img src={img} alt="" />
          <div className="empty"></div>
        </div>
      </div>

      <div className="boughtone"></div>
    </>
  );
};

export default Bought;
