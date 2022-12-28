import React from 'react'
import './TabBar.css'
import { NavLink } from "react-router-dom";
import {useLocation, useNavigate } from 'react-router-dom';
const TabBar = ({tab1,tab2,ubication,setUbication}) => {

  const navigate=useNavigate()

  return (
    <div className='TabBarContainer'>
        
          <div className={ubication===tab1?'TabBarTab TabBarindicator':'TabBarTab'}
            onClick={()=>{setUbication(tab1); navigate(`/ordernow-${tab1}`)}}
          >
              {tab1}
          </div>

     
          <div className={ubication===tab2?'TabBarTab TabBarindicator':'TabBarTab'}
            onClick={()=>{setUbication(tab2); navigate(`/ordernow-${tab2}`)}}
          >
              {tab2}
          </div>
       
    </div>
  )
}

export default TabBar