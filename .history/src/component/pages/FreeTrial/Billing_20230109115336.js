import React from 'react'
import Topbar from '../../navigation/Topbar'
import img3 from '../../../images/c'

const Billing = () => {
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



      <div className="BillingDiv">
        <div className="left">
          <div className="divSub">
            <div className="up">
              <h2>Billing Address</h2>
              <div>
                <label>
    FullName
                </label>
                <input type={"text"} />
                <label>
                  Email
                </label>
                <input type={"text"} />
                <label> Address</label>
                <input type={"text"} />
                <label>
               City
                </label>
                <input type={"text"} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <label> State</label>
                    <input type={"text"} style={{ width: "150px" }} />
                  </div>
                  <div>
                    <label> Zip</label>
                    <input type={"text"} style={{ width: "150px" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="down">
              <h2>Payment</h2>
              <div>
                <label>Accepted Cards</label>

                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    marginTop: "3%",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div style={{ width: "40px" }}>
                    <img src={img3} alt="" style={{ width: "100%" }} />
                  </div>
                  <div style={{ width: "40px" }}>
                    <img src={img3} alt="" style={{ width: "100%" }} />
                  </div>
                  <div style={{ width: "40px" }}>
                    <img src={img3} alt="" style={{ width: "100%" }} />
                  </div>
                  <div style={{ width: "40px" }}>
                    <img src={img3} alt="" style={{ width: "100%" }} />
                  </div>
                </div>

                <label>Name on Card</label>
                <input type={"text"} />
                <label>Credit Card Number</label>
                <input type={"text"} />
                <label>Exp Month</label>
                <input type={"text"} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <label> Exp Year</label>
                    <input type={"text"} style={{ width: "150px" }} />
                  </div>
                  <div>
                    <label> CVV</label>
                    <input type={"text"} style={{ width: "150px" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <input
              type={"checkbox"}
              style={{ width: "20px", height: "20px" }}
            />{" "}
            Shipping address same as billing
          </div>

          <button >Continue to checkout</button>
        </div>

        <div className="right">
          <h5>Cart</h5>
          <p>Product1</p>
          <p>Product2</p>
          <p>Product3</p>
          <div
            style={{ width: "90%", height: "2px", backgroundColor: "black"  , marginTop : '5%' , marginLeft : '5%'}}
          ></div>
          <h6>Total</h6>
        </div>
      </div>


  </>
  )
}

export default Billing