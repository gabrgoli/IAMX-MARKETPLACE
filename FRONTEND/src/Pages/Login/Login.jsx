import { Grid,CardMedia, Box, Typography, Divider,Container } from '@mui/material'
import * as React from 'react'
import CardUser from '../../Components/CardUser/CardUser'


const Login=()=>{

    return(
        <from>
            <div>
                <box>
                <img className='logo-Login' src="IAMX_Logo_Blue.svg" alt="iamx"></img>
            
                <div className='textLogin1'>Own your identity  </div> 
                <div  className='textLogin2'>Welcome to IAMX - your next generation passport! Where you have control over your identity.</div>
                <CardUser edit={false}/>
                    <button className='buttonLogin'>   Login   </button>
                    <button className='buttonRegister'>   Register Now   </button>
                </box>

            </div>
        </from>
   
    )
}

export default Login