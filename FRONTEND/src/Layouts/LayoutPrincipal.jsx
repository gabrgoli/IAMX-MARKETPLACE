import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import NavBarMobile from '../Components/NavBarMobile/NavBarMobile'


const LayoutPrincipal = ({children,showNavbar=true}) => {
  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
        {showNavbar&&<NavBar/>}
        {children}
        <NavBarMobile/>
    </div>
  )
}

export default LayoutPrincipal