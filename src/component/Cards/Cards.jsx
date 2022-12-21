/** @format */

import React from "react";
import "./cards.scss";
import Img1 from "../../images/ImageShape.png";
import Img2 from "../../images/java.png";
import Img3 from "../../images/jee_mains.png";
import Img4 from "../../images/py.png";
import Img5 from "../../images/cat.png";
import Img6 from "../../images/aws.png";
import Img7 from "../../images/neet.png";
import { AiFillStar } from "react-icons/ai";
import { MdStarHalf } from "react-icons/md";
import { Link } from "react-router-dom";
import CardData from "../CoursesFilter/CardsData";
import { useNavigate } from "react-router";

const Cards = ({ course }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="cards_main_container">
        <div className="card_container">
          {/* ---------------------------smallcards------------------ */}
          {course?.map((elm, index) => {
            return (
              <>
                <div
                  onClick={() => navigate("/user", { state: elm })}
                  className="small_card_container"
                  // key={index}
                >
                  <div className="card_img_container">
                    <img src={Img1} alt="" />
                  </div>
                  <div className="coursename">
                    <p>{elm.courseName}</p>

                    <div className="enrloo_btn">
                      <span>{elm.about[0].totalTiming}</span>
                    </div>
                  </div>

                  <div className="course_des">
                    <h6>{elm.about[0].description}</h6>
                  </div>

                  <div className="botton_div">
                    <div className="stars">
                      <AiFillStar className="astar" />
                      <AiFillStar className="astar" />
                      <AiFillStar className="astar" />
                      <AiFillStar className="astar" />
                      <MdStarHalf className="astar" />
                      Price Rs{elm.price}
                    </div>

                    {/* <div className="enroll_btn">
                      <button>Enroll now</button>
                    </div> */}
                  </div>
                </div>
              </>
            );
          })}
          {/* ------------------------------------------------- */}
          {/* ------------------------------------------------- */}
        </div>

        <div className="explore_more_btn">
          <Link to="/explore">
            <button>Explore more Courses</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cards;
