import React from 'react'
import Header from '../Header/Header.js'
import img from '../images/66.png'
import img2 from '../images/111.png'

const Resoure = () => {
  return (
   <>
   <Header />
   <div className='ResourceFirst'>
   <img src={img} alt='' />
   </div>
   <div className='ResourceSecond'>
    <div>
        <p>Our Latest</p>
        <p>Articles & Blogs</p>
    </div>
    <div>
        <img  src={img2} alt='' />
    </div>
   </div>
   </>
  )
}

export default Resoure