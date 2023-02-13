import React from 'react'
import Header from '../../Header/Header'
import './Wishlist.css'


const Wishlist = () => {
  return (
    <>
        <Header />

        <div className='wishlist'>
            <p className='head'>1 Course in cart</p>
            <div className='wishlistCart'>

            </div>
        </div>
    </>
  )
}

export default Wishlist