/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import img from "./images/cart 5.png";
import img3 from "./images/Screenshot (2) 1.png";

const NewCoursePage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/course"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <>
      <div className="NewCourse">
        <p>ABOUT</p>
      </div>

      <div className="NewCourseHeader">
        <img src={img} alt="" />
        <div></div>
      </div>

      <div className="NewCourseThree">
        <div className="main">
          <button className="list">Java</button>
          <div className="hoverElement specialDiv">
            <div className="bigOne" onClick={() => navigate("/")}>
              <p>BEGINNER</p>
              <div className="last">
                <i class="fa-solid fa-heart"> </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
            <div className="bigOne" onClick={() => navigate("/")}>
              <p>INTERMEDIATE</p>
              <div className="last">
                <i class="fa-solid fa-heart"> </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
            <div className="bigOne" onClick={() => navigate("/")}>
              <p>EXPERT</p>
              <div className="last">
                <i class="fa-solid fa-heart"> </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="main">
          <button className="list">Python</button>
          <div className="hoverElement specialDiv">
            <div className="bigOne" onClick={() => navigate("/")}>
              <p>BEGINNER</p>
              <div className="last">
                <i class="fa-solid fa-heart"> </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
            <div className="bigOne" onClick={() => navigate("/")}>
              <p>INTERMEDIATE</p>
              <div className="last">
                <i class="fa-solid fa-heart"> </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
            <div className="bigOne" onClick={() => navigate("/")}>
              <p>EXPERT</p>
              <div className="last">
                <i class="fa-solid fa-heart"> </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="CourseDescrip">
        <div className="left">
          <div className="courseLevel">
            <p>BEGINNER</p>
            <i class="fa-solid fa-bars"></i>
          </div>


          <div className="about">
            <p className="head">About</p>
            <p className="desc">
              {" "}
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before final copy is available. Wikipedia
            </p>
          </div>


          <div classname="about">
            <p className="head">About</p>
            <p className="desc">
              {" "}
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before final copy is available. Wikipedia
            </p>
          </div>
        </div>
        <div className="right">
          <p className="CourseName">Java Beginner level Course</p>
          <video
            controls
            src={
              "https://d3s24np0er9fug.cloudfront.net/phase1/public/LMS%20New.mp4"
            }
          >
            {/* <source src={video} type="video/mp4" /> */}
            Your browser does not support HTML video.
          </video>
        </div>
      </div>
    </>
  );
};

export default NewCoursePage;
