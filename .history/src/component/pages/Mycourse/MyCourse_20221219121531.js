/** @format */

import React from "react";
import { GoSearch } from "react-icons/go";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { RiArrowDownLine } from "react-icons/ri";
import Topbar from "../../navigation/Topbar";
import "./MyCourse.css";

const data = [
  // Python Start
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
      head : "Python: Beginner" ,
    about:
      "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best!",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
    include: [
      "5 hours of recorded sessions",
      "3 assignments",
      "1 mini-project",
      "Real-time contents ",
      "Questions & Answers",
    ],
  },
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
      head : "Python: Intermediate" ,
    about:
      "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best!",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
    include: [
      "5 hours of recorded sessions",
      "3 assignments",
      "1 mini-project",
      "Real-time contents ",
      "Questions & Answers",
    ],
  },
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
      head : "Python: Expert " ,
    about:
      "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best!",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
    include: [
      "5 hours of recorded sessions",
      "3 assignments",
      "1 mini-project",
      "Real-time contents ",
      "Questions & Answers",
    ],
  },
  // Python Ends


  // Bigdata Hadoop
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
      head : "Bigdata Hadoop: Beginner  " ,
    about:
      "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best!",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
    include: [
      "5 hours of recorded sessions",
      "3 assignments",
      "1 mini-project",
      "Real-time contents ",
      "Questions & Answers",
    ],
  },
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
      head : "Bigdata Hadoop: Intermediate  " ,
    about:
      "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best!",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
    include: [
      "5 hours of recorded sessions",
      "3 assignments",
      "1 mini-project",
      "Real-time contents ",
      "Questions & Answers",
    ],
  },
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
      head : "Bigdata Hadoop: Expert  " ,
    about:
      "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best!",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
    include: [
      "5 hours of recorded sessions",
      "3 assignments",
      "1 mini-project",
      "Real-time contents ",
      "Questions & Answers",
    ],
  },
  // Bigdata Hadopp


  // Automation Anywhere---
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
      head : "Automation Anywhere : Beginner  " ,
    about:
      "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best!",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
    include: [
      "5 hours of recorded sessions",
      "3 assignments",
      "1 mini-project",
      "Real-time contents ",
      "Questions & Answers",
    ],
  },
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
      head : "Automation Anywhere : Intermediate  " ,
    about:
      "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best!",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
    include: [
      "5 hours of recorded sessions",
      "3 assignments",
      "1 mini-project",
      "Real-time contents ",
      "Questions & Answers",
    ],
  },
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
      head : "Automation Anywhere : Expert  " ,
    about:
      "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best!",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
    include: [
      "5 hours of recorded sessions",
      "3 assignments",
      "1 mini-project",
      "Real-time contents ",
      "Questions & Answers",
    ],
  },
  // Automotion Anywhere --

  // Deep Learning ---
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
      head : " Deep Learning  : Beginner  " ,
    about:
      "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best!",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
    include: [
      "5 hours of recorded sessions",
      "3 assignments",
      "1 mini-project",
      "Real-time contents ",
      "Questions & Answers",
    ],
  },
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
      head : "Deep Learning: Intermediate  " ,
    about:
      "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best!",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
    include: [
      "5 hours of recorded sessions",
      "3 assignments",
      "1 mini-project",
      "Real-time contents ",
      "Questions & Answers",
    ],
  },
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
      head : "Deep Learning: Expert  " ,
    about:
      "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best!",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
    include: [
      "5 hours of recorded sessions",
      "3 assignments",
      "1 mini-project",
      "Real-time contents ",
      "Questions & Answers",
    ],
  },
// Deppp Learning --


// UI--
{
  image:
    "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
    head : "UI Path  : Beginner  " ,
  about:
    "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best!",
  detail:
    "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
  include: [
    "5 hours of recorded sessions",
    "3 assignments",
    "1 mini-project",
    "Real-time contents ",
    "Questions & Answers",
  ],
},
{
  image:
    "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
    head : "UI Path  : Intermediate  " ,
  about:
    "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best!",
  detail:
    "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
  include: [
    "5 hours of recorded sessions",
    "3 assignments",
    "1 mini-project",
    "Real-time contents ",
    "Questions & Answers",
  ],
},
{
  image:
    "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
    head : "UI Path : Expert  " ,
  about:
    "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best!",
  detail:
    "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
  include: [
    "5 hours of recorded sessions",
    "3 assignments",
    "1 mini-project",
    "Real-time contents ",
    "Questions & Answers",
  ],
},
// UI -----

