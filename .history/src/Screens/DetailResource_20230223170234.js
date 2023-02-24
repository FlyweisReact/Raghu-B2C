/** @format */

import React from "react";
import Header from "../Header/Header";
import img from "../images/103.png";
import img2 from "../images/102.png";

const data = [
    {
        image : img
    }
]


const DetailResource = () => {
  return (
    <>
      <Header />
      <div className="detailResourceFirst">
        <img src={img} alt="" />
      </div>

      <div className="detailResourceSecond">
        <p className="head">1. ARTIFICIAL INTELLIGENCE</p>
        <img src={img2} alt="" />
        <p className="desc">Any human-like intelligence exhibited by a computer, robot, or any other machine, is referred to as Artificial intelligence or AI. Artificial intelligence is everywhere, and the most common applications of AI include Natural Language Processing (NLP), Image recognition, Real-time recommendations, speech recognition, virus and spam prevention, ride-share services, autopilot technology, and household robots.                                                                    </p>
        <p className="desc">AI jobs have enormously increased in recent years. It’s a great option to learn AI to boost your career and get a high-paying job.</p>
      </div>
    </>
  );
};

export default DetailResource;
