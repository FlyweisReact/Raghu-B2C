/** @format */

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Billing from "./Screens/Biiling/Billing";
import ThankYOu from "./Screens/Thankyou/ThankYOu";
import HomePage from "./Screens/HomePage/HomePage";
import AllCourseNew from "./Screens/AllCourses/AllCourseNew";
import NewCoursePage from "./NewCoursePage";
import Cart from "./Screens/Cart/Cart";
import FreeTrial from "./Screens/FreeTrial/FreeTrial";
import Wishlist from "./Screens/Wishlist/Wishlist";
import GetInTouch from "./Screens/GetInTouch/GetInTouch";
import SecondCourse from "./Screens/AllCourses/SecondCourse";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exect path="/" element={<HomePage />} />
        <Route exect path="/allCou" element={<AllCourseNew />} />
        <Route exect path='/secondCourse' element={<SecondCourse />} />
        <Route exect path="/freeTrial" element={<FreeTrial />} />
        <Route exect path="/NewCoursePage" element={<NewCoursePage />} />
        <Route exect path="/cart" element={<Cart />} />
        <Route exect path="/billing" element={<Billing />} />
        <Route exect path="/thank" element={<ThankYOu />} />
        <Route exect path="/wishlist" element={<Wishlist />} />
        <Route exect path="/getInTouch" element={<GetInTouch  /> } />
      </Routes>
    </div>
  );
}

export default App;
