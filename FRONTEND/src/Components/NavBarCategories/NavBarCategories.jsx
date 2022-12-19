import React from 'react'
import Box from '@mui/material/Box';
import { useDispatch,useSelector } from 'react-redux';
import { SEARCHOFFERSBYCATEGORY,GETCATEGORIES,GETOFFERS ,GETCATEGORY} from '../../redux/actions';
import { useState,useEffect } from 'react'
import {useLocation, useNavigate } from 'react-router-dom';
import './NavBarCategories.css'

export const ButtonsCategories = () => {

    const dispatch = useDispatch()
    let categories=useSelector((state)=>state.rootReducer.categories)
    let categoryNavBar=useSelector((state)=>state.rootReducer.category)
    const [cat,setCat]=React.useState('all')
    const navigate=useNavigate()

    const clickCategory  =  (cate)=>{
        //setCat( ()=>cate.category)
        dispatch(GETCATEGORY(cate.category))
        console.log("valor cat:",cat)
        if(cate.category==='all') {dispatch(GETOFFERS())}else{
           dispatch(SEARCHOFFERSBYCATEGORY({category:cate.category}))
        }
        return  navigate('/home')
    }

      useEffect(()=>{
        //dispatch(GETOFFERS())
        dispatch(GETCATEGORIES())
      },[])

  return (
    
    <Box className='NavBarButtonsCategories'>
    <div className='ButtonIndicatorContent  '>
      <button className={categoryNavBar==='all'?'NavBarButtonCategoryActive':'NavBarButtonCategory'} button onClick={()=>clickCategory({category:'all'})} >
          All
      </button>
      <div className={categoryNavBar==='all'?'indicator':null}></div>
    </div>
    
    {/* <Divider key={categories} orientation="vertical" variant='middle'flexItem sx={{bgcolor:'white',marginX:1}}/>      */}
      {categories?.map((category)=>(
      <div className='ButtonIndicatorContent  '>
        <button 
          className={categoryNavBar===category.category?'NavBarButtonCategoryActive':'NavBarButtonCategory'} 
          key={category.idcategory} 
          onClick={()=>{clickCategory(category)
        }}>
            {category.category}
        </button> 
        <div className={categoryNavBar===category.category?'indicator':null}></div>
        {/* <Divider key={categories} orientation="vertical" variant='middle'flexItem sx={{bgcolor:'white',marginX:1}}/> */}
      </div>
      ))

    }   
  
  </Box>
  )
}

export default ButtonsCategories