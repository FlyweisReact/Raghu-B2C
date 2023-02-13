/** @format */

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import img from "./images/cart 5.png";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current?.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

let useClickOutside2 = (handler) => {
  let domNode2 = useRef();

  useEffect(() => {
    let maybeHandler2 = (event) => {
      if (!domNode2.current?.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler2);
    return () => {
      document.removeEventListener("mousedown", maybeHandler2);
    };
  });
  return domNode2;
};

const NewCoursePage = () => {
  const navigate = useNavigate();
  const [ data , setData ] = useState([])
  const [open, setOpen] = useState(false);

  const [show, setShow] = useState(false);

  let domNode = useClickOutside(() => {
    setOpen(false);
  });

  let domNode2 = useClickOutside2(() => {
    setShow(false);
  });


  const Allcourses = async () => {
    try{
      const { data } = await axios.get("https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/study/")
      setData(data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    Allcourses()
  },[])



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
        {data?.message?.map((i , index) => (
          <div className="main" key={index}>
          <button className="list"> {i.title} </button>
          <div className="hoverElement specialDiv">
          {i.levels?.map((a , index) => (
            <div className="bigOne" key={index} onClick={() => setOpen(true)}>
              <p>BEGINNER</p>
              <div className="last">
                <i class="fa-solid fa-heart"> </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
          ))}
          </div>
        </div>
        ))}

        <div className="main">
          <button className="list">Java</button>
          <div className="hoverElement specialDiv">
            <div className="bigOne" onClick={() => setOpen(true)}>
              <p>BEGINNER</p>
              <div className="last">
                <i class="fa-solid fa-heart"> </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
            <div className="bigOne" onClick={() => setOpen(true)}>
              <p>INTERMEDIATE</p>
              <div className="last">
                <i class="fa-solid fa-heart"> </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
            <div className="bigOne" onClick={() => setOpen(true)}>
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
            <div className="bigOne" onClick={() => setOpen(true)}>
              <p>BEGINNER</p>
              <div className="last">
                <i class="fa-solid fa-heart"> </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
            <div className="bigOne" onClick={() => setOpen(true)}>
              <p>INTERMEDIATE</p>
              <div className="last">
                <i class="fa-solid fa-heart"> </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
            <div className="bigOne" onClick={() => setOpen(true)}>
              <p>EXPERT</p>
              <div className="last">
                <i class="fa-solid fa-heart"> </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {open ? (
        <div className="CourseDescrip" ref={domNode}>
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
                typeface without relying on meaningful content. Lorem ipsum may
                be used as a placeholder before final copy is available.
                Wikipedia
              </p>
            </div>

            <div className="about">
              <p className="head">Course Content</p>
              <p className="desc">
                {" "}
                publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content. Lorem ipsum may
                be used as a placeholder before final copy is available.
                Wikipedia
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
            <div className="price">
              <p className="actualP">$9.99</p>
              <p className="fakeP">$49.95</p>
              <p className="off">80.00% off</p>
            </div>

            <div className="btns">
              <button
                className="first"
                type="button"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setOpen(false);
                  setShow(true);
                }}
              >
                Add to cart
              </button>
              <button className="second">Buy Now</button>
            </div>

            <div className="includes">
              <p className="head">Includes</p>
              <p className="desc">
                publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content. Lorem ipsum may
                be used as a placeholder before final copy is available.
                Wikipedia
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {show ? (
        <div className="frequentlyBought" ref={domNode2}>
          <div className="left">
            <div className="tog">
              <p className="bigHead">Frequently Bought Together</p>

              <div className="courseNN">
                <div className="two-sec">
                  <div className="leftUnder">
                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                    />
                  </div>

                  <div className="rightUnder">
                    <p className="head">Java Intermediate level Course</p>
                    <div className="prices">
                      <p className="realprice">$9.99</p>
                      <p className="fakeP">$49.99</p>
                      <input type={"checkbox"} />
                    </div>
                  </div>
                </div>

                <div className="two-sec">
                  <div className="leftUnder">
                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                    />
                  </div>

                  <div className="rightUnder">
                    <p className="head">Java Expert level Course</p>
                    <div className="prices">
                      <p className="realprice">$9.99</p>
                      <p className="fakeP">$49.99</p>
                      <input type={"checkbox"} />
                    </div>
                  </div>
                </div>

                <div className="lastD">
                  <div className="total">
                    <p className="TotalP">Total: </p>
                    <p className="price">$30</p>
                    <p className="fakep">$100</p>
                  </div>
                  <div className="btn">
                    <button>Add all to cart</button>
                  </div>
                </div>
              </div>

              <p className="bigHead" style={{ marginTop: "10px" }}>
                Trending Courses
              </p>

              <div className="trending">
                <div>
                  <p>AWS</p>
                </div>

                <div>
                  <p>POWER BI</p>
                </div>

                <div>
                  <p>PYTHON</p>
                </div>
              </div>
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
            <div className="price">
              <p className="actualP">$9.99</p>
              <p className="fakeP">$49.95</p>
              <p className="off">80.00% off</p>
            </div>

            <div className="btns">
              <button
                className="first"
                type="button"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/cart");
                }}
              >
                Go to cart
              </button>
              <button className="second" onClick={() => {
                  navigate("/cart");
                }}>Buy Now</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default NewCoursePage;
