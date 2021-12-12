import React from 'react'
import '../css/HomeButton.css'
import { NavLink } from 'react-router-dom'


const HomeButton = ({ homeClick }) => {
  return (
    <NavLink to="/" className="home-button" onClick={homeClick}></NavLink>
  )
}

export default HomeButton
