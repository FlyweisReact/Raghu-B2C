import React from 'react'

const ParticularCourse = () => {
  return (
  <>
      <div className="NewCourse">
        <p>ABOUT</p>
      </div>

      <div className="NewCourseHeader">
        <img src={img} alt="" />
        <div></div>
      </div>

      <div className="goBackBtn">
        <button >
          Go Back{" "}
          <span style={{ position: "absolute", right: "10px" }}>{"<<"}</span>
        </button>
      </div>

      <div className="NewCourseThree">
        {data?.message?.map((i, index) => (
          <div className="main" key={index}>
            <button className="list newPP"> {i.title} </button>
            <div className="hoverElement specialDiv">
              {i.levels?.map((a, index) => (
                <div className="bigOne" key={index}>
                  <p
                  
                  >
                    {a.level}{" "}
                  </p>
                  <div className="last">
                    <i class="fa-solid fa-heart" onClick={() => {
                     
                    }}> </i>
                    <img src={img} alt="Cart" style={{ width: "30px" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
  </>
  )
}

export default ParticularCourse