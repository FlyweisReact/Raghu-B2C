/** @format */

import React from "react";
import img from "../../images/cart 5.png";

const CourseDetail = () => {
  return (
    <>
      <div className="CourseDetail">
        <p className="head">Java Beginner Sessions</p>
        <ul>
          <li>Introduction</li>
          <li>Session 1</li>
          <li>Session 2</li>
          <li>Session 3</li>
          <li>Session 4</li>
          <li>Session 5</li>
          <li>Session 6</li>
          <li>Session 7</li>
          <li>Session 8</li>
          <li>Session 9</li>
        </ul>
        <button>
          Documents <i class="fa-sharp fa-solid fa-caret-down"></i>
        </button>
      </div>

      <div className="particualCourseHeader">
        <div></div>
        <p>Java Beginner</p>
        <div className="bigOne">
          <img src={img} alt="" />
          <div className="empty"></div>
        </div>
      </div>

      <div>
      <div className="CourseDescrip">
            <div className="left">
              <div className="courseLevel">
                <p> {courseData?.data?.level} </p>
                <i class="fa-solid fa-bars"></i>
              </div>

              <div className="about">
                <p className="head">About</p>
                <p className="desc">{courseData?.data?.about}</p>
              </div>

              <div className="about">
                <p className="head">Course Content</p>
                <p className="desc"></p>
              </div>
            </div>

            <div className="right">
              <p className="CourseName"></p>
              <video controls src=''>
                {/* <source src={video} type="video/mp4" /> */}
                Your browser does not support HTML video.
              </video>
              <div className="price">
                <p className="actualP">$ </p>
                <p className="fakeP"></p>
                <p className="off">%off</p>
              </div>

              <div className="btns">
                <button
                  className="first"
                  type="button"
                  style={{ cursor: "pointer" }}
                 
                >
                  Add to cart
                </button>
                <button className="second">Buy Now</button>
              </div>

              <div className="includes">
                <p className="head">Includes</p>
                <p className="desc">
                  {courseData?.data?.include?.map((a, index) => a)}
                </p>
              </div>
            </div>
          </div>
      </div>

    
    </>
  );
};

export default CourseDetail;
