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

      <div className="levelCourse">
        <div className="down">
          <div className="left">
            <div className="upper">
              <p>BEGINNER</p>
              <i class="fa-solid fa-bars"></i>
            </div>
            <div className="cont">
              <p>About</p>
              <p>
                s Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has suu{" "}
              </p>
            </div>
            <div className="cont">
              <p>Course Content</p>
              <p>
                s Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived{" "}
              </p>
            </div>
          </div>

          <div className="right">
            <p className="head">Java Beginner level course Full</p>

            <div className="VD">
              <video controls>
                <source
                  src="https://d3s24np0er9fug.cloudfront.net/phase1/public/LMS%20New.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="three">
                <p className="first">$3.33</p>
                <p>$00.00</p>
                <p>0.00% off</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
