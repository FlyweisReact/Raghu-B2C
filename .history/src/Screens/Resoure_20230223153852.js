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
          <p>Our Latest</p>
          <p>Articles & Blogs</p>
        </div>

        <div  className="other">
          <img src={img2} alt="" />
          <div>
            <p>January 27,2023</p>
            <p>Top 5 on demand tech courses to boost your career.</p>
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
        <div>
          <img src={img2} alt=" "  className="other" />
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
