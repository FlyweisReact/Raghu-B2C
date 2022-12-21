import React from "react";

import "./program.scss";
import { GiGraduateCap } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";
import Img from "../../images/online.png";

const OurProgram = () => {
  return (
    <>
      <div className="program_main_container">
        <div className="program_header">
          <h1>Our Programs</h1>
        </div>

        <div className="wrappers">
          <div className="program_main_container">
            <div className="program_left_image">
              <div className="p_left_img">
                <img src={Img} alt="images" />
              </div>
            </div>
            <div className="program_right_des">
              <div className="p_right_des">
                <div className="paragraph">
                  <p>
                    {/* Lorem, adipisicing elit. debitis cupiditate laborum officiis
                    vero, quasi repellat ab et vel eveniet tempore rerum eum
                    asperiores iste. */}
                    Expert-Works is a creation that emerged from the ongoing difficulties people
experienced in landing positions in their ideal projects. Our unique hybrid model
redefines self-paced learning by providing access to the latest technologies and trends
in the market.
At Expert-Works, we understand that theory and practical knowledge must go
hand-in-hand. That’s why our courses and resources are designed with real-time
assignments and projects, so that you can gain practical experience while learning the
theory. This will help you to stand out among the competition and make you a more
attractive prospect for potential employers.
We have a wide range of courses and resources that are tailored to meet your needs.
Whether you are new to the IT sector or an experienced professional, Expert-Works has
something for everyone.With our comprehensive and up-to-date content, you can stay
ahead of the game. Our courses are designed to help you develop both hard and soft
skills that are required to be successful in the IT sector.
Our team of experienced mentors is dedicated to assisting you with any concerns or
inquiries you may have about your course, including one-on-one calls. You can seek
their assistance even with a mentorship learning model to learn more effectively if you
believe you require personal guidance.
So, what are you waiting for?
                  </p>
                </div>
                <div className="exited">
                  <h5>We are Exited in Education</h5>
                </div>

                <div className="graduation_div">
                  <GiGraduateCap className="gradu" />
                  <span>22,931 Yearly Graduated</span>
                </div>
                <div className="graduation_div">
                  <FaUniversity className="gradu" />
                  <span>150 University Worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProgram;
