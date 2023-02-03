import React from 'react'
import img from './images/logo.png'

const HomePage = () => {
  return (
    <>
        <div className='nav'>
            <div className='left'>
                <img src={img} alt='' />
            </div>
            <div className='right'>
                <ul>
                    <li>Home</li>
                    <li>About </li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default HomePage