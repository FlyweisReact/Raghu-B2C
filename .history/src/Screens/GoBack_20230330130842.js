import { useNavigate } from "react-router";

const navigate = useNavigate()

function GoBack () {
    navigate(-1)
}

export default GoBack


import React from 'react'

const GoBack = () => {
  return (
    <div>GoBack</div>
  )
}

export default GoBack