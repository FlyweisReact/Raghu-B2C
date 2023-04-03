/** @format */

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import img from "../../images/cart 5.png";
import img1 from "../../images/play-button-icon-png-18921 10.png";

const CourseDetail = () => {
  const [open, setOpen] = useState(false);
  const { courseId, levelId } = useParams();
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

  console.log(levelId);
  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/stduy/levle/${courseId}/${levelId}`
      );
      setTitle(data.result[0].title);
      setData(data);
    } catch (e) {
      console.log(e);
    }
  }, [courseId, levelId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
        <button onClick={() => setOpen(!open)}>
          Documents <i className="fa-sharp fa-solid fa-caret-down"></i>
        </button>
        {open ? (
          <div className="document">
            <p>Mini Projects</p>
            <p>Assignments</p>
            <p>Q&A</p>
            <p>Reference Links</p>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="particualCourseHeader">
        <div></div>
        <p style={{ textTransform: "uppercase" }}> {title} </p>
        <div className="bigOne">
          <img src={img} alt="" />
          <div className="empty"></div>
        </div>
      </div>

      <div className="levelCourse">
        <div className="down">
          <div className="left">
            <div className="upper">
            <p style={{ textTransform: "uppercase" }}> {data?.result?.[0]?.level} </p>
              <i className="fa-solid fa-bars"></i>
            </div>
            <div className="cont">
              <p>About</p>
              <p>
              {data?.result?.[0]?.about}
              </p>
            </div>
            <div className="cont">
              <p>Course Content</p>
              <p>
              {data?.result?.[0]?.content}
              </p>
            </div>
          </div>

          <div className="right">
            <p className="head" style={{textTransform : 'uppercase'}}>{title} level course Full</p>
            <div className="VD">
              <video controls>
                <source
                  src=  {data?.result?.[0]?.video}
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="three">
              <p className="first">$  {data?.result?.[0]?.price}</p>
              <p className="second">$  {data?.result?.[0]?.actualprice}</p>
              <p className="third">  {data?.result?.[0]?.discount}% off</p>
            </div>
            <div className="two-btns">
              <Link to="/bought">
                <button> Add to Cart</button>
              </Link>
              <Link to="/bought">
                <button className="btn2">Buy Now</button>
              </Link>
            </div>{" "}
            <div className="cont">
              <p>Includes</p>
              <p>
            {data?.result}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="courseDeatil2">
        <p>Introduction Video</p>
        <img src={img1} alt="" />
      </div>

      <div className="courseDetail3">
        <div className="main">
          <p>Session 1</p>
          <img src={img1} alt="" />
        </div>
        <div className="main">
          <p>Session 2</p>
          <img src={img1} alt="" />
        </div>
        <div className="main">
          <p>Session 3</p>
          <img src={img1} alt="" />
        </div>
        <div className="main">
          <p>Session 4</p>
          <img src={img1} alt="" />
        </div>
        <div className="main">
          <p>Session 5</p>
          <img src={img1} alt="" />
        </div>
        <div className="main">
          <p>Session 6</p>
          <img src={img1} alt="" />
        </div>
        <div className="main">
          <p>Session 7</p>
          <img src={img1} alt="" />
        </div>
        <div className="main">
          <p>Session 8</p>
          <img src={img1} alt="" />
        </div>
        <div className="main">
          <p>Session 9</p>
          <img src={img1} alt="" />
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
