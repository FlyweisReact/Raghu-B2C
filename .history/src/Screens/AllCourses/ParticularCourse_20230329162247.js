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
        <div className="" >
          <img src={img} alt="" />
          <div className="empty"></div>
        </div>
      </div>

      <div className="goBackBtn">
        <button>
          Go Back{" "}
          <span style={{ position: "absolute", right: "10px" }}>{"<<"}</span>
        </button>
      </div>

      <div className="NewCourseThree">
        <div className="main">
          <button className="list newPP"> Java </button>
          <div className="hoverElement specialDiv">
            <div className="bigOne">
              <p>dsada</p>
              <div className="last">
                <i class="fa-solid fa-heart"> </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParticularCourse;
