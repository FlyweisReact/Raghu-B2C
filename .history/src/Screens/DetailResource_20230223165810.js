/** @format */

import React from "react";
import Header from "../Header/Header";
import img from "../images/103.png";
import img2 from "../images/102.png";

const DetailResource = () => {
  return (
    <>
      <Header />
      <div className="detailResourceFirst">
        <img src={img} alt="" />
      </div>

      <div className="detailResourceSecond">
        <p>1. ARTIFICIAL INTELLIGENCE</p>
        <img src={img2} alt="" />
      </div>
    </>
  );
};

export default DetailResource;
