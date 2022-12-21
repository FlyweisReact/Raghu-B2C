/** @format */

import React from "react";
import { GoSearch } from "react-icons/go";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { RiArrowDownLine } from "react-icons/ri";
import Topbar from "../../navigation/Topbar";
import "./MyCourse.css";

const data = [
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
    name: "Banner",
    about:
      "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will helpyou understand everything needed to excel in this programming language. All the best! ",
    Beginner:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the  basic knowledge to get started with Python.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGWhOkJo-qRIe8mlDYf_ClqnpAy88OnH2SIVdrDUv3-tMyKpXC_BG4otJSMP1AHICp7E&usqp=CAU",
    name: "Banner",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGWhOkJo-qRIe8mlDYf_ClqnpAy88OnH2SIVdrDUv3-tMyKpXC_BG4otJSMP1AHICp7E&usqp=CAU",
    name: "Banner",
  },
];

const MyCourse = () => {
  return (
    <>
      <div className="courses_main_container">
        <div className="upper_header_container">
          <div className="course_header_content">
            <div className="navbarss">
              <Topbar />
            </div>

            <div className="search">
              <div className="search_container">
                <input type="text" placeholder="Search Cources" />
                <GoSearch className="searchIcon" />
              </div>

              <div className="sorted">
                <div className="shorted_container">
                  <h3>Sort by</h3>

                  <div className="arrow_icons">
                    <MdOutlineKeyboardArrowUp />
                    <RiArrowDownLine />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses */}

      <section
        className="main-card--container"
        style={{ color: "black", marginBottom: "10%" }}
      >
        {data?.map((i) => {
          return (
            <>
              <div className="card-container">
                <div className="card">
                  <div className="card-body">
                    <img
                      src={i.image}
                      style={{ width: "100%", height: "300px" }}
                      alt=""
                    />
                    <div className="card-about">
                      {" "}
                      <strong>About this Course :</strong> {i.about}
                    </div>
                    <div className="card-about">
                      {" "}
                      <strong>Beginner :</strong> {i.Beginner}
                    </div>
                    <div className="card-about">
                      {" "}
                      <strong>This course includes the following :</strong> 
                      <ul>
                        <li>5 hours of recorded sessions</li>
                        <li>3 assignments</li>
                        <li>1 mini-project</li>
                        <li>Real-time contents</li>
                        <li></li>
                      </ul>
                     
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MyCourse;
