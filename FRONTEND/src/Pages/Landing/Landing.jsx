import { Grid,CardMedia, Box, Typography, Divider,Container } from '@mui/material'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../Components/Loading/Loading'
import OrderByPrice from '../../Components/OrderByPrice'
import { useState } from 'react'
import Cookie from 'js-cookie'
import {useLocation, useNavigate } from 'react-router-dom';
import './Landing.css'
import LandingButton from '../../Components/LandingButton'

const Landing=()=>{
    const navigate=useNavigate()

    return(
    <div className='LandingConteiner'>       
        <button className='LandingButtom' onClick={()=>navigate('/home')}>
                    <img  className='LandingImage' src="iamxLogoLanding.svg" alt="IAMX" ></img>
        </button>
        <h1 className='LandingTitle'>
            Own & create your digital identity
        </h1>

    <LandingButton 
        title={'vNFT'} 
        text={'Social Media, Google, Apple'}
    />
    <LandingButton 
        title={'IAMX KYC'} 
        text={'ID, address, Liveness, AML, E-Mail, Phone'}
    />
    <LandingButton 
        title={'IAMX KYB'} 
        text={'Company, Registration, UID, KYC, Beneficial Owner'}
    />

    </div>
   
    )
}

export default Landing