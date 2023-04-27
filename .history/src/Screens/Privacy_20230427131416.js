import React, { useState } from 'react'
import Header from "../Header/Header";

const Privacy = () => {

  const [ data , setData ] = useState([])

  


  return (
    <>
    <Header />

    <div className="bannerIm" style={{ height: "120px", marginTop: "2%" }}>
      <p className="head" style={{ marginTop: "0" }}>
        PRIVACY POLICY
      </p>
    </div>
  </>
  )
}

export default Privacy