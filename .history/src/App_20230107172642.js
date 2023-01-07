/** @format */

import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./component/common.scss";
import Courses from "./component/pages/courses/Courses";
import Home from "./component/Home";
import Programs from "./component/pages/Programs/Programs";
import Login from "./component/pages/LoginPage/Login";
import CreateAccount from "./component/pages/CreateAccount/CreateAccount";
import UsertakenCourses from "./component/pages/UserTakenCourses/UsertakenCourses";
import ExploreMore from "./component/pages/morecourses/ExploreMore";
import Forgot from "./component/pages/forgotPassword/Forgot";
import OTP from "./component/pages/otp/OTP";
import Reset from "./component/pages/reset/Reset";
import ViewCourses from "./component/pages/viewCourses/ViewCourses";
import SignUpOtp from "./component/pages/signUpOtp/SignUpOtp"
import MyCourse from "./component/pages/Mycourse/MyCourse";
import MyCourseDesc from "./component/pages/Mycourse/MyCourseDesc";
import FreeTrial from "./component/pages/FreeTrial/FreeTrial";
function App() {
  const user = false;

  return (
    <div className="App">
      <Routes>
        <Route exect path="/" element={<Login />} />
        <Route exect path="/emailVerify" element={<Forgot />} />
        <Route exect path="/otp" element={<OTP />} />
        <Route exect path="/reset" element={<Reset />} />
        <Route exect path="/cources" element={<Courses />} />
        <Route exect path="/viewCourses" element={<ViewCourses />} />
        <Route exect path="/program" element={<Programs />} />
        <Route exect path="/home" element={<Home user={user} />} />
        <Route exect path="/create-acount" element={<CreateAccount />} />
        <Route exect path="/signUpOtp" element={<SignUpOtp />} />
        <Route exect path="/user" element={<UsertakenCourses />} />
        <Route exect path="/explore" element={<ExploreMore />} />
        <Route exect path="/myCourse" element={<MyCourse />} />
        <Route exect path="/myCourse/:course" element={<MyCourseDesc />} />
        <Route  exect path="/trial" element={<FreeTrial />} />
        <Route  exect path="/trial" element={<FreeTrial />} />

        
      
      </Routes>
    </div>
  );
}

export default App;
