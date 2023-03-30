import React from 'react'
import img from "../../images/cart 5.png";

const Bought = () => {
  return (
 <>
    
    <div className="bought">
        <div></div>
        <p>Java Beginner</p>
        <div className="bigOne">
          <img src={img} alt="" />
          <div className="empty"></div>
        </div>
      </div>
 </>
  )
}

export default Bought