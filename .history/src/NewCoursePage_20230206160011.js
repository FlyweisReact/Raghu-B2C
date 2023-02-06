
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import img from "./images/cart 5.png";

const NewCoursePage = () => {
  const navigate = useNavigate();
  const  [ open , setOpen ] = useState(false)


  let menuRef = useRef()

  useEffect(() => {
    let handler = (event) => {
      if(!menuRef.current.contains(event.target)){
       setOpen(false)
      }
    }
      document.addEventListener('mousedown' , handler)
  }, []);



  return (
    <>
      <div className="NewCourse">
        <p>ABOUT</p>
      </div>

      <div className="NewCourseHeader">
        <img src={img} alt="" />
        <div></div>
      </div>

      <div className="NewCourseThree">
        <div className="main">
          <button className="list">Java</button>
          <div className="hoverElement specialDiv">
            <div className="bigOne" onClick={() => navigate("/")}>
              <p>BEGINNER</p>
              <div className="last">
                <i class="fa-solid fa-heart"> </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
            <div className="bigOne" onClick={() => navigate("/")}>
              <p>INTERMEDIATE</p>
              <div className="last">
                <i class="fa-solid fa-heart"> </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
            <div className="bigOne" onClick={() => navigate("/")}>
              <p>EXPERT</p>
              <div className="last">
                <i class="fa-solid fa-heart"> </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="main">
          <button className="list">Python</button>
          <div className="hoverElement specialDiv">
            <div className="bigOne" onClick={() => navigate("/")}>
              <p>BEGINNER</p>
              <div className="last">
                <i class="fa-solid fa-heart"> </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
            <div className="bigOne" onClick={() => navigate("/")}>
              <p>INTERMEDIATE</p>
              <div className="last">
                <i class="fa-solid fa-heart"> </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
            <div className="bigOne" onClick={() => navigate("/")}>
              <p>EXPERT</p>
              <div className="last">
                <i class="fa-solid fa-heart"> </i>
                <img src={img} alt="Cart" style={{ width: "30px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default NewCoursePage;
