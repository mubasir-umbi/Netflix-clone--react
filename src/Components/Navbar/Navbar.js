import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>


  <div class="navbar-logo">
    <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo" /> 
  </div>
  <ul class="navbar-links">
    <li class="navbar-link">
      <a href="#" class="active">Home</a>
    </li>
    <li class="navbar-link">
      <a href="#">TV Shows</a>
    </li>
    <li class="navbar-link">
      <a href="#">Movies</a>
    </li>
    <li class="navbar-link">
      <a href="#">New & Popular</a>
    </li>
    <li class="navbar-link">
      <a href="#">My List</a>
    </li>
  </ul>
  <div class="navbar-profile">
  <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" /> 
  </div>


    </div>
  )
}

export default Navbar