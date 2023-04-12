import React from 'react'
import Header from '../Header/Header'

const ForgetPassword = () => {
  return (
    <>
        <Header />
        <div className="FreeTrialBanner"></div>
      <div className="FreeTrialForm">
        <form onSubmit={postData}>
          <p className="head">Enter Your Details</p>
          <div className="MainInput">
            <p>First Name</p>
            <input
              type="text"
              onChange={(e) => setFirst(e.target.value)}
              required
            />
          </div>
          <div className="MainInput">
            <p>Last Name</p>
            <input
              type="text"
              required
            />
          </div>
          <div className="MainInput">
            <p>Email Address</p>
            <input
              type="email"
              required
            />
          </div>
          <div className="MainInput">
            <p>Phone Number </p>
            {/* <input
              type="tel"
              pattern="[0-9]{10}"
              onChange={(e) => setPhone(e.target.value)}
              required
            /> */}
                <PhoneInput
              defaultCountry="IN"
              value={phone}
              onChange={setPhone}
              maxLength={15}
              minLength={8}
              required
            />
          </div>
          <button
            type="submit"
            style={{ borderRadius: "50px", width: "200px" }}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="FreeTriallastbanner"></div>
    </>
  )
}

export default ForgetPassword