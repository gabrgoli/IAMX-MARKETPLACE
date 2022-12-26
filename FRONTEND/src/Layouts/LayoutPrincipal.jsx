import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import NavBarMobile from '../Components/NavBarMobile/NavBarMobile'


const LayoutPrincipal = ({children,showNavbar=true}) => {
  return (
    <>
        {showNavbar&&<NavBar/>}
        {children}
        <NavBarMobile/>
    </>
  )
}

export default LayoutPrincipal