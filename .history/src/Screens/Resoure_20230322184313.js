/** @format */

import React, { useEffect, useState } from "react";
import img from "../images/66.png";
import img3 from "../images/Rectangle 11.png";
import axios from "axios";
import { useNavigate } from "react-router";


const Resoure = () => {
  const [blog, setBlog] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const navigate = useNavigate()

  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/blog"
      );
      setBlog(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getVideo = async () => {
    try {
      const { data } = await axios.get(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/videos"
      );
      console.log(data.data[0].video)
      setVideoUrl(data.data[0].video);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllBlogs();
    getVideo();
  }, []);


  return (
    <>
      <div className="ResourceFirst">
        <img src={img} alt="" />
        
      </div>
      <div className="ResourceSecond">
        <div className="text">
          <p className="first">Our Latest</p>
          <p className="second">Articles & Blogs</p>
        </div>

        <div className="other">
            <img src={blog?.data?.[0]?.image} alt="" />
            <div className="down">
              <p className="upper">  {blog?.data?.[0]?.date} </p>
              <p className="mid">{blog?.data?.[0]?.desc.substring(0, 100) + "..."}</p>
              <p className="last" onClick={() => navigate("/detailReasource")} style={{cursor : 'pointer'}}>Read More...</p>
            </div>
          </div>
        <div className="other">
            <img src={blog?.data?.[1]?.image} alt="" />
            <div className="down">
              <p className="upper">  {blog?.data?.[1]?.date} </p>
              <p className="mid">{blog?.data?.[1]?.desc.substring(0, 100) + "..."}</p>
              <p className="last" onClick={() => navigate("/detailReasource1")} style={{cursor : 'pointer'}}>Read More...</p>
            </div>
          </div>
        <div className="other">
            <img src={blog?.data?.[2]?.image} alt="" />
            <div className="down">
              <p className="upper"> {blog?.data?.[2]?.date} </p>
              <p className="mid">{blog?.data?.[2]?.desc.substring(0, 100) + "..."}</p>
              <p className="last" onClick={() => navigate("/detailReasource3")} style={{cursor : 'pointer'}}>Read More...</p>
            </div>
          </div>

      </div>

      <div className="ResourceFirst" style={{ marginTop: "2%" }}>
        <img src={img3} alt="" />
      </div>

      <div className="ResourceThird">
        <p className="Text">
          Informative <br />
          <span style={{ color: "#423C84" }}>Videos</span>
        </p>
        <div className="videoDiv">
          <video controls src={videoUrl}>
            {/* <source src={video} type="video/mp4" /> */}
            Your browser does not support HTML video.
          </video>
        </div>
      </div>
    </>
  );
};

export default Resoure;
