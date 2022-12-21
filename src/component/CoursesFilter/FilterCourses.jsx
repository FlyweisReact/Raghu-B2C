/** @format */

import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Lowernav from "../LowerNav/Lowernav";
import CardData from "./CardsData";
import { Navigate, useNavigate } from "react-router";
import axios from "axios";

// const allcate = [
//   "All Program",
//   ...new Set(
//     CardData.map((curElem) => {
//       return curElem.category;
//     })
//   ),
// ];

// console.log(allcate);

const FilterCourses = () => {
  const [courses, setCourses] = useState([]);
  const [categoryname, setcategoryname] = useState([]);
  const [id, setId] = useState();

  // const [catItems, setcatItems] = useState();
  const navigate = useNavigate();

  // const FilterCourse = (category) => {
  //   const updateCourse = CardData.filter((curElem) => {
  //     return curElem.category === category;
  //   });
  //   setCourses(updateCourse);
  // };

  useEffect(() => {
    const category = async () => {
      try {
        const url =
          "https://r-education-flyweis.herokuapp.com/user/getcategory";
        const response = await axios.get(url);
        console.log("responseCAte", response);
        setcategoryname(response.data.getcategory);
      } catch (err) {
        console.log("error", err);
      }
    };
    category();
  }, []);

  useEffect(() => {
    const fetchAllCourses = async () => {
      try {
        const url = "https://r-education-flyweis.herokuapp.com/user/getcourse";
        const response = await axios.get(url);
        console.log("response", response);
        setCourses(response.data.getcourse);
      } catch (err) {
        console.log("error", err);
      }
    };
    fetchAllCourses();
  }, []);

  console.log("courses", courses);
  console.log("id", id);
  return (
    <>
      <Lowernav categoryname={categoryname} setCourses={setCourses} />

      <Cards course={courses} />
    </>
  );
};

export default FilterCourses;
