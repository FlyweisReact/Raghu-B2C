import React from 'react'
import Header from '../Header/Header.js'
import img from '../images/66.png'

const Resoure = () => {
  return (
   <>
   <Header />
   <div className='ResourceFirst'>
   <img src={img} alt='' />
   </div>
   <div className='ResourceSecond'>
    <div>
        <p></p>
    </div>
   </div>
   </>
  )
}

export default Resoure