/** @format */

import React, { useEffect } from "react";
import img from "../../images/cert.png";
import img2 from "../../images/courses.png";
import img3 from "../../images/learn.png";
import img4 from "../../images/Group 17.png";
import Footer from "../../Footer";
import { useNavigate } from "react-router";
import Header from "../../Header/Header";
import img45 from "../../images/AA Beg.jpg";

const SecondCourse = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
      <Header />
      <div className="courseBanner">
        <p>Live training session in 23hrs:35mins:44sec </p>
        <a href="#reg">
          <button style={{ cursor: "pointer" }}>Register now</button>
        </a>
      </div>
      <div className="allNewCourse">
        <p className="head">
          Upskills your skills <br /> with Expert-Works{" "}
        </p>
        <button>START FREE TRIAL</button>
      </div>

      <a href="#allCoursses">
        <button
          className="centerBtn"
          style={{ cursor: "pointer", width: "400px", padding: "10px" }}
        >
          EXPLORE OUR COURSES
        </button>
      </a>

      <div className="courseThreeSec">
        <div>
          <img src={img3} alt="" />
          <p>LEARN AT YOUR OWN PACE</p>
        </div>
        <div>
          <img src={img2} alt="" />
          <p>ALL THE TRENDING COURSE </p>
        </div>
        <div>
          <img src={img} alt="" />
          <p>GET CERTIFIED</p>
        </div>
      </div>

      <div className="courseFiveSec" id="allCoursses">
        <p>EXPERT-WORKS COURSES</p>
        <select>
          <option>My Courses</option>
          <option>All Courses</option>
        </select>
        <button>Beginner</button>
        <button>Intermediate</button>
        <button>Expert</button>
      </div>

      <div className="courseCarousel">
        <div className="mainDiv">
          <img src={img45} alt="" onClick={() => navigate("/NewCoursePage")} />
          <div className="btnDiv">
            <button
              style={{
                border: "1px solid #FDCA71",
                backgroundColor: "#FDCA71",
              }}
            >
              Buy Now
            </button>
            <button>Add to Cart</button>
          </div>
        </div>
        <img src={img45} alt="" onClick={() => navigate("/NewCoursePage")} />
        <img src={img45} alt="" onClick={() => navigate("/NewCoursePage")} />
        <img src={img45} alt="" onClick={() => navigate("/NewCoursePage")} />
        <img src={img4} alt="" onClick={() => navigate("/NewCoursePage")} />
        <img src={img4} alt="" onClick={() => navigate("/NewCoursePage")} />
        <img src={img4} alt="" onClick={() => navigate("/NewCoursePage")} />
        <img src={img4} alt="" onClick={() => navigate("/NewCoursePage")} />
        <img src={img4} alt="" onClick={() => navigate("/NewCoursePage")} />
        <img src={img4} alt="" onClick={() => navigate("/NewCoursePage")} />
        <img src={img4} alt="" onClick={() => navigate("/NewCoursePage")} />
        <img src={img4} alt="" onClick={() => navigate("/NewCoursePage")} />
        <img src={img4} alt="" onClick={() => navigate("/NewCoursePage")} />
      </div>

      <button className="centerBtn" style={{ width: "400px" }}>
        Frequently Viewed
      </button>

      <div className="courseViewd">
        <div className="left">
          <div>
            <p>JAVA</p>
          </div>
          <div>
            <p>PYTHON</p>
          </div>
          <div>
            <p>POWER BI</p>
          </div>
        </div>
        <dv className="right">
          <div>
            <p>
              {" "}
              Java is <br /> viewed %
            </p>
          </div>
        </dv>
      </div>

      <div className="registerForm" id="reg">
        <p className="head">Register Now</p>
        <form>
          <input type="text" placeholder="Enter Your Name" />
          <br />
          <input type="text" placeholder="Enter Your Email Id" />
          <br />
          <input type="text" placeholder="Enter Your Phone Number" />
          <br />
          <div className="two">
            <select>
              <option>Select Course</option>
              <option>----</option>
              <option>----</option>
            </select>
            <input type="text" placeholder="Select Time Slot" />
          </div>
          <button
            type="button"
            onClick={() => alert("Successfully Registered")}
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SecondCourse;
