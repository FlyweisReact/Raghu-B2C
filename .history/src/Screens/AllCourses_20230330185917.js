/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

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
    fetchData();
  }, []);
  const navigate = useNavigate();

  return (
    <>

    <p className="AllCourse0">BACK</p>

      <div className="AllCourse1">
        {data?.map((i) =>
          i.levels.map((a, index) => (
            <div className="mainDiv" key={index}>
              <img src={a.image} alt="" style={{ cursor: "pointer" }} />
              <p>{a.about?.substring(0, 200) + "..."}</p>
              <div className="btnDiv">
                <button
                  style={{
                    border: "1px solid #FDCA71",
                    backgroundColor: "#FDCA71",
                    color: "black",
                  }}
                  onClick={() => navigate("/cart")}
                >
                  Buy Now
                </button>
                <button
                  style={{
                    border: "1px solid #000",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                  onClick={() => {
                    navigate("/bought");
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default AllCourses;
