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
    head: "Python: Beginner",
    aboutHead: "About This Course ",
    about:
      "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best!",
    detailHead: "Beginner",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
    IncludeHead: "This course includes the following : ",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/intermediate/intermediate.jpg",
    head: "Python: Intermediate",
    aboutHead : "About This Course" ,
    about:
      "Python is a powerful and general-purpose programming language. This course is designed byan experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best! ",
      detailHead : "Intermediate" ,
    detail:
      "This course is for people who have basic knowledge about Python and want to learn more practically. This course will help you become familiar with industry standard concepts in Python.",
      IncludeHead : "This course includes the following : " ,
    include: [
      "7 hours of recorded sessions ",
      "3 assignments",
      "1 mini-project",
      "Real-time contents ",
      "Questions & Answers",
    ],
  },
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/expert/expert.jpg",
    head: "Python: Expert ",
    aboutHead : "About This Course" ,
    about:
      "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best! ",
      detailHead : "Intermediate" ,
    detail:
      "This course is for people who have basic knowledge about Python and want to learn more practically. This course will help you become familiar with industry standard concepts in Python.",
      IncludeHead : "This course includes the following :" ,
    include: [
      "7 hours of recorded sessions",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/hadoop/beginner/beginner.jpg",
    head: "Bigdata Hadoop: Beginner  ",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/hadoop/intermediate/intermediate.jpg",
    head: "Bigdata Hadoop: Intermediate  ",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/hadoop/expert/expert.jpg",
    head: "Bigdata Hadoop: Expert  ",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/automation/beginner/beginner.jpg",
    head: "Automation Anywhere : Beginner  ",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/automation/intermediate/intermediate.jpg",
    head: "Automation Anywhere : Intermediate  ",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/automation/expert/expert.jpg",
    head: "Automation Anywhere : Expert  ",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/deeplearn/beginner/beginner.jpg",
    head: " Deep Learning  : Beginner  ",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/deeplearn/intermediate/intermediate.jpg",
    head: "Deep Learning: Intermediate  ",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/deeplearn/expert/expert.jpg",
    head: "Deep Learning: Expert  ",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/uipath/beginner/beginner.jpg",
    head: "UI Path  : Beginner  ",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/uipath/intermediate/intermediate.jpg",
    head: "UI Path  : Intermediate  ",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/uipath/expert/expert.jpg",
    head: "UI Path : Expert  ",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/javafullstack/beginner/beginner.jpg",
    head: "JAVA Fullstack : Beginner  ",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/javafullstackintermediate/intermediate.jpg",
    head: "JAVA Fullstack : Intermediate  ",
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
    head: "JAVA Fullstack : Expert  ",
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
    head: "Machine Learning : Beginner  ",
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
    head: "Machine Learning : Intermediate  ",
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
    head: "Machine Learning : Expert  ",
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
  // Machine Learning--

  // JAVA ---
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
    head: "JAVA : Beginner  ",
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
    head: "JAVA : Intermediate  ",
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
    head: "JAVA : Expert  ",
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
  // JAVA --

  // SalesForce Developer
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
    head: "Salesforce Developer : Beginner  ",
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
    head: "Salesforce Developer : Intermediate  ",
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
    head: "Salesforce Developer : Expert  ",
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
  // Salesforce Developer ---

  // salesForce Admin --
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
    head: "Salesforce Admin : Beginner  ",
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
    head: "Salesforce Admin : Intermediate  ",
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
    head: "Salesforce Admin : Expert  ",
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
  // Salesforce Admin --

  // Microsofe Azure --
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
    head: "Microsoft Azure : Beginner  ",
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
    head: "Microsoft Azure : Intermediate  ",
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
    head: "Microsoft Azure : Expert  ",
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
  // Microsoft Azure --

  // AWS ---
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
    head: "AWS : Beginner  ",
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
    head: "AWS : Intermediate  ",
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
    head: "AWS : Expert  ",
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
  // AWS --

  // Power BI
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
    head: "Power BI  ",
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
  // POwerBI ---
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
                        <strong> {i.aboutHead} </strong> <br /> {i.about}{" "}
                      </p>
                      <p style={{ padding: "10px", textAlign: "center" }}>
                        <strong> {i.detailHead} </strong> <br /> {i.detail}{" "}
                      </p>
                      <p style={{ padding: "10px", textAlign: "center" }}>
                        <strong> {i.IncludeHead}  </strong>{" "}
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
