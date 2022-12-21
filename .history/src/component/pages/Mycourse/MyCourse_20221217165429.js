/** @format */

import React from "react";
import { GoSearch } from "react-icons/go";
import Topbar from "../../navigation/Topbar";

const MyCourse = () => {
  return (
    <>
      <div className="courses_main_container">
        <div className="upper_header_container">
          <div className="course_header_content">
            <div className="navbarss">
              <Topbar />
            </div>

            <div className="search">
              <div className="search_container">
                <input type="text" placeholder="Search Cources" />
                <GoSearch className="searchIcon" />
              </div>

              <div className="sorted">

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCourse;
