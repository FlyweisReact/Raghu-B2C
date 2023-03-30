/** @format */

import React from "react";
import img from "../../images/cart 5.png";
import img1 from '../../images/AA Beg.'

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
            <p>Frequently Bought Together</p>

            <div className="main">
                <div>

                </div>
            </div>
        </div>
        
      </div>
    </>
  );
};

export default Bought;
