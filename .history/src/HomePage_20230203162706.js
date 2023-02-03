/** @format */

import React from "react";
import "./HomePage.css";
// Images
import img from "./images/logo.png";
import img2 from "./images/2nd image.png";
import img3 from "./images/Home.png";
import img4 from "./images/icon.png";
import img5 from "./images/Home (2).png";

const HomePage = () => {
  return (
    <>
      <div className="HomeNewnav">
        <div className="left">
          <img src={img} alt="" />
        </div>
        <div className="right">
          <ul>
            <li>Home</li>
            <li>About </li>
            <li>Courses</li>
            <li>Resources</li>
            <li style={{ fontWeight: "bold" }}>Login</li>
            <button>Free Trial</button>
            <li>
              <i class="fa-solid fa-magnifying-glass"></i>
            </li>
          </ul>
        </div>
      </div>

      <div className="mainSecTwo">
        <div className="left">
          <p className="head">
            Top cloud-based <br /> E-learning platform{" "}
          </p>
          <p className="desc">
            Expert-Works is a creation that emerged from the ongoing
            difficulties people experienced in landing positions in their ideal
            projects. Our unique hybrid model redefines self-paced learning by
            providing access to the latest technologies and trends in the
            market.
          </p>
          <div className="btns">
            <button
              style={{
                backgroundColor: "#426fec",
                color: "#fff",
                width: "200px",
                border: "1px solid #426fec",
                fontSize: "20px",
                borderRadius: "50px",
                padding: "10px",
              }}
            >
              Start free Trial
            </button>
            <button
              style={{
                backgroundColor: "#fff",
                color: "#426fec",
                width: "200px",
                border: "none",
                fontSize: "20px",
                borderRadius: "50px",
                padding: "10px",
              }}
            >
              Our Courses <i class="fa-solid fa-arrow-down"></i>
            </button>
          </div>
        </div>
        <div className="right">
          <img src={img3} alt="" />
        </div>
      </div>

      <div className="mainSecTwo2">
        <div className="left">
          <img src={img2} alt="" />
        </div>
        <div className="right">
          <p className="head">
            Want to go the extra mile <br />
            to reach your goal
          </p>
          <p className="desc">
            Expert-Works is a creation that emerged from the ongoing
            difficulties people experienced in landing positions in their ideal
            projects. Our unique hybrid model redefines self-paced learning by
            providing access to the latest technologies and trends in the
            market.
          </p>
          <div className="btns">
            <button
              style={{
                backgroundColor: "#426fec",
                color: "#fff",
                width: "200px",
                border: "1px solid #426fec",
                fontSize: "20px",
                borderRadius: "50px",
                padding: "10px",
              }}
            >
              More about us
            </button>
          </div>
        </div>
      </div>

      <div className="centerMainDiv">
        <div className="left">
          <p className="head">
            Our <br /> Trending <br /> Courses
          </p>{" "}
          <button
            style={{
              backgroundColor: "#426fec",
              color: "#fff",
              width: "200px",
              border: "1px solid #426fec",
              fontSize: "18px",
              borderRadius: "50px",
              padding: "10px",
              marginTop: "30px",
            }}
          >
            Load More
          </button>
        </div>
        <div className="right">
          <div className="group">
            <div>
              <img src={img4} alt="" />
              <p className="head">Data Science</p>
              <p className="desc">
                Data science uses complex machine learning algorithms to build
                predictive models.
              </p>
            </div>
            <div>
              <img src={img5} alt="" />
              <p className="head">Python</p>
              <p className="desc">
                Python is commonly used for developing websites and software,
                task automation, data analysis, and data visualization.
              </p>
            </div>
          </div>
          <div className="group">
            <div>
              <img src={img4} alt="" />
              <p className="head">Salesforce</p>
              <p className="desc">
                Salesforce is a cloud-based software company whose main product
                is a customer relationship management (CRM) system.
              </p>
            </div>
            <div>
              <img src={img4} alt="" />
              <p className="head">Java Full Stack</p>
              <p className="desc">
                Java full stack refers to web developers that use Java to
                develop the entire technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="newTwoSec">
        <div className="left">
            
        </div>
        <div className="right">
          See Our most viewed Course videos
          <button
            style={{
              backgroundColor: "#426fec",
              color: "#fff",
              width: "200px",
              border: "1px solid #426fec",
              fontSize: "18px",
              borderRadius: "50px",
              padding: "10px",
              marginTop: "30px",
            }}
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
