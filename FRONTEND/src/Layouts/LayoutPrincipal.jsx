import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import NavBarMobile from '../Components/NavBarMobile/NavBarMobile'


const LayoutPrincipal = ({children}) => {
  return (
    <div>
        <NavBar/>
        {children}
        <NavBarMobile/>
    </div>
  )
}

export default LayoutPrincipal