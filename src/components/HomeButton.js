import React from 'react'
import '../css/HomeButton.css'

const HomeButton = ({ homeClick }) => {
  return (
    <button className="home-button" onClick={homeClick}></button>
  )
}

export default HomeButton
