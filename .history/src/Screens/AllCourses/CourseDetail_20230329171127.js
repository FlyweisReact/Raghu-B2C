import React, {  } from "react";
import img from "../../images/cart 5.png";


const CourseDetail = () => {

  
    return (
      <>
        <div className="CourseDetail">
          <p className="head">Java Beginner Sessions</p>
         <ul>
            <li>Introduction</li>
            <li>Introduction</li>
            <li>Introduction</li>
            <li>Introduction</li>
         </ul>
        </div>
  
        <div className="particualCourseHeader">
          <div>
     
          </div>
          <p>JAVA</p>
          <div className="bigOne">
            <img src={img} alt="" />
            <div className="empty"></div>
          </div>
        </div>
  
        <div className="ParticularCourseThree">
          <div className="main">
            <div className="left">
              <button className="head" >
                {" "}
                Java{" "}
              </button>
            </div>
  
              <div className="right">
                <div className="upper">
                  <div></div>
                  <p className="head">BEGINNER</p>
                  <div>
                    <i class="fa-solid fa-heart"> </i>
                    <img src={img} alt="" />
                  </div>
                </div>
  
                <div className="upper">
                  <div></div>
                  <p className="head">BEGINNER</p>
                  <div>
                    <i class="fa-solid fa-heart"> </i>
                    <img src={img} alt="" />
                  </div>
                </div>
  
                <div className="upper">
                  <div></div>
                  <p className="head">BEGINNER</p>
                  <div>
                    <i class="fa-solid fa-heart"> </i>
                    <img src={img} alt="" />
                  </div>
                </div>
              </div>
       
          </div>
          <div className="bottom">
            <p>Full Course</p>
            <div>
              <i class="fa-solid fa-heart"> </i>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
  
      </>
    );
  };

export default CourseDetail