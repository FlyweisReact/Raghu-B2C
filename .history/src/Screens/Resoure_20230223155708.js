/** @format */

import React from "react";
import Header from "../Header/Header.js";
import img from "../images/66.png";
import img2 from "../images/111.png";

const Resoure = () => {
  return (
    <>
      <Header />
      <div className="ResourceFirst">
        <img src={img} alt="" />
      </div>
      <div className="ResourceSecond">
        <div className="text">
          <p className="first">Our Latest</p>
          <p className="second">Articles & Blogs</p>
        </div>

        <div  className="other">
          <img src={img2} alt="" />
          <div className="down">
            <p className="upper">January 27,2023</p>
            <p className="">Top 5 on demand tech courses to boost your career.</p>
            <p>Read More...</p>
          </div>
        </div>


        <div className="other">
          <img src={img2} alt=""   />
          <div>
            <p>January 27,2023</p>
            <p>Top 5 on demand tech courses to boost your career.</p>
            <p>Read More...</p>
          </div>
        </div>
        <div className="other">
          <img src={img2} alt=" "   />
          <div>
            <p>January 27,2023</p>
            <p>Top 5 on demand tech courses to boost your career.</p>
            <p>Read More...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resoure;
