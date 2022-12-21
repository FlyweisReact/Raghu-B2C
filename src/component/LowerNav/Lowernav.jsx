/** @format */

import React, { useEffect, useState } from "react";
import CardData from "../CoursesFilter/CardsData";
import "./lowernav.scss";
import axios from "axios";
import FilterCourses from "../CoursesFilter/FilterCourses";

const Lowernav = ({ categoryname, setCourses }) => {
  const [id, setId] = useState();

  const CoursesByid = async (id) => {
    try {
      const url = `https://r-education-flyweis.herokuapp.com/user/getcoursebycategory/${id}`;
      const response = await axios.get(url);
      console.log("response==>>>>>", response.data.getcourse);
      setCourses(response.data.getcourse);
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <>
      <div className="lower_nav">
        <div className="lower_nav_container">
          <div className="lower_nav_items">
            {categoryname.map((item) => {
              return (
                <ul onClick={() => CoursesByid(item._id)}>
                  {item.categoryname}
                </ul>
              );
            })}
          </div>
        </div>
      </div>

      {/* <FilterCourses /> */}
    </>
  );
};

export default Lowernav;
