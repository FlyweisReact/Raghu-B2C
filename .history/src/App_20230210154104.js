/** @format */

import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./component/common.scss";
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
