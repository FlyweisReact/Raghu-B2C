/** @format */

import React from "react";
import img from "../../images/cart 5.png";

const ParticularCourse = () => {
  return (
    <>
      <div className="particualCourse">
        <button>Back</button>
        <p>ABOUT JAVA</p>
        <p className="desc">
          Let us take you to the world of one of the top programming languages,
          JAVA! This course is designed by an experienced JAVA programmer to
          provide you the best real-time content. This course will help you
          understand everything needed to excel in this programming language.
          All the best!
        </p>
      </div>

      <div className="particualCourseHeader">
        <div></div>
        <p>JAVA</p>
        <div className="bigOne">
          <img src={img} alt="" />
          <div className="empty"></div>
        </div>
      </div>

      <div className="ParticularCourseThree">
        <div className="main">
        <div className="left">
        <button className="head"> Java </button>
        </div>
        <div className="right">
            <div>
                <p>BEGI</p>
            </div>
        </div>
         
        </div>
        <div className="bottom">
          <p>Full Course</p>
          <div>
            <i class="fa-solid fa-heart"> </i>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ParticularCourse;
