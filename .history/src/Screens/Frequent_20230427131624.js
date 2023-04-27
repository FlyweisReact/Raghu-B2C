/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Accordion from 'react-bootstrap/Accordion';
import Footer from "../Footer";

const Frequent = () => {

  const [ data , setData ] = useState([])

  const fetchData = async () => {
    try{
      const { data } = await axios.get("https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/ques")
      setData(data)
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
        <Accordion.Item eventKey={index} className='accordingItem'>
        <Accordion.Header> Question :  {i.question} </Accordion.Header>
        <Accordion.Body>
          Answer :  {i.answer}
        </Accordion.Body>
      </Accordion.Item>
      ))}
 
    </Accordion>

        <Footer />
    </>
  );
};

export default Frequent;
