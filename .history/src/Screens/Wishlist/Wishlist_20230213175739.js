import React from 'react'
import Header from '../../Header/Header'
import './Wishlist.css'
import img from '../../images/Screenshot (2) 1.png'
import axios from 'axios'

const Wishlist = () => {

  const getData = async () => {
    try{
      const { data } = await axios.get(` https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/wishlist/${userId}`)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
        <Header />

        <div className='wishlist'>
            <p className='head'>1 Course in cart</p>
            <div className='wishlistCart'>
            <img src={img} alt='CourseImage' />
            <p className='CourseName'>Java Beginner Level Course</p>
            <div className='removeDiv'>
                <p>Remove</p>
                <p>Save for Later</p>
            </div>
            </div>
        </div>
    </>
  )
}

export default Wishlist