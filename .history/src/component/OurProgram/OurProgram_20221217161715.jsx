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
