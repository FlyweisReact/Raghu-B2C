import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import './Wishlist.css'
import img from '../../images/Screenshot (2) 1.png'
import axios from 'axios'

const Wishlist = () => {

  const userId = localStorage.getItem("UserId")
  const [ data , setData ] = useState([])

  console.log(userId)

  const getData = async () => {
    try{
      const { data } = await axios.get(` https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/wishlist/${}`)
      setData(data.message[0].course)
      console.log(data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => (
    getData()
  ),[])

  const deleteHandler = async (id) => {
    try{
      const data = await axios.put(` https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/removewishlist/${userId}` , {courseId :  id})
      console.log(data)
      alert('Course Removed from Wishlist')
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
            </div>
            </div>
            ))}
        </div>
    </>
  )
}

export default Wishlist