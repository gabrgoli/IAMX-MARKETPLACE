import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SideBar from '../SideBar'
import { Divider, ListItem, ListItemIcon, ListItemText,CardMedia } from "@mui/material"
import { useDispatch,useSelector } from 'react-redux';
import { SIDEMENUOPENCLOSE,GETCATEGORY,GETOFFERS,SEARCHBYTITLEOFFERS } from '../../redux/actions';
import './NavBar.css'
import { useState,useEffect } from 'react'
import {useLocation, useNavigate } from 'react-router-dom';
import SearchBar from '../../Components/SearchBar/SearchBar'
import NavBarCategories from '../NavBarCategories/NavBarCategories'

export default function ButtonAppBar({title,arrow=false}) {

const dispatch = useDispatch()
const navigate=useNavigate()

let openSideMenu  = ()=>{
  dispatch(SIDEMENUOPENCLOSE(true))
}

const clickLogo  = ()=>{
  dispatch(GETOFFERS())
  dispatch(GETCATEGORY('all'))
  navigate('/home')
}


  return (
    <>
    
    <Box>
        <AppBar   position="static">
            <Toolbar className='navBar' >
                <div className='leftNavbar'>
                  <SideBar/>
                    {arrow?
                            <IconButton
                              className='arrow'
                              size="large"
                              edge="start"
                              color="inherit"
                              aria-label="menu"
                              sx={{display:'flex'}}
                            >
                              <KeyboardBackspaceIcon />
                            </IconButton>
                    :
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}
                    onClick={openSideMenu}>
                      <MenuIcon />
                    </IconButton>
                    }
                    <img onClick={ () => clickLogo() }  className='image-Navbar' src="/IAMX-logo.png" alt="img"/>

                </div> 

                <div className='centerNavbar'>
                    {title}
                </div>

            </Toolbar>

            <SearchBar
              placeholder={'Search'}
              url='/home'
              action={SEARCHBYTITLEOFFERS}
              dinamic={false}
            />

            <NavBarCategories/>

        </AppBar>
    </Box>
    </>
  );
}


