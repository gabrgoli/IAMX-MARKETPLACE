//rafce
import { Grid,CardMedia, Box, Typography, Divider } from '@mui/material'
import React from 'react'
import { Container } from '@mui/system'
import { FaRegUserCircle } from "react-icons/fa";


const CardUsers = ({edit=true}) => {
  return (
    <>  
    <div className='box-user-Identitys'>
        <FaRegUserCircle size='40px' className='user-icon'/>
        <label className='user-data'>
            <label className='userName'>User name</label>
            <label className='userEmail'>email@provider.com</label>
        </label>
        {
          edit?
          <a className='edit' href='/home'>Edit</a>
          :
          <a className='edit' href='/home'>Change</a>
        }
    </div>
    </>
  )
}

export default CardUsers