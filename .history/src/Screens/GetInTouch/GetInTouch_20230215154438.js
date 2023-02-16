import axios from "axios";
import { useState } from "react";
import Header from "../../Header/Header";


const GetInTouch = () => {  

  const [ first , setFirst ] = useState("")
  const [last , setLast ] = useState("")
  const [ email , setEmail ] = useState("")
  const [ phone , setPhone  ] = useState("")


  const postData = async (e) => {
    e.preventDefault()
    try{
      const { data } = await axios.post("https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/touch")
    }catch(err){
      console.log(err)
    }
  } 

    return (
      <>
        {/* <Header /> */}
        <Header />
        <div className="FreeTrialBanner"></div>
        <div className="FreeTrialForm">
          <form>
            <p className="head">Enter Your Details</p>
            <div className="MainInput">
              <p>First Name</p>
              <input type="text"/>
            </div>
            <div className="MainInput">
              <p>Last Name</p>
              <input type="text" />
            </div>
            <div className="MainInput">
              <p>Email Address</p>
              <input type="email"  />
            </div>
            <div className="MainInput">
              <p>Phone Number </p>
              <input type="tel" pattern="[0-9]{10}"  />
            </div>
            <button type="button" style={{borderRadius : '50px' , width : '200px'}} onClick={() => alert('One of our associates will reach you shortly!!')}>
             Submit
            </button>
          </form>
        </div>
        <div className="FreeTriallastbanner"></div>
  
     
      </>
    );
  };

export default GetInTouch