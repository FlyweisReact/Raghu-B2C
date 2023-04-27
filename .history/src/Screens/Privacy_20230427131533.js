import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from "../Header/Header";

const Privacy = () => {

  const [ data , setData ] = useState([])

  const fetchData = async () => {
    try {
      const { data } = await axios.get('https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/privacy')
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
        PRIVACY POLICY
      </p>
    </div>

    {data?.}
  </>
  )
}

export default Privacy