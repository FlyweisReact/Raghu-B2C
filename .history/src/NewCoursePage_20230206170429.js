/** @format */

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

const NewCoursePage = () => {
  const [open, setOpen] = useState(false);

  let domNode = useClickOutside(() => {
    setOpen(false);
  });

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

      <div className="frequentlyBought">
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
                setOpen(false);
              }}
            >
              Go to cart
            </button>
            <button className="second">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCoursePage;
