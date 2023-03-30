/** @format */

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Billing from "./Screens/Biiling/Billing";
import ThankYOu from "./Screens/Thankyou/ThankYOu";
import HomePage from "./Screens/HomePage/HomePage";
import NewCoursePage from "./NewCoursePage";
import Cart from "./Screens/Cart/Cart";
import FreeTrial from "./Screens/FreeTrial/FreeTrial";
import Wishlist from "./Screens/Wishlist/Wishlist";
import GetInTouch from "./Screens/GetInTouch/GetInTouch";
import SecondCourse from "./Screens/AllCourses/SecondCourse";
import About from "./Screens/GetInTouch/About";
import Resoure from "./Screens/Resoure";
import DetailResource from "./Screens/DetailResource";
import DetailResouce1 from "./Screens/DetailResouce1";
import DetailResource3 from "./Screens/DetailResource3";
import ParticularCourse from "./Screens/AllCourses/ParticularCourse";
import CourseDetail from "./Screens/AllCourses/CourseDetail";
import Bought from "./Screens/AllCourses/Bought";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exect path="/" element={<HomePage />} />
        <Route exect path="/" element={<HomePage />} />

        <Route exect path="/secondCourse" element={<SecondCourse />} />
        <Route exect path="/freeTrial" element={<FreeTrial />} />
        <Route exect path="/NewCoursePage" element={<NewCoursePage />} />
        <Route exect path="/cart" element={<Cart />} />
        <Route exect path="/billing" element={<Billing />} />
        <Route exect path="/thank" element={<ThankYOu />} />
        <Route exect path="/wishlist" element={<Wishlist />} />
        <Route exect path="/getInTouch" element={<GetInTouch />} />
        <Route exect path="/about" element={<About />} />
        <Route exect path="/resource" element={<Resoure />} />
        <Route exect path="/detailReasource" element={<DetailResource />} />
        <Route exect path="/detailReasource1" element={<DetailResouce1 />} />
        <Route exect path="/detailReasource3" element={<DetailResource3 />} />
        <Route path="/particularCourse" element={<ParticularCourse />} />
        <Route path="/course/detail" element={<CourseDetail />} />
        <Route path="/bought" element={<Bought />} />
      </Routes>
    </div>
  );
}

export default App;
