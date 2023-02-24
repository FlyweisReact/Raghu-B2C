/** @format */

import React from "react";
import Header from "../Header/Header";
import img from "../images/103.png";

const DetailResource = () => {
  return (
    <>
      <Header />
      <div className="detailResourceFirst">
        <img src={img} alt="" />
      </div>

      <div className="detailResourceSecond">
    <p>1. ARTIFICIAL INTELLIGENCE</p>
    
      </div>
    </>
  );
};

export default DetailResource;
