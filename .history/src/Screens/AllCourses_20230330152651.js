/** @format */

import React from "react";
import axios from "axios";

const AllCourses = () => {


      const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/study/"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };


  return (<>
    <div>

    </div>
  </>);
};

export default AllCourses;
