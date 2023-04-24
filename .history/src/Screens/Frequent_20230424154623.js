import React from 'react'
import Header from '../Header/Header'

const Frequent = () => {
  return (
    <>
        <Header />

        <div className="bannerIm">
        <p className="head">
          Let’s Boost Your Career With <br /> The Latest Technolgy
        </p>
        <button
          style={{
            backgroundColor: "#426fec",
            color: "#fff",
            width: "200px",
            border: "1px solid #426fec",
            fontSize: "18px",
            borderRadius: "50px",
            padding: "10px",
            height: "50px",
            marginTop: "50px",
          }}
          className="newBnn"
          onClick={() => navigate("/getInTouch")}
        >
          Get In Touch
        </button>
      </div>
    </>
  )
}

export default Frequent