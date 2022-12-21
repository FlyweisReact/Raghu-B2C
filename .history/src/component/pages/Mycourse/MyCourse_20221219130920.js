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
    aboutHead: "About This Course",
    about:
      "Python is a powerful and general-purpose programming language. This course is designed byan experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best! ",
    detailHead: "Intermediate",
    detail:
      "This course is for people who have basic knowledge about Python and want to learn more practically. This course will help you become familiar with industry standard concepts in Python.",
    IncludeHead: "This course includes the following : ",
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
    aboutHead: "About This Course",
    about:
      "Python is a powerful and general-purpose programming language. This course is designed by an experienced Python expert to provide you the best real-time content. This course will help you understand everything needed to excel in this programming language. All the best! ",
    detailHead: "Intermediate",
    detail:
      "This course is for people who have basic knowledge about Python and want to learn more practically. This course will help you become familiar with industry standard concepts in Python.",
    IncludeHead: "This course includes the following :",
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
    aboutHead: "About This Course",
    about:
      "Big Data is a popular term in the IT industry and is used by giants like Google, Facebook, and Yahoo. This course is designed by an experienced Big Data engineer to make you practically strong, not just theoretically. You will get real-time experience with this course and gain practical knowledge. All the best! ",
    detailHead: "Beginner",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the   basic knowledge to get started with Big Data Hadoop",
    IncludeHead: "This course includes the following :",
    include: [
      "14 hours of recorded sessions",
      "5 assignments",
      "1 mini-project",
      "Real-time contents ",
      "Questions & Answers",
    ],
  },
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/hadoop/intermediate/intermediate.jpg",
    head: "Bigdata Hadoop: Intermediate  ",
    aboutHead: "About This Course",
    about:
      "Big Data is a popular term in the IT industry and is used by giants like Google, Facebook, and Yahoo. This course is designed by an experienced Big Data engineer to make you practically strong, not just theoretically. You will get real-time experience with this course and gain practical  knowledge. All the best!",
    detailHead: "Intermediate",
    detail:
      "This course is for people who have basic knowledge about Big Data and want to learn more      practically. This course will help you become familiar with industry standard concepts in Big      Data Hadoop",
    IncludeHead: "This course includes the following :",
    include: [
      "6 hours of recorded sessions",
      "4 assignments",
      "1 mini-project",
      "Real-time contents ",
      "Questions & Answers",
    ],
  },
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/hadoop/expert/expert.jpg",
    head: "Bigdata Hadoop: Expert  ",
    aboutHead: "About This Course",
    about:
      "Big Data is a popular term in the IT industry and is used by giants like Google, Facebook, and  Yahoo. This course is designed by an experienced Big Data engineer to make you practically  strong, not just theoretically. You will get real-time experience with this course and gain practical       knowledge. All the best!!",
    detailHead: "Expert",
    detail:
      "This course is for people who have Intermediate level knowledge in Big Data and want to      become an expert. You will get the right practical knowledge to become a Big Data Hadoop      expert with this course.      ",

    IncludeHead: "This course includes the following :",

    include: [
      "6 hours of recorded sessions",
      "4 assignments",
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
    aboutHead: "About This Course",
    about:
      "Automation Anywhere is a global leader in Robotic Process Automation! This course is     designed by an expert to provide you with the best real-time content. This course will help you    understand everything needed to excel in this industry. All the best! ",
    detailHead: "Beginner",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
     IncludeHead: "This course includes the following :",   include: [
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
    aboutHead: "About This Course",
    about:
      "Automation Anywhere is a global leader in Robotic Process Automation! This course is      designed by an expert to provide you with the best real-time content. This course will help you      understand everything needed to excel in this industry. All the best!      ",
    detailHead: "Beginner",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
     IncludeHead: "This course includes the following :",   include: [
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
    aboutHead: "About This Course",
    about:
      "Automation Anywhere is a global leader in Robotic Process Automation! This course is      designed by an expert to provide you with the best real-time content. This course will help you      understand everything needed to excel in this industry. All the best!",
    detailHead: "Beginner",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
      IncludeHead: "This course includes the following :",  include: [
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
    aboutHead: "About This Course",
    about:
      "Deep Learning is an AI function that imitates the human brain in processing data and creating      patterns useful for decision making. This course is designed by an experienced Deep Learning      expert to provide you the best real-time content. This course will help you understand everything      needed to excel in this industry. All the best!      ",
    detailHead: "Beginner",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
     IncludeHead: "This course includes the following :",   include: [
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
    aboutHead: "About This Course",
    about:
      "Deep Learning is an AI function that imitates the human brain in processing data and creating      patterns useful for decision making. This course is designed by an experienced Deep Learning      expert to provide you the best real-time content. This course will help you understand everything      needed to excel in this industry. All the best!",
    detailHead: "Beginner",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
      IncludeHead: "This course includes the following :",  include: [
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
    aboutHead: "About This Course",
    about:
      "Deep Learning is an AI function that imitates the human brain in processing data and creating  patterns useful for decision making. This course is designed by an experienced Deep Learning      expert to provide you the best real-time content. This course will help you understand everything      needed to excel in this industry. All the best!",
    detailHead: "Beginner",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
      IncludeHead: "This course includes the following :",  include: [
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
    aboutHead: "About This Course",
    about:
      "UiPath software offers solutions for enterprises to automate repetitive office tasks for rapid      business transformation. In today’s digital world, it’s impossible to carry out tasks without      automation. This course is designed by a UI Path expert and brought to you by Expert-Works      with real-time content",
    detailHead: "Beginner",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
      IncludeHead: "This course includes the following :",  include: [
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
    aboutHead: "About This Course",
    about:
      "UiPath software offers solutions for enterprises to automate repetitive office tasks for rapid      business transformation. In today’s digital world, it’s impossible to carry out tasks without      automation. This course is designed by a UI Path expert and brought to you by Expert-Works      with real-time content.",
    detailHead: "Beginner",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
      IncludeHead: "This course includes the following :", include: [
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
    aboutHead: "About This Course",
    about:
      "Ui Path software offers solutions for enterprises to automate repetitive office tasks for rapid      business transformation. In today’s digital world, it’s impossible to carry out tasks without      automation. This course is designed by a UI Path expert and brought to you by Expert-Works      with real-time content.",
    detailHead: "Beginner",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
      IncludeHead: "This course includes the following :",  include: [
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
    aboutHead: "About This Course",
    about:
      "Java Full Stack developers are highly-paid and are considered ‘Masters of Web Development’.  With this course, you will gain expertise in Full Stack tools and frameworks that work with JAVA.      This course is designed by a JAVA Full Stack expert to give you the best content with real-time      experience. Hope you have a great time learning JAVA Full Stack!",
    detailHead: "Beginner",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
      IncludeHead: "This course includes the following :",   include: [
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
    aboutHead: "About This Course",
    about:
      "Java Full Stack developers are highly-paid and are considered ‘Masters of Web Development’.      With this course, you will gain expertise in Full Stack tools and frameworks that work with JAVA.     This course is designed by a JAVA Full Stack expert to give you the best content with real-time      experience. Hope you have a great time learning JAVA Full Stack!",
    detailHead: "Beginner",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
      IncludeHead: "This course includes the following :",   include: [
      "5 hours of recorded sessions",
      "3 assignments",
      "1 mini-project",
      "Real-time contents ",
      "Questions & Answers",
    ],
  },
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/javafullstackexpert/expert.jpg",
    head: "JAVA Fullstack : Expert  ",
    aboutHead: "About This Course",
    about:
      "Java Full Stack developers are highly-paid and are considered ‘Masters of Web Development’.      With this course, you will gain expertise in Full Stack tools and frameworks that work with JAVA.      This course is designed by a JAVA Full Stack expert to give you the best content with real-time      experience. Hope you have a great time learning JAVA Full Stack!",
    detailHead: "Beginner",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
      IncludeHead: "This course includes the following :",   include: [
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/maclearnbeginner/beginner1.jpg",
    head: "Machine Learning : Beginner  ",
    aboutHead: "About This Course",
    about:
      "Machine Learning is the most happening technology right now and with unlimited job      opportunities. It is a branch of artificial intelligence based on the idea that machines can actually      learn from data and hence, decisions can be made with minimal human intervention. This      course is designed by the best industry expert to provide you the best content. We encourage      you to practice more. All the best!",
    detailHead: "Beginner",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
      IncludeHead: "This course includes the following :",  include: [
      "5 hours of recorded sessions",
      "3 assignments",
      "1 mini-project",
      "Real-time contents ",
      "Questions & Answers",
    ],
  },
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/machinelearn/intermediate/intermediate.jpg",
    head: "Machine Learning : Intermediate  ",
    aboutHead: "About This Course",
    about:
      "Machine Learning is the most happening technology right now and with unlimited job      opportunities. It is a branch of artificial intelligence based on the idea that machines can actually      learn from data and hence, decisions can be made with minimal human intervention. This      course is designed by the best industry expert to provide you the best content. We encourage      you to practice more. All the best!      ",
    detailHead: "Beginner",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
      IncludeHead: "This course includes the following :",   include: [
      "5 hours of recorded sessions",
      "3 assignments",
      "1 mini-project",
      "Real-time contents ",
      "Questions & Answers",
    ],
  },
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/machinelearn/expert/expert.jpg",
    head: "Machine Learning : Expert  ",
    aboutHead: "About This Course",
    about:
      "Machine Learning is the most happening technology right now and with unlimited job      opportunities. It is a branch of artificial intelligence based on the idea that machines can actually      learn from data and hence, decisions can be made with minimal human intervention. This      course is designed by the best industry expert to provide you the best content. We encourage      you to practice more. All the best!      ",
    detailHead: "Beginner",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
      IncludeHead: "This course includes the following :",  include: [
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/javabeginner1/Beginner.jpg",
    head: "JAVA : Beginner  ",
    aboutHead: "About This Course",
    about:
      "Let us take you to the world of one of the top programming languages, JAVA! This course is      designed by an experienced JAVA programmer to provide you the best real-time content. This      course will help you understand everything needed to excel in this programming language. All      the best!",
    detailHead: "Beginner",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
      IncludeHead: "This course includes the following :",   include: [
      "5 hours of recorded sessions",
      "3 assignments",
      "1 mini-project",
      "Real-time contents ",
      "Questions & Answers",
    ],
  },
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/javaintermediate/Intermediate.jpg",
    head: "JAVA : Intermediate  ",
    aboutHead: "About This Course",
    about:
      "Let us take you to the world of one of the top programming languages, JAVA! This course is      designed by an experienced JAVA programmer to provide you the best real-time content. This      course will help you understand everything needed to excel in this programming language. All      the best!      ",
    detailHead: "Beginner",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
      IncludeHead: "This course includes the following :",  include: [
      "5 hours of recorded sessions",
      "3 assignments",
      "1 mini-project",
      "Real-time contents ",
      "Questions & Answers",
    ],
  },
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/javaexpert/Expert.jpg",
    head: "JAVA : Expert  ",
    aboutHead: "About This Course",
    about:
      "Let us take you to the world of one of the top programming languages, JAVA! This course is      designed by an experienced JAVA programmer to provide you the best real-time content. This      course will help you understand everything needed to excel in this programming language. All      the best!      ",
    detailHead: "Beginner",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
      IncludeHead: "This course includes the following :",   include: [
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/salesforce/beginner/beginner.jpg",
    head: "Salesforce Developer : Beginner  ",
    aboutHead: "About This Course",
    about:
      "A Salesforce Developer plays an important role in Customer Relationship Management! This      course is designed by an expert to provide you with the best real-time content. This course will      help you understand everything needed to excel as a Salesforce Developer. All the best!",
    detailHead: "Beginner",
    detail:
      "As a beginner, it’s important to learn everything from the basics. This course will provide you the basic knowledge to get started with Python.",
      IncludeHead: "This course includes the following :",  include: [
      "5 hours of recorded sessions",
      "3 assignments",
      "1 mini-project",
      "Real-time contents ",
      "Questions & Answers",
    ],
  },
  {
    image:
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/salesforce/intermediate/intermediate.jpg",
    head: "Salesforce Developer : Intermediate  ",
    aboutHead: "About This Course",
    about:
      "A Salesforce Developer plays an important role in Customer Relationship Management! This      course is designed by an expert to provide you with the best real-time content. This course will      help you understand everything needed to excel as a Salesforce Developer. All the best!",
    detailHead: "Beginner",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/salesforce/expert/expert.jpg",
    head: "Salesforce Developer : Expert  ",
    aboutHead: "About This Course",
    about:
      "A Salesforce Developer plays an important role in Customer Relationship Management! This      course is designed by an expert to provide you with the best real-time content. This course will      help you understand everything needed to excel as a Salesforce Developer. All the best!",
    detailHead: "Beginner",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/salesforceadmin/beginner/beginner.jpg",
    head: "Salesforce Admin : Beginner  ",
    aboutHead: "About This Course",
    about:
      "Salesforce administrators help companies run their businesses successfully by managing the      Salesforce cloud ecosystem and solving their business problems. This course is designed by an      expert to provide you with the best real-time content. This course will help you understand      everything needed to become a Salesforce admin. All the best!",
    detailHead: "Beginner",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/salesforceadmin/intermediate/intermediate.jpg",
    head: "Salesforce Admin : Intermediate  ",
    aboutHead: "About This Course",
    about:
      "Salesforce administrators help companies run their businesses successfully by managing the      Salesforce cloud ecosystem and solving their business problems. This course is designed by an      expert to provide you with the best real-time content. This course will help you understand      everything needed to become a Salesforce admin. All the best!      ",
    detailHead: "Beginner",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/salesforceadmin/expert/expert.jpg",
    head: "Salesforce Admin : Expert  ",
    aboutHead: "About This Course",
    about:
      "Salesforce administrators help companies run their businesses successfully by managing the      Salesforce cloud ecosystem and solving their business problems. This course is designed by an      expert to provide you with the best real-time content. This course will help you understand      everything needed to become a Salesforce admin. All the best!      ",
    detailHead: "Beginner",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/azure/beginner/beginner.jpg",
    head: "Microsoft Azure : Beginner  ",
    aboutHead: "About This Course",
    about:
      "Microsoft Azure is one of the best cloud computing services. This course is designed by an      expert to provide you with the best real-time content. This course will help you understand      everything needed to become an expert in Azure. All the best!      ",
    detailHead: "Beginner",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/azure/intermediate/intermediate.jpg",
    head: "Microsoft Azure : Intermediate  ",
    aboutHead: "About This Course",
    about:
      "Microsoft Azure is one of the best cloud computing services. This course is designed by an      expert to provide you with the best real-time content. This course will help you understand      everything needed to become an expert in Azure. All the best!",
    detailHead: "Beginner",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/azure/expert/expert.jpg",
    head: "Microsoft Azure : Expert  ",
    aboutHead: "About This Course",
    about:
      "Microsoft Azure is one of the best cloud computing services. This course is designed by an    expert to provide you with the best real-time content. This course will help you understand      everything needed to become an expert in Azure. All the best!      ",
    detailHead: "Beginner",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/aws/intermediate/intermediate.jpg",
    head: "AWS : Beginner  ",
    aboutHead: "About This Course",
    about:
      "AWS is a widely used secure, cloud services platform that offers all these computing services      like storage, computing, content delivery, analytics, computing, database and management. In      other words, AWS lets you run web and application servers on the internet to host dynamic      websites, store all your files in one place securely and use managed databases like MySQL,      Oracle and PostgreSQL to store information. The best part is, you can access your files from      anywhere in the world!",
    detailHead: "Beginner",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/aws/beginner/beginner.jpg",
    head: "AWS : Intermediate  ",
    aboutHead: "About This Course",
    about:
      "AWS is a widely used secure, cloud services platform that offers all these computing services      like storage, computing, content delivery, analytics, computing, database and management. In      other words, AWS lets you run web and application servers on the internet to host dynamic      websites, store all your files in one place securely and use managed databases like MySQL,      Oracle and PostgreSQL to store information. The best part is, you can access your files from      anywhere in the world!      ",
    detailHead: "Beginner",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/aws/expert/expert.jpg",
    head: "AWS : Expert  ",
    aboutHead: "About This Course",
    about:
      "AWS is a widely used secure, cloud services platform that offers all these computing services      like storage, computing, content delivery, analytics, computing, database and management. In      other words, AWS lets you run web and application servers on the internet to host dynamic      websites, store all your files in one place securely and use managed databases like MySQL,      Oracle and PostgreSQL to store information. The best part is, you can access your files from      anywhere in the world!",
    detailHead: "Beginner",
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
      "https://d3s24np0er9fug.cloudfront.net/phase1/courses/powerbi/beginner.jpg",
    head: "Power BI  ",
    aboutHead: "About This Course",
    about:
      "This is a complete course on Power Bi divided into different parts.You will be first introduced to      the SQL and Data Warehousing concepts, which are divided into two parts. After this, you will      learn about PowerBI Desktop (used to create visualizations) under which you will explore      connecting and shaping data, creating a data model, adding calculated fields with DAX and      finally visualizing data with reports and dashboards.Next, you will learn Artificial Intelligence      visuals, creating Python Visuals in PowerBI, and performance tuning and best practices. The      course will end with PowerBI Service, under which you will be learning how to share and      collaborate the reports in your organization.The Demo files and Presentations needed to follow      the course are available for download.      ",
    detailHead: "Beginner",
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
                        <strong> {i.IncludeHead} </strong> <br />{" "}
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
