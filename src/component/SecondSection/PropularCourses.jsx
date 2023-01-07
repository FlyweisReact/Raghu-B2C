/** @format */

import React from "react";
import "./propular.scss";
import { BiTimeFive } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import AngularImg from "../../images/angular.png";
import Microfoft from "../../images/microsoft.png";
import Google from "../../images/gmail.png";

import img from '../../images/1 (1).jpg'
import img1 from '../../images/1 (2).jpg'
import img2 from '../../images/1 (3).jpg'

const PropularCourses = () => {
  return (
    <>
      <div className="propular_main_container">
        <div className="propular_header">
          <h2>Propular Courses For Get Job in Market</h2>
        </div>

        <div className="myCour">
          <div>
            <img src={img} alt='' />
          </div>
          <div>
            <img src={img1} alt='' />
          </div>
          <div>
            <img src={img2} alt='' />
          </div>
        </div>

        {/* <div className="cards_wrapper">
          <div className="card_holders">
            <div className="third_Card"> */}
              {/* <div className="fast_card">
                <div className="persentage_circle">
                  <div className="main_circle">
                    {/* ---------------parcentage-circle-------------- */}

                    {/* <div class="container">
                      <div class="row">
                        <div class="col-md-3 col-sm-6">
                          <div class="progress yellow">
                            <span class="progress-left">
                              <span class="progress-bar"></span>
                            </span>
                            <span class="progress-right">
                              <span class="progress-bar"></span>
                            </span>
                            <div class="progress-value">65%</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ----------------------------------------- */}
                  {/* </div>
                </div>
              </div>
            </div> */} 
            {/* <div className="third_Card"> */}
            {/* <div className="second_card">
              <div className="image_container">
                <img src={AngularImg}  alt=''/>
                <div className="price">
                  <h4>₹ xxx</h4>
                </div>
              </div>

              <div className="totaltime">
                {/* <AccessTimeIcon/>  */}
                {/* <BiTimeFive className="biTime" />4 lessions/12weeks
              </div>

              <div className="angularjs">
                <h4>Angular Js Course</h4>

                <p>
                  lorem commodi sed! lorem js angular courses are you fine or
                  sad
                </p>
              </div> */} 

              {/* <div className="lowerDiv">
                <div>
                  <FaUserGraduate />
                </div>
                <div>
                  <p>21,341 students</p>
                </div>
                <div>
                  <FiStar className="star" />
                  <FiStar className="star" />
                  <FiStar className="star" />
                  <FiStar className="star" />
                  <FiStar className="star" />
                </div>
              </div> */}

              {/* <div className="learn_more">
                <span>
                  Learn more <AiOutlineArrowRight />{" "}
                </span>
              </div>
            </div> */}

            {/* </div> */}

            {/* <div className="trd_container">
              <div className="third_Card">
                <h3>
                  Company Working And Hireing <br /> on this Technology
                </h3>
                <div className="companyLogo">
                  <div className="com_logo">
                    <img src={Microfoft} alt="" />
                  </div>
                  <div className="com_logo">
                    <img src={Google} alt="" />
                  </div>
                  <div className="com_logo">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_k_-AUvu9M4YA3OX_wDqOU9m1u4HfVeRx2_ArQrS6lIfCVa2avd9bsnexGSi5Dzvmb4&usqp=CAU"
                      alt=""
                    />
                  </div>
                  <div className="com_logo">
                    <img
                      src="https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png"
                      alt=""
                    />
                  </div>
                  <div className="com_logo">
                    <img
                      src="https://www.upwork.com/static/marketing/ui/master/img/logo-1200x630.png"
                      alt=""
                    />
                  </div>
                  <div className="com_logo">
                    <img
                      src="https://www.lfenergy.org/wp-content/uploads/sites/67/2021/02/Forbes.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div> */}
          {/* </div> */}

          {/* <div className="prev_next-btn">
            <button>
              <AiOutlineArrowLeft />
              Prev
            </button>
            <button>
              Next
              <AiOutlineArrowRight />
            </button>
          </div>
        </div> */}

        {/* ----------------    circle---------------- */}
{/* 
        <figure class="circles"></figure>
        <figure class="circles2"></figure>
        <figure class="circles3"></figure> */}
      </div>
      {/* --------------sticky--------------- */}
    </>
  );
};

export default PropularCourses;
