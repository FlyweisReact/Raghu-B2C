/** @format */

import React, { useCallback, useEffect, useState } from "react";
import img from "../../images/cart 5.png";
import img1 from "../../images/AA Beg.jpg";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const Bought = () => {
  const navigate = useNavigate();
  const {  courseId, levelId} = useParams()
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [ bought  , setBought ] = useState([])


  function GoBack() {
    navigate(-1);
  }


  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/stduy/levle/${courseId}/${levelId}`
      );
      setTitle(data.result[0].title);
      setData(data);
    } catch (e) {
      console.log(e);
    }
  }, [courseId, levelId]);

  const fetch2 =useCallback(async () => {
    try{
      const { data } = await axios.get(`https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/recomdation/${levelId}`)
      setBought(data)
    }catch(e) { 
      console.log(e)
    }
  },[levelId])


  useEffect(() => {
    fetchData()
    fetch2()
  },[fetchData , fetch2])

  return (
    <>
      <div className="bought">
        <p onClick={() => GoBack()}>BACK</p>
        <div className="bigOne">
          <img src={img} alt="" />
          <div className="empty"></div>
        </div>
      </div>

      <div className="boughtone">
        <div className="left">
          <p className="head">Frequently Bought Together</p>
    {console.log()}
          {bought?.result?.levels?.map((i , index) => (
            <div className="main" key={index}>
            <div className="firstZero">
              <img src={i.image} alt="" />
            </div>

            <div className="first">
              <p className="p1" > level course</p>

              <div className="first1">
                <div>
                  <p className="p2">$3.33</p>
                  <div className="first2">
                    <p style={{ textDecoration: "line-through" }}> $00.00 </p>
                    <p>0.00% off</p>
                  </div>
                </div>
                <div style={{ display: "grid" }}>
                  <input type="checkbox" />
                </div>
              </div>
            </div>
          </div>
          ))}


        

          <div className="main2">
            <p>
              {" "}
              Total : <strong>$9.99</strong>{" "}
            </p>
            <button>Add all to cart</button>
          </div>

          <div className="main3">
            <p className="p1">Trending courses </p>
            <div className="three-sec">
              <div>
                <p>AWS</p>
              </div>
              <div>
                <p>POWER BI</p>
              </div>
              <div>
                <p>PYTHON</p>
              </div>
              <div>
                <p>PYTHON</p>
              </div>
              <div>
                <p>PYTHON</p>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <p className="CourseName" style={{textTransform : 'capitalize'}} > {title} level course</p>
          <video
            controls
            src={data?.result?.[0]?.video}
          >
            Your browser does not support HTML video.
          </video>
          <div className="price">
            <p className="actualP"> ${data?.result?.[0]?.price} </p>
            <p className="fakeP"> ${data?.result?.[0]?.actualprice}</p>
            <p className="off">{data?.result?.[0]?.discount}% off</p>
          </div>

          <div className="btns">
            <button
              className="first"
              type="button"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/cart")}
            >
              Go to cart
            </button>
            <button className="second" onClick={() => navigate("/cart")}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bought;
