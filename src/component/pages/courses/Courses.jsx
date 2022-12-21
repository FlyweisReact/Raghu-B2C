/** @format */

import React from "react";
import { BiTime } from "react-icons/bi";
import { GoGraph } from "react-icons/go";
import { GoStar } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Footer from "../../../Footer/Footer";
import { Home, LibraryBooks, Person } from "@mui/icons-material";
import DevicesIcon from "@mui/icons-material/Devices";

import "./course.scss";
import Aws from "../../../images/aws.png";
import Nav from "../../Navbar/Nav";
import { Link } from "react-router-dom";
import Topbar from "../../navigation/Topbar";

const Courses = () => {
  return (
    <>
      <div className="courses_main_container">
        <div className="upper_header_container">
          <div className="course_header_content">
            <div className="navbarss">
              {/* ------------------navbar-------------- */}
              {/* <div className="nav_logo">
            <Link to='/' className='links'>
                <h1>LOGO</h1>

                    </Link>
              </div>

              <div className="nav_items">
                

                <Link to='/' className='links'>
                <ul>Home</ul>
                
                </Link>
                <Link to='/cources' className='links'>
                    <ul>Courses</ul>
                
                </Link>
                <Link to='/program' className='links'>
                <ul>Programs</ul>
                
                </Link>
                
               
              </div>

              <div className="nav_btn">

              <Link to='/login' className='links'>
                  <button className="n_btn">LOGIN</button>
                
                </Link>
              <Link to='/login' className='links'>
                  <button className="n_btn">LOGIN FOR FREE</button>
                
                </Link>

                

               
              
          </div> */}
              <Topbar />

              {/* ======================================================================== */}
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
                    <RiArrowDownSLine />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lower_main_container">
          <div className="left_side_container">
            <div className="course_left_content_holder">
              <div className="h4 skills_levels">
                <h5>Type</h5>
              </div>

              <label className="rad-label">
                <input
                  type="radio"
                  className="rad-input checkmark"
                  name="rad"
                />

                <div className="rad-text">All</div>
              </label>
              <label className="rad-label">
                <input
                  type="radio"
                  className="rad-input checkmark"
                  name="rad"
                />

                <div className="rad-text">Core Courses</div>
              </label>
              <label className="rad-label">
                <input
                  type="radio"
                  className="rad-input checkmark"
                  name="rad"
                />

                <div className="rad-text">Expanded Course</div>
              </label>
              <label className="rad-label">
                <input
                  type="radio"
                  className="rad-input checkmark"
                  name="rad"
                />

                <div className="rad-text">Labs</div>
              </label>

              <div className="skills_levels">
                <h5>Skills Level</h5>

                <hr />
              </div>

              <div className="check_box">
                <label className="container">
                  <input type="checkbox" className="rad-input checkmark" />
                  <span className="checkmark">Beginner</span>
                </label>
                <label className="container">
                  <input type="checkbox" className="rad-input checkmark" />
                  <span className="checkmark">Intermediate</span>
                </label>
                <label className="container">
                  <input type="checkbox" className="rad-input checkmark" />
                  <span className="checkmark">Advance</span>
                </label>
              </div>

              {/* --------------------- */}
              <div className="skills_levels">
                <h5>Subjects</h5>

                <hr />
              </div>

              <div className="check_box">
                <label className="container">
                  <input type="checkbox" className="rad-input checkmark" />
                  <span className="checkmark">Beginner</span>
                </label>
                <label className="container">
                  <input type="checkbox" className="rad-input checkmark" />
                  <span className="checkmark">Intermediate</span>
                </label>
                <label className="container">
                  <input type="checkbox" className="rad-input checkmark" />
                  <span className="checkmark">Advance</span>
                </label>
              </div>
            </div>
          </div>

          {/* ---------------right-------side--------- */}

          <div className="right_side_container">
            <div className="course_right_content_holder">
              <div className="row_dic">
                <div className="logo_holder_div">
                  <img src={Aws} alt="" />
                </div>

                <div className="details_holder_c_div">
                  <h4>
                    AWS Cloud Computing : Fundamentals of Cloud <br />
                    by <span>publisher_name</span>
                  </h4>

                  <div className="details_lower_div">
                    <div className="times">
                      <BiTime />

                      <span>3h 15m</span>
                    </div>

                    <div className="times">
                      <GoGraph />
                      <span>Beginner</span>
                    </div>

                    <div className="times">
                      <GoStar className="star" />
                      <GoStar className="star" />
                      <GoStar className="star" />
                      <GoStar className="star" />
                      <GoStar className="star" />
                      (50)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="course_right_content_holder">
              <div className="row_dic">
                <div className="logo_holder_div">
                  <img src={Aws} alt="" />
                </div>

                <div className="details_holder_c_div">
                  <h4>
                    AWS Cloud Computing : Fundamentals of Cloud <br />
                    by <span>publisher_name</span>
                  </h4>

                  <div className="details_lower_div">
                    <div className="times">
                      <BiTime />

                      <span>3h 15m</span>
                    </div>

                    <div className="times">
                      <GoGraph />
                      <span>Beginner</span>
                    </div>

                    <div className="times">
                      <GoStar className="star" />
                      <GoStar className="star" />
                      <GoStar className="star" />
                      <GoStar className="star" />
                      <GoStar className="star" />
                      (50)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="course_right_content_holder">
              <div className="row_dic">
                <div className="logo_holder_div">
                  <img src={Aws} alt="" />
                </div>

                <div className="details_holder_c_div">
                  <h4>
                    AWS Cloud Computing : Fundamentals of Cloud <br />
                    by <span>publisher_name</span>
                  </h4>

                  <div className="details_lower_div">
                    <div className="times">
                      <BiTime />

                      <span>3h 15m</span>
                    </div>

                    <div className="times">
                      <GoGraph />
                      <span>Beginner</span>
                    </div>

                    <div className="times">
                      <GoStar className="star" />
                      <GoStar className="star" />
                      <GoStar className="star" />
                      <GoStar className="star" />
                      <GoStar className="star" />
                      (50)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="course_right_content_holder">
              <div className="row_dic">
                <div className="logo_holder_div">
                  <img src={Aws} alt="" />
                </div>

                <div className="details_holder_c_div">
                  <h4>
                    AWS Cloud Computing : Fundamentals of Cloud <br />
                    by <span>publisher_name</span>
                  </h4>

                  <div className="details_lower_div">
                    <div className="times">
                      <BiTime />

                      <span>3h 15m</span>
                    </div>

                    <div className="times">
                      <GoGraph />
                      <span>Beginner</span>
                    </div>

                    <div className="times">
                      <GoStar className="star" />
                      <GoStar className="star" />
                      <GoStar className="star" />
                      <GoStar className="star" />
                      <GoStar className="star" />
                      (50)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="course_right_content_holder">
              <div className="row_dic">
                <div className="logo_holder_div">
                  <img src={Aws} alt="" />
                </div>

                <div className="details_holder_c_div">
                  <h4>
                    AWS Cloud Computing : Fundamentals of Cloud <br />
                    by <span>publisher_name</span>
                  </h4>

                  <div className="details_lower_div">
                    <div className="times">
                      <BiTime />

                      <span>3h 15m</span>
                    </div>

                    <div className="times">
                      <GoGraph />
                      <span>Beginner</span>
                    </div>

                    <div className="times">
                      <GoStar className="star" />
                      <GoStar className="star" />
                      <GoStar className="star" />
                      <GoStar className="star" />
                      <GoStar className="star" />
                      (50)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="course_right_content_holder">
              <div className="row_dic">
                <div className="logo_holder_div">
                  <img src={Aws} alt="" />
                </div>

                <div className="details_holder_c_div">
                  <h4>
                    AWS Cloud Computing : Fundamentals of Cloud <br />
                    by <span>publisher_name</span>
                  </h4>

                  <div className="details_lower_div">
                    <div className="times">
                      <BiTime />

                      <span>3h 15m</span>
                    </div>

                    <div className="times">
                      <GoGraph />
                      <span>Beginner</span>
                    </div>

                    <div className="times">
                      <GoStar className="star" />
                      <GoStar className="star" />
                      <GoStar className="star" />
                      <GoStar className="star" />
                      <GoStar className="star" />
                      (50)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        {/* --------------sticky--------------- */}

        {/* <div className="main_container">

<div className="nav_m_container">

  <Link to='/'>
    <Home className='micon'/>
  
  </Link>
  <Link to='/cources'>
  <LibraryBooks className='micon'/>
  
  </Link>
  <Link to='/programs'>
  <DevicesIcon className='micon'/>
  
  </Link>
  <Link to='/user'>
        <Person className='micon'/>
        
   </Link> */}

        {/* 
</div>


</div> */}

        {/* -------------------------------   */}
      </div>
    </>
  );
};

export default Courses;
