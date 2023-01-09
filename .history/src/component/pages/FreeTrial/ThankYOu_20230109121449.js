import React from 'react'
import Topbar from "../../navigation/Topbar";
import img from '../../../images/d'

const ThankYOu = () => {
  return (
    <>

<div
        className="courses_main_container"
        style={{ backgroundColor: "black" }}
      >
        <div className="course_header_content">
          <div className="navbarss">
            <Topbar />
          </div>
        </div>
      </div>


      <img src={img} alt="" style={{ marginTop: "2%", width: "200px" }} />
      <h1 style={{ marginTop: "2%", fontWeight: "bold" }}>
        Subscription successful
      </h1>
      <p style={{ fontSize: "2rem" }}>
        Thankyou for purchasing our product! You will receive an email shortly.
        <br />
        Happy Learning!
      </p>
      <div className="twoBtns">
        <button className="btn2"> Continue Shopping</button>
        <button className="btn3"> Manage Order</button>
      </div>




    </>
  )
}

export default ThankYOu