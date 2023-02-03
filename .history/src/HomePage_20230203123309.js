import React from 'react'
import img from './images/logo.png'
import './HomePage.css'


const HomePage = () => {
  return (
    <>
        <div className='HomeNewnav'>
            <div className='left'>
                <img src={img} alt='' />
            </div>
            <div className='right'>
                <ul>
                    <li>Home</li>
                    <li>About </li>
                    <li>Courses</li>
                    <li style={{fontWeight : 'bold'}}>Login</li>
                <button >Free Trial</button> 
                    <li><i class="fa-solid fa-magnifying-glass"></i></li>
                </ul>
            </div>
        </div>

        <div className='mainSecTwo'>
            <div className='left'>
                <p className='head'>Top cloud - based <br /> E - learning platform </p>
                <p className='desc'></p>
            </div>
        </div>
    </>
  )
}

export default HomePage