/** @format */

import React, { useCallback, useEffect, useState } from "react";
import img from "../../images/cart 5.png";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const Bought = () => {
  const navigate = useNavigate();
  const {  courseId, levelId} = useParams()
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [ bought  , setBought ] = useState([])
  const [ trending , setTrending ] = useState([])
  const UserId = localStorage.getItem("UserId");
  const [course , setCourse ] = useState("")

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
      setCourse(data.result[0]._id)
    }catch(e) { 
      console.log(e)
    }
  },[levelId])


  const getTranding  = async () => {
    try{
      const { data } = await axios.get("https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/trade")
      setTrending(data)
    }catch(e) { 
      console.log(e)
    }
  }

  const AddAlltoCart = async (e) => {
    e.preventDefault()
    try{
      const { data } =await axios.post("https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/cart/all" , {
        userId  : UserId , courseId : course

      })
    }catch(e) { 
      console.log(e)
    }
  }

  useEffect(() => {
    fetchData()
    fetch2()
    getTranding()
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
          {bought?.result?.map((i ) => (
            i.levels?.map((a , index) => (

              <div className="main" key={index}>

            <div className="firstZero">
              <img src={a.image} alt="" />
            </div>

            <div className="first">
              <p className="p1" style={{textTransform : 'capitalize'}} > {a.title} course</p>

              <div className="first1">
                <div>
                  <p className="p2">${a.price} </p>
                  <div className="first2">
                    <p style={{ textDecoration: "line-through" }}> ${a.actualprice} </p>
                    <p> {a.discount}% off</p>
                  
                  </div>
                </div>
                <div style={{ display: "grid" }}>
                  <input type="checkbox" />
                </div>
              </div>
            </div>
          </div>
            ))
          
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
            {trending?.message?.map((i , index) => (
              <div key={index}>
                <p style={{textTransform : 'uppercase'}}>{i.name}</p>
              </div>
            ))}
          
           
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
