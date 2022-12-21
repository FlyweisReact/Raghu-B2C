/** @format */

import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import "./program.scss";
import Lowernav from "../../LowerNav/Lowernav";
import Cards from "../../Cards/Cards";
import Whyus from "../../WhyUs/Whyus";
import Feedback from "../../Feedback/Feedback";
import Footer from "../../../Footer/Footer";

import ProgramLower from "./ProgramLowerPart/ProgramLower";
import { Link } from "react-router-dom";
import { Home, LibraryBooks } from "@mui/icons-material";
import DevicesIcon from "@mui/icons-material/Devices";
import FilterCourses from "../../CoursesFilter/FilterCourses";
import Topbar from "../../navigation/Topbar";

const Programs = () => {
  return (
    <>
      <div className="main_programs_container">
        <div className="praoragme_banner_contner">
          {/* ==========================navbar====================== */}

          <Topbar />

          {/* <div className="pnavbarss">

                <div className="nav_logo">

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
                <Link to='/programs' className='links'>
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

                

               
              
          </div>
                </div> */}
          {/* ==========================navbar====================== */}
        </div>

        {/* ------------------card-duplicate------------- */}

        <div className="cards_container">
          <div className="programs_header">
            <h2>Overview Of RHCSA | EX200</h2>
          </div>

          <div className="programs_description">
            <h3>
              <GoPrimitiveDot />
              Red hat Certified System Administrator | RHCSA | Ex 2000 traning |
              KR Network Cloud
            </h3>

            <div className="program_par_video">
              <div className="pro_par_left">
                <h4>
                  A red hat hacker is a hacker who takes aggressive steps to
                  stop black hat hackers. While red hat hackers are not
                  inherently evil, they do hat hackers. While red hat hackers
                  are not inherently evil, they do hat hackers. While red hat
                  hackers are not inherently evil, they do hat hackers. While
                  red hat hackers are not inherently evil, they do everything
                  they can to stop the bad guys, including taking matters into
                  their own hands. ... Red hat hackers are often dubbed the
                  Robin Hoods of the virtual world.
                </h4>
              </div>

              <div className="pro_video">
                <iframe
                  height="200"
                  width="100%"
                  className="ifram"
                  src="https://www.youtube.com/embed/il_t1WVLNxk"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* +++++++++++++++++++++++++++++++++++++++++++++++++ */}
        {/* ------------------card-duplicate------------- */}

        <div className="cards_container">
          <div className="programs_header">
            <h2>Course Objective</h2>
          </div>

          <div className="programs_description">
            <h4>
              <GoPrimitiveDot />

              <span>
                Red hat Certified System Administrator | RHCSA | Ex 2000 traning
                | KR Network Cloud
              </span>
            </h4>
          </div>
        </div>

        {/* +++++++++++++++++++++++++++++++++++++++++++++++++ */}
        {/* ------------------card-duplicate------------- */}

        <div className="cards_container">
          <div className="programs_header">
            <h2>You Should be able to demonstrate three skills</h2>
          </div>

          <div className="programs_description">
            <h4>
              <GoPrimitiveDot />
              <span>Install Red Hat Enterprice Linux using KickStar</span>
            </h4>

            <h4>
              <GoPrimitiveDot />
              <span>Manage File System and Logical Volumes</span>
            </h4>
            <h4>
              <GoPrimitiveDot />
              <span>Manage File System and Logical Volumes</span>
            </h4>
            <h4>
              <GoPrimitiveDot />
              <span>Manage File System and Logical Volumes</span>
            </h4>
            <h4>
              <GoPrimitiveDot />
              <span>Manage File System and Logical Volumes</span>
            </h4>
          </div>
        </div>

        {/* +++++++++++++++++++++++++++++++++++++++++++++++++ */}
        {/* ------------------card-duplicate------------- */}

        <div className="cards_container">
          <div className="programs_header">
            <h2>You Should be able to demonstrate three skills</h2>
          </div>

          <ProgramLower />
        </div>
        <div className="submitDetails">
          <button>Submit Your Details</button>
        </div>

        {/* +++++++++++++++++++++++++++++++++++++++++++++++++ */}

        <FilterCourses />
        <Whyus />
        <Feedback />
        <Footer />
      </div>

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
               
          
                 
          
                  
          
                </div>
          
          
                </div> */}

      {/* -------------------------------   */}
    </>
  );
};

export default Programs;
