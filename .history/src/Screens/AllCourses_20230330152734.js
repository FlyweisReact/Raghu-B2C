/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";

const AllCourses = () => {
  const [data, setData] = useState([]);

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

  useEffect(() => {
    fetchData()
  },[])

  return (
    <>
      <div></div>
    </>
  );
};

export default AllCourses;
