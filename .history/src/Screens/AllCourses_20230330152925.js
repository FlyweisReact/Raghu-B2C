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
        <div className="AllCourse">
        {data?.message?.map((i, index) =>
          i.levels.map((a, index) => (
            <div className="mainDiv" key={index}>
              <img
                src={a.image}
                alt={a.level}
                // onClick={() => navigate("/NewCoursePage")}
                // onClick={() => navigate("/particularCourse")}
                style={{ cursor: "pointer" }}
              />
              <p
                style={{
                  maxWidth: "300px",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                {a.about}
              </p>
              <div className="btnDiv">
                <button
                  style={{
                    border: "1px solid #FDCA71",
                    backgroundColor: "#FDCA71",
                    color: "black",
                  }}
                //   onClick={() => navigate("/cart")}
                >
                  Buy Now
                </button>
                <button
                  style={{
                    border: "1px solid #000",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                //   onClick={() => {
                //     setCourseId(a._id);
                //     setCourseName(a.title);
                //     setCoursePrice(a.actualprice);

                //     setModalShow(true);
                //   }}
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
