import React from 'react'
import Box from '@mui/material/Box';
import { useDispatch,useSelector } from 'react-redux';
import { SEARCHOFFERSBYCATEGORY,GETCATEGORIES,GETOFFERS } from '../../redux/actions';
import { useState,useEffect } from 'react'
import {useLocation, useNavigate } from 'react-router-dom';
import './NavBarCategories.css'

export const ButtonsCategories = () => {

    const dispatch = useDispatch()
    let categories=useSelector((state)=>state.rootReducer.categories)
    const [cat,setCat]=React.useState('all')
    const navigate=useNavigate()

    const clickCategory  =  (cate)=>{
  
        setCat( ()=>cate.category)
        console.log("valor cat:",cat)
        if(cate.category==='all') {dispatch(GETOFFERS())}else{
           dispatch(SEARCHOFFERSBYCATEGORY({category:cate.category}))
        }
        return  navigate('/home')
      }

      useEffect(()=>{
        dispatch(GETOFFERS())
        dispatch(GETCATEGORIES())
      },[])

  return (
    
    <Box className='NavBarButtonsCategories'>
    <div className='ButtonIndicatorContent  '>
      <button className={cat==='all'?'NavBarButtonCategoryActive':'NavBarButtonCategory'} button onClick={()=>clickCategory({category:'all'})} >
          All
      </button>
      <div className={cat==='all'?'indicator':null}></div>
    </div>
    
    {/* <Divider key={categories} orientation="vertical" variant='middle'flexItem sx={{bgcolor:'white',marginX:1}}/>      */}
      {categories?.map((category)=>(
      <div className='ButtonIndicatorContent  '>
        <button 
          className={cat===category.category?'NavBarButtonCategoryActive':'NavBarButtonCategory'} 
          key={category.idcategory} 
          onClick={()=>{clickCategory(category)
        }}>
            {category.category}
        </button> 
        <div className={cat===category.category?'indicator':null}></div>
        {/* <Divider key={categories} orientation="vertical" variant='middle'flexItem sx={{bgcolor:'white',marginX:1}}/> */}
      </div>
      ))

    }   
  
  </Box>
  )
}

export default ButtonsCategories