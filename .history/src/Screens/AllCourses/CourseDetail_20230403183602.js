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
  const [section, setSection] = useState([]);
  const [title, setTitle] = useState("");

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

  const getSection = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/level/${levelId}`
      );
      setSection(data);
    } catch (e) {
      console.log(e);
    }
  }, [levelId]);

  useEffect(() => {
    fetchData();
    getSection();
  }, [fetchData, getSection]);

  return (
    <>
      <div className="CourseDetail">
        <p className="head">Java Beginner Sessions</p>
        <ul>
          <li>Introduction</li>
          {section?.result?.[0]?.content?.map((i, index) => (
            <li key={index}> {i.section} </li>
          ))}
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
              <p style={{ textTransform: "uppercase" }}>
                {" "}
                {data?.result?.[0]?.level}{" "}
              </p>
              <i className="fa-solid fa-bars"></i>
            </div>
            <div className="cont">
              <p>About</p>
              <p>{data?.result?.[0]?.about}</p>
            </div>
            <div className="cont">
              <p>Course Content</p>
              <p>{data?.result?.[0]?.content}</p>
            </div>
          </div>

          <div className="right">
            <p className="head" style={{ textTransform: "uppercase" }}>
              {title} level course Full
            </p>
            <div className="VD">
              <video controls>
                <source src={data?.result?.[0]?.video} type="video/mp4" />
              </video>
            </div>
            <div className="three">
              <p className="first">$ {data?.result?.[0]?.price}</p>
              <p className="second">$ {data?.result?.[0]?.actualprice}</p>
              <p className="third"> {data?.result?.[0]?.discount}% off</p>
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
              <p>{data?.result?.[0]?.include?.map((i) => i)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="courseDeatil2">
        <p>Introduction Video</p>
        <img src={img1} alt="" />
      </div>

      <div className="courseDetail3">
        {section?.result?.[0]?.content?.map((i, index) => (
          <div className="main" key={index}>
            <p> {i.section} </p>
            <img src={img1} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseDetail;