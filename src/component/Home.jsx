/** @format */

import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Cards from "./Cards/Cards";
import Feedback from "./Feedback/Feedback";
import Hero from "./Herosection/Hero";
import Lowernav from "./LowerNav/Lowernav";
import OurProgram from "./OurProgram/OurProgram";
import Courses from "./pages/courses/Courses";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import Login from "./pages/LoginPage/Login";
import Programs from "./pages/Programs/Programs";
import UsertakenCourses from "./pages/UserTakenCourses/UsertakenCourses";
import PropularCourses from "./SecondSection/PropularCourses";
import Whyus from "./WhyUs/Whyus";
import axios from "axios";
import FilterCoursese from "../component/CoursesFilter/FilterCourses";

const Home = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function fetchCategory() {
      const url = "https://r-education-flyweis.herokuapp.com/user/getcategory";
      try {
        const response = await axios.get(url);
        console.log("response============>", response);
        setCategory(response.data.getcategory);
      } catch (err) {
        console.log("error", err);
      }
    }
    fetchCategory();
  }, []);

  const fetchCourseByCategoryId = async (id) => {
    try {
      const url = `https://r-education-flyweis.herokuapp.com/user/getcoursebycategory/${id}`;
      const response = await axios.get(url);

      console.log("response========", response);
    } catch (err) {
      console.log("error", err);
    }
  };

  console.log("categories", category);
  return (
    <div>
      <Hero />
      <PropularCourses />
      <OurProgram />
      {/* <Lowernav category={category} /> */}
      <FilterCoursese />
      <Whyus />
      <Feedback />

      <Footer />
    </div>
  );
};

export default Home;
