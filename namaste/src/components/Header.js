import React from 'react'
import './style.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp" alt="logo" />
      </div>
      <ul className='tabs'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  )
}

export default Header