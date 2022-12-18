import { Grid,CardMedia, Box, Typography, Divider,Container } from '@mui/material'
import * as React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import CardUser from '../Components/CardUser/CardUser'
import { BsPlusCircle } from "react-icons/bs";
const ManageIdentity=()=>{

    return(
        <div>
            <NavBar title={'Manage Identity'}/>
            <div  className='text'>Manage your identities or add new identities to your acount.</div>
            <CardUser/>
            <div className='addIdentity'>
                <BsPlusCircle size='40px'/>
                <span className='createId'>Create Identity</span>
            </div>
        </div>
   
    )
}

export default ManageIdentity