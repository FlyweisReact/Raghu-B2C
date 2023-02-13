import React from 'react'
import Header from '../../Header/Header'
import './Wishlist.css'
import img from '../../images/Screenshot (2) 1.png'

const Wishlist = () => {
  return (
    <>
        <Header />

        <div className='wishlist'>
            <p className='head'>1 Course in cart</p>
            <div className='wishlistCart'>
            <img src={img} alt='CourseImage' />
            <p className='CourseName'>Java Beginner Level Course</p>
            <div className='removeDiv'>
                
            </div>
            </div>
        </div>
    </>
  )
}

export default Wishlist