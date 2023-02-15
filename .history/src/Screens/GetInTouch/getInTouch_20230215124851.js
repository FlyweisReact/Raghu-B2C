import Header from "../../Header/Header";
import "./FreeTrial.css";



const getInTouch = () => {



  
    
  
    
  
    return (
      <>
        {/* <Header /> */}
        <Header />
        <div className="FreeTrialBanner"></div>
        <div className="FreeTrialForm">
          <form onSubmit={registerUser}>
            <p className="head">Enter Your Details</p>
            <div className="MainInput">
              <p>First Name</p>
              <input type="text" onChange={(e) => setFirst(e.target.value)} />
            </div>
            <div className="MainInput">
              <p>Last Name</p>
              <input type="text" onChange={(e) => setLast(e.target.value)} />
            </div>
            <div className="MainInput">
              <p>Email Address</p>
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="MainInput">
              <p>Phone Number </p>
              <input type="tel" pattern="[0-9]{10}" onChange={(e) => setMobile(e.target.value)} />
            </div>
            <div className="MainInput">
              <p>Set Password </p>
              <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">
              START FREE TRIAL
            </button>
          </form>
        </div>
        <div className="FreeTriallastbanner"></div>
  
        {show ? (
          <div className="otpDiv" >
            <form onSubmit={Verifyotp}>
              <input type="tel" pattern="[0-9]{4}" placeholder="Enter Your OTP"  onChange={(e) => setOtp(e.target.value) }/>
              <br />
              <button type="submit">
                Submit
              </button>
            </form>
          </div>
        ) : (
          ""
        )}
      </>
    );
  };

export default getInTouch