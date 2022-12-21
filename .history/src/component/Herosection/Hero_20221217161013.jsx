/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import "./hero.scss";
import { BsArrowRight } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import Topbar from "../navigation/Topbar";
import { Home, LibraryBooks, Person } from "@mui/icons-material";
import DevicesIcon from "@mui/icons-material/Devices";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const Hero = () => {
  const [click, setclick] = useState(false);

  return (
    <>
      <div className="Main_container">
        <div className="nav_Section">
          <Topbar />
        </div>

        <div className="description_section">
          <div className="headings">
            <h1>Learn From the Experts</h1>
            <h1>Learn From the Experts</h1>
          </div>
          <div className="hero_par">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
              maiores saepe aliquid omnis harum facere earum maxime sit aperiam
              consequuntur sunt inventore veritatis, possimus tenetur dolore
              voluptates. Quisquam, odio quod.
            </p>
          </div>

          <div className="par_btn">
            <button>Learn More</button>
          </div>
        </div>

        <div className="lowerSection">
          <div className="content_wrapper">
            <div className="total_nmbr">
              <h1>1234+</h1>
            </div>
            <div className="total_student">
              <h2>Student Enrolled</h2>
            </div>
          </div>
          <div className="content_wrapper">
            <div className="total_nmbr">
              <h1>1234+</h1>
            </div>
            <div className="total_student">
              <h2>Student Enrolled</h2>
            </div>
          </div>
          <div className="content_wrapper">
            <div className="total_nmbr">
              <h1>1234+</h1>
            </div>
            <div className="total_student">
              <h2>Student Enrolled</h2>
            </div>
          </div>
          <div className="content_wrapper">
            <div className="total_nmbr">
              <h1>1234+</h1>
            </div>
            <div className="total_student">
              <h2>Student Enrolled</h2>
            </div>
          </div>
        </div>

        <div className="quote">
          <h2>
            <h2>
              " If Your Are Not Educating Yourself, <br /> No One Will Help You
              "{" "}
            </h2>
          </h2>
        </div>

        <div className="access_your_skills">
          <Link to="/login" className="access_skils">
            <h2>
              Access Your Skills <BsArrowRight />{" "}
            </h2>
          </Link>
        </div>

        <div className="circle"></div>

        {/* <div className="arrow_for_up_down">

        <Link to='/'>
            <KeyboardDoubleArrowUpIcon className='links'/>
        
        </Link>

       


      </div> */}

        {/* --------------sticky--------------- */}

        {/* -------------------------------   */}
      </div>
    </>
  );
};

export default Hero;
