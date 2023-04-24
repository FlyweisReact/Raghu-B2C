import React, { useCallback, useEffect, useState } from 'react'
import Header from '../../Header/Header'
import './Wishlist.css'
import axios from 'axios'

const Wishlist = () => {
  const userId = localStorage.getItem("UserId")
  const [ data , setData ] = useState([])

  const getData = useCallback(async () => {
    try{
      const { data } = await axios.get(` https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/wishlist/${userId}`)
      setData(data.message[0].course)
    }catch(err){
      console.log(err)
    }
  },[userId])

  useEffect(() => (
    getData()
  ),[getData])

  const deleteHandler = async (id) => {
    try{
      const data = await axios.put(` https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/removewishlist/${userId}` , {courseId :  id})
      console.log(data)
      alert('Course Removed from Wishlist')
      getData()
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
        <Header />

        <div className='wishlist'>
            <p className='head'> {data?.length} Course in cart</p>
            {data?.map((i , index) => (
              <div className='wishlistCart' key={index}>
            <img src={i.image} alt='CourseImage' />
            <p className='CourseName'> {i.title} </p>
            <div className='removeDiv'>
                <p onClick={() => deleteHandler(i._id)} >Remove</p>
                <p>Save for Later</p>
                <p>Price : $50</p>
            </div>
            </div>
            ))}
        </div>
    </>
  )
}

export default Wishlist