import Header from "../../Header/Header";


const GetInTouch = () => {  

  cosnt [ ] = useSta


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