/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./usercourses.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useLocation } from "react-router";

const UsertakenCourses = () => {
  const location = useLocation();
  console.log("location", location.state);
  return (
    <>
      <div className="user_taken_courses">
        {/* navbar-container=========> */}

        <div className="user_header_container">
          <div className="nav_logo">
            <Link to="/" className="links">
              <h1>LOGO</h1>
            </Link>
          </div>
          <div className="nav_items">
            <Link to="/" className="links">
              <ul>Home</ul>
            </Link>
            <Link to="/cources" className="links">
              <ul>Courses</ul>
            </Link>
            <Link to="/programs" className="links">
              <ul>Programs</ul>
            </Link>
          </div>
          <div className="username">
            <div className="useravater">
              <>
                <AccountCircleIcon />
              </>
            </div>
            <h4>UserName</h4>
            <ArrowDropDownIcon />
          </div>
        </div>
        {/* // .......navbar----- */}
        <div className="display_courses_container">
          <div className="user_main_contener">
            <div className="courses_lessions">
              <div className="course_name">
                <h3>{location.state.courseName}</h3>
                <hr />
              </div>

              <div className="topics_main">
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
                <div className="topics">
                  <ArrowRightIcon />
                  <div className="which_topic">Topic 1</div>
                </div>
              </div>
            </div>

            {/* ----------middle-----------------   */}
            <div className="videos">
              <div className="video_container">
                <video width="100%" height="400px" controls="controls">
                  <source src="vid.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="sUBTITLE">
                <span>{location.state.about[0].description}</span>
              </div>
            </div>

            {/* ------------right-side--------------------- */}
            <div className="chats">
              <div className="container">
                <div className="forum">
                  <h3>Forum</h3>

                  <div className="main_text_holder">
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                    <div className="textdivs">
                      <span>texts</span>
                    </div>
                  </div>
                </div>
                <div className="doubt">
                  <h6>What's Your doudt ? write here</h6>

                  <div>
                    <textarea id="texts" className="textarea"></textarea>
                  </div>
                  <div className="buttondiv">
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsertakenCourses;