// JAVA --
{
  image:
    "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
    head : "JAVA Fullstack : Beginner  " ,
  about:
    "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best!",
  detail:
    "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
  include: [
    "5 hours of recorded sessions",
    "3 assignments",
    "1 mini-project",
    "Real-time contents ",
    "Questions & Answers",
  ],
},
{
  image:
    "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
    head : "JAVA Fullstack : Intermediate  " ,
  about:
    "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best!",
  detail:
    "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
  include: [
    "5 hours of recorded sessions",
    "3 assignments",
    "1 mini-project",
    "Real-time contents ",
    "Questions & Answers",
  ],
},
{
  image:
    "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
    head : "JAVA Fullstack : Expert  " ,
  about:
    "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best!",
  detail:
    "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
  include: [
    "5 hours of recorded sessions",
    "3 assignments",
    "1 mini-project",
    "Real-time contents ",
    "Questions & Answers",
  ],
},
// JAVA ---

// Machine Learning --
{
  image:
    "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
    head : "Machine Learning : Beginner  " ,
  about:
    "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best!",
  detail:
    "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
  include: [
    "5 hours of recorded sessions",
    "3 assignments",
    "1 mini-project",
    "Real-time contents ",
    "Questions & Answers",
  ],
},
{
  image:
    "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
    head : "Machine Learning : Intermediate  " ,
  about:
    "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best!",
  detail:
    "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
  include: [
    "5 hours of recorded sessions",
    "3 assignments",
    "1 mini-project",
    "Real-time contents ",
    "Questions & Answers",
  ],
},
{
  image:
    "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
    head : "Machine Learning : Expert  " ,
  about:
    "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best!",
  detail:
    "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
  include: [
    "5 hours of recorded sessions",
    "3 assignments",
    "1 mini-project",
    "Real-time contents ",
    "Questions & Answers",
  ],
},
// Machine Learning


 
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
                      style={{ width: "100%", height: "200px" }}
                      alt=""
                      className="newImage"
                    />
                    <div className="neww">
                      <p style={{ padding: "10px", textAlign: "center" }}>
                        <strong>About This Course :</strong> <br /> {i.about}{" "}
                      </p>
                      <p style={{ padding: "10px", textAlign: "center" }}>
                        <strong>Beginner :</strong> <br /> {i.detail}{" "}
                      </p>
                      <p style={{ padding: "10px", textAlign: "center" }}>
                        <strong>This course includes the following:</strong>{" "}
                        <br />{" "}
                        {i.include?.map((j, index) => (
                          <ul>
                            <li
                              style={{ textAlign: "left", marginLeft: "30px" }}
                            >
                              {j}
                            </li>
                          </ul>
                        ))}{" "}
                      </p>
                    </div>
                  </div>
                  <h3> {i.head} </h3>
                </div>
              </div>
            </>
          );
        })}
      </section>

      {/* <div
        style={{
          marginTop: "3%",
          width: "90%",
          marginLeft: "5%",
          display: "flex",
        }}
      >
        <div>
          <img
            src="https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
            alt=""
            style={{
              height: "450px ",
            }}
          />
        </div>
        <div>
          <p
            style={{
              fontSize: "1.3rem",
              marginLeft: "20px",
              lineHeight: "2.3rem",
            }}
          >
            {" "}
            <strong>About this Course : </strong> Python is a powerful and
            general-purpose programming language. This course is designed by an
            experienced Python expert to provide you the best real-time content.
            This course will help you understand everything needed to excel in
            this programming language. All the best!
          </p>
          <p
            style={{
              fontSize: "1.3rem",
              marginLeft: "20px",
              marginTop: "10px",
              lineHeight: "2.3rem",
            }}
          >
            {" "}
            <strong>Beginner : </strong> s a beginner, it’s important to learn
            everything from the basics. This course will provide you the basic
            knowledge to get started with Python.
          </p>
          <p
            style={{
              fontSize: "1.3rem",
              marginLeft: "20px",
              marginTop: "10px",
              lineHeight: "2.3rem",
            }}
          >
            {" "}
            <strong>This course includes the following: </strong>
            <br />5 hours of recorded sessions
            <br />3 assignments
            <br />1 mini-project
            <br /> Real-time contents
            <br /> Questions & Answers
          </p>
        </div>
      </div> */}
    </>
  );
};

export default MyCourse;
