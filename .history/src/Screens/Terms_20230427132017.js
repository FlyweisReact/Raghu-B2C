import axios from 'axios';
import React, { useState } from 'react'
import Header from "../Header/Header";

const Terms = () => {

  const [ data , setData ] = useState([])

  const fetchData = async () => {
    try { 
      const { data } = await axios.get("")
    }catch(E) {
      console.log(E)
    }
  }

  return (
    <>
    <Header />
    <div className="bannerIm" style={{ height: "120px", marginTop: "2%" }}>
      <p className="head" style={{ marginTop: "0" }}>
        TERMS AND CONDITIONS
      </p>
    </div>
  </>
  )
}

export default Terms