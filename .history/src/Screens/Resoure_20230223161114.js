/** @format */

import React from "react";
import Header from "../Header/Header.js";
import img from "../images/66.png";
import img2 from "../images/111.png";
import img3 from '../images/Rectangle 11.png'

const Resoure = () => {
  return (
    <>
      <Header />
      <div className="ResourceFirst">
        <img src={img} alt="" />
      </div>
      <div className="ResourceSecond">
        <div className="text">
          <p className="first">Our Latest</p>
          <p className="second">Articles & Blogs</p>
        </div>

        <div  className="other">
          <img src={img2} alt="" />
          <div className="down">
            <p className="upper">January 27,2023</p>
            <p className="mid">Top 5 on demand tech courses to boost your career.</p>
            <p className="last">Read More...</p>
          </div>
        </div>
        <div  className="other">
          <img src={img2} alt="" />
          <div className="down">
            <p className="upper">January 27,2023</p>
            <p className="mid">Top 5 on demand tech courses to boost your career.</p>
            <p className="last">Read More...</p>
          </div>
        </div>
        <div  className="other">
          <img src={img2} alt="" />
          <div className="down">
            <p className="upper">January 27,2023</p>
            <p className="mid">Top 5 on demand tech courses to boost your career.</p>
            <p className="last">Read More...</p>
          </div>
        </div>
      </div>

      <div className="ResourceFirst" style={{marginTop : '2%'}}>
        <img src={img3} alt="" />
      </div>

      <div className="ResourceThird">
        <p> </p>
        <div className='videoDiv'>
        <video controls src={"https://d3s24np0er9fug.cloudfront.net/phase1/public/LMS%20New.mp4"}>
                {/* <source src={video} type="video/mp4" /> */}
                Your browser does not support HTML video.
              </video>
        </div>
      </div>
    </>
  );
};

export default Resoure;
