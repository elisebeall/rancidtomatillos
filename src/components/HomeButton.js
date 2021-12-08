import React from 'react'
import '../css/HomeButton.css'

const HomeButton = ({ homeClick }) => {
  return (
    <button onClick={homeClick}>Home</button>
  )
}

export default HomeButton
