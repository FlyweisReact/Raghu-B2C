/** @format */

import React from "react";
import img from "../../images/cart 5.png";
import img1 from '../../images/AA Beg.jpg'

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
                    <img src={img1} alt='' />
                </div>
                <div>
                    <p>Java Intermediate level course</p>
                </div>
            </div>
        </div>
        
      </div>
    </>
  );
};

export default Bought;
