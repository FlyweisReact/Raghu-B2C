
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import img from "./images/cart 5.png";

const NewCoursePage = () => {
  const navigate = useNavigate();


  let menuRef = useRef()

  useEffect(() => {
document.addEventListener("mousedown" , (event) => {
  if(!menuRef.currentevent.target)
  console.log('out')
})
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

      <div className="CourseDescrip" ref={menuRef}>
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


          <div className="about">
            <p className="head">Course Content</p>
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
