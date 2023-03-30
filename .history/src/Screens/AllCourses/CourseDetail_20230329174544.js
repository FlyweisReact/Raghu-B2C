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
            <div>
                <p>BEGINNER</p>
                <i class="fa-solid fa-bars"></i>
            </div>

            <div>

                <div>
                    <div>
                    <p>About</p>
                    <p>Lorem Ipsum </p>
                     </div>
                    <div>
                    <p>Course Content</p>
                    <p>Lorem Ipsum </p>
                     </div>
                </div>

                <div>
                    <p>Java Beginner level course Full</p>

                    <div>
                        <video
                    </div>

                </div>

            </div>
      </div>

    
    </>
  );
};

export default CourseDetail;
