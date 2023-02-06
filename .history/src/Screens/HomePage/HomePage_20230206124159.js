/** @format */

import React from "react";
import "./HomePage.css";

// Images
import img2 from "../../images/2nd image.png";
import img3 from "../../images/Home.png";
import img4 from "../../images/icon.png";
import img5 from "../../images/Home (2).png";
import Footer from "../../Footer";
import MachineLearning from './images/machine learning.jpg'
import PowerBi from './images/power bi.jpg'
import Ai from './images/artificial intelligence.jpg'
import Ai2 from './images/artificial-intelligence.jpg'
import person1 from '../../images/person 1.jpg'
import person2 from '../../images/person 2.jpg'
import person3 from '../../images/person 3.jpg'

import cyberSecurity from './images/cyber security.jpg'

const HomePage = () => {
  return (
    <>
    <Header />
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
          <div>
            <img src={MachineLearning} alt='' />
          </div>
          <p className="head">Machine Learning Beginner</p>
        </div>
        <div className="right">
          <p>
            {" "}
            See Our most viewed <br /> Course videos
          </p>
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
      <div className="newTwoSec">
        <div className="left">
          <div>   <img src={PowerBi} alt='' /></div>
          <p className="head">Power Bi Expert</p>
        </div>
        <div className="left">
          <div>   <img src={Ai} alt='' /></div>
          <p className="head">Artificial Intelligence Intermediate</p>
        </div>
      </div>

      <div className="centerText">What People Say About Us</div>

      <div className="newThreeSec">
        <div className="main">
          <div className="left">
            <img src={person1} alt='' />
          </div>
          <div className="right">
            <p className="desc">
              Many of my coworkers choose to use Expert-works for continuing
              education. I feel it has the best selection, training and
              curriculum vs others I have tried
            </p>
            <p className="head">Dani Moreno / Consultant</p>
          </div>
        </div>

        <div className="main">
          <div className="left">
          <img src={person2} alt='' />
          </div>
          <div className="right">
            <p className="desc">
              I was not sure what to expect , but I was quite impressed when i
              looked into the courses that i’ve bought for some of my students.
            </p>
            <p className="head">Kirthi Ragah/ Professor</p>
          </div>
        </div>

        <div className="main">
          <div className="left">
          <img src={person3} alt='' />
          </div>
          <div className="right">
            <p className="desc">
              Purchased two technolgy based courses. I learned these courses
              in-depth which helped me land my dream job
            </p>
            <p className="head">Deepak/ Student</p>
          </div>
        </div>
      </div>

      <div className="twoSecNew">
        <div className="left">
          <p className="head">Best Technology</p>
          <p className="desc">
            Robotic process automation (RPA) is a software technology that makes
            it easy to build, deploy, and manage software robots that emulate
            humans actions interacting with digital systems and software. Just
            like people, software robots can do things like understand what’s on
            a screen, complete the right keystrokes, navigate systems, identify
            and extract data, and perform a wide range of defined actions. But
            software robots can do it faster and more consistently than people,
            without the need to get up and stretch or take a coffee break
          </p>
          <div className="down">
            <div className="blank">
              <img src={person1} alt='' />
            </div>
            <div>
              <p>Pavan Kumar</p>
              <p>IT Consultant</p>
            </div>
          </div>
        </div>
        <div className="right">
          <p className="head">
            Get The Latest <br /> News Here
          </p>
          <div className="main">
            <div className="blank">
              <img src={cyberSecurity} alt='' />
            </div> 
            <div>
              <p className="upper">09 April 2021 by Admin</p>
              <p className="down">News about cybersecurity</p>
            </div>
          </div>
          <div className="main">
            <div className="blank">
            <img src={Ai2} alt='' />
            </div>
            <div>
              <p className="upper">09 April 2021 by Admin</p>
              <p className="down">News about development of a new AI</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bannerIm">
        <p className="head">
          Let’s Boost Your Career With <br /> The Latest Technolgy
        </p>
        <button
          style={{
            backgroundColor: "#426fec",
            color: "#fff",
            width: "200px",
            border: "1px solid #426fec",
            fontSize: "18px",
            borderRadius: "50px",
            padding: "10px",
            height : '50px',
            marginTop: "50px",

          }}
          className='newBnn'
        >
          Get In Touch
        </button>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
