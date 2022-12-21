import React from 'react'
import styled from 'styled-components'
import FilterCourses from '../../CoursesFilter/FilterCourses'
import Nav from '../../Navbar/Nav'
import Topbar from '../../navigation/Topbar'

const Topheader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 150px;

  background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(1,1,24,1) 35%, rgba(69,70,70,1) 100%);
`

const ExploreMore = () => {
  return (
    <>
      <Topheader>
        <Topbar/>


      </Topheader>

    <FilterCourses/>


    </>
  )
}

export default ExploreMore