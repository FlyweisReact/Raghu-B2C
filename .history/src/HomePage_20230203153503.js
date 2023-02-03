/** @format */

import React from "react";
import "./HomePage.css";

import img from "./images/logo.png";




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
            Top cloud - based <br /> E - learning platform{" "}
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
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="mainSecTwo2">
        <div className="left">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt=""
          />
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
              fontSize: "20px",
              borderRadius: "50px",
              padding: "10px",
            }}
          >
           Load More
          </button>
        </div>
        <div className="right">
            <div className="group">
                <div></div>
            </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
