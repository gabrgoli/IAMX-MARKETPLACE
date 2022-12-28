import React from 'react'
import './NavBarTitleBackArrow.css'
const NavBarTitleBackArrow = ({children}) => {
  return (
    <div className='NavBarTitleBackArrow-Content'>
        <h1>{children}</h1>
        <img className='NavBarTitleBackArrow-Arrow' src="backArrow.svg" alt="back" ></img>
    </div>
  )
}

export default NavBarTitleBackArrow