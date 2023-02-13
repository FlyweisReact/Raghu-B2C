/** @format */

import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./component/common.scss";
import Courses from "./component/pages/courses/Courses";
import Home from "./component/Home";
import Programs from "./component/pages/Programs/Programs";
import CreateAccount from "./component/pages/CreateAccount/CreateAccount";
import UsertakenCourses from "./component/pages/UserTakenCourses/UsertakenCourses";
import ExploreMore from "./component/pages/morecourses/ExploreMore";
import Forgot from "./component/pages/forgotPassword/Forgot";
import OTP from "./component/pages/otp/OTP";
import Reset from "./component/pages/reset/Reset";
import ViewCourses from "./component/pages/viewCourses/ViewCourses";
import SignUpOtp from "./component/pages/signUpOtp/SignUpOtp";
import MyCourse from "./component/pages/Mycourse/MyCourse";
import MyCourseDesc from "./component/pages/Mycourse/MyCourseDesc";
import Subscription from "./component/pages/FreeTrial/Subscription";
import Billing from "./component/pages/FreeTrial/Billing";
import ThankYOu from "./component/pages/FreeTrial/ThankYOu";
import HomePage from "./Screens/HomePage/HomePage";
import AllCourseNew from "./AllCourseNew";
import NewCoursePage from "./NewCoursePage";
import Cart from "./Cart";
import FreeTrial from "./Screens/FreeTrial/FreeTrial";
function App() {
  const user = false;

  return (
    <div className="App">
      <Routes>
        <Route exect path="/" element={<HomePage />} />
        <Route exect path="/allCou" element={<AllCourseNew />} />
        <Route exect path="/freeTrial" element={<FreeTrial />} />
        <Route exect path="/NewCoursePage" element={<NewCoursePage />} />
        <Route exect path="/cart" element={<Cart />} />
        <Route exect path="/billing" element={<Billing />} />
        <Route exect path="/thank" element={<ThankYOu />} />




      </Routes>
    </div>
  );
}

export default App;
