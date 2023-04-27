/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Accordion from 'react-bootstrap/Accordion';

const Frequent = () => {

  const [ data , setData ] = useState([])

  const fetchData = async () => {
    try{
      const { data } = await axios.get("https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/ques")
      setData(data)
      console.log(data)
    }catch(e) { 
      console.log(e)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <>
      <Header />

      <div className="bannerIm" style={{ height: "120px", marginTop: "2%" }}>
        <p className="head" style={{ marginTop: "0" }}>
          FREQUENTLY ASKED QUESTIONS
        </p>
      </div>


      <Accordion defaultActiveKey="0"  className="accoring">
      {data?.questionAndAnswers?.map((i , index) => (
        <Accordion.Item eventKey={index}>
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      ))}
 
    </Accordion>

    
    </>
  );
};

export default Frequent;
