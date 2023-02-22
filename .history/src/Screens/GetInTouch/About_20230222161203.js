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
                
            </div>
            <div className='right'>
                <img src={img} alt='' />
            </div>
      </div>
</>
  )
}

export default About