import React from 'react'
import Header from '../../Header/Header'
import img from '../../images/about us image.png'

const About = () => {
  return (
<>
    <Header />
    <div className="courseBanner">
        <p>Live training session in 23hrs:35mins:44sec </p>
        <a href="#reg">
          <button style={{ cursor: "pointer" }}>Register now</button>
        </a>
      </div>

      <div className='abouttwo-sec'>
            <div className='left'>
                <p>ABOUT US</p>
                <p>Our emphasis is on delivering a remrkable and productive <br /> 
                experience by utilizing the top-of-the-line technologies <br /> 
                available  in the industry
                </p>
                <hr />
                <p>Expert - Works is a leading edu-tech platform, providing quailty and industry <br />
                standard training is in the on-demand technologies to Bench Sales companies <br /> and tech
                </p>
            </div>
            
            <div className='right'>
                <img src={img} alt='' />
            </div>
      </div>
</>
  )
}

export default About