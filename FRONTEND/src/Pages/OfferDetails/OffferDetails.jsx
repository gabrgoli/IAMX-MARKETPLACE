import * as React from 'react'
import { Container,Box } from '@mui/system'
import { Divider, Typography,Chip,Rating, IconButton,CardMedia,Avatar, Tooltip,FormControlLabel, Checkbox } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/500.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useState, useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
//import ItemCounter from '../Cart/ItemCounter';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading'
import { GETOFFER} from '../../redux/actions';
import './OfferDetails.css'
import { BsCart3 } from "react-icons/bs";
import Raiting from '../../Components/Rating'
import LayoutPrincipal from '../../Layouts/LayoutPrincipal'
const ProductDetails=()=>{

    const product=useSelector((state)=>state.rootReducer.offer)
    const recommended=useSelector((state)=>state.rootReducer.recommended)
    const dispatch=useDispatch()
    const [loaded,setLoaded]=React.useState(false)
    const [checked,setChecked]=React.useState(false)
    const {id}=useParams() //traigo el id del producto

    console.log('offer',product)


    React.useEffect(()=>{
        window.scrollTo(0, 0)
        dispatch(GETOFFER(id)).then(()=>setLoaded(true))
    },[dispatch,id])

    

    return (
       <LayoutPrincipal>
        <div className="OD-container">
            <div className="OD-image-box">
                    <img src={product.picture} alt="no img" />
                {/* <CardMedia
                    component="img"
                    height="400"
                    image={product.picture}
                    alt="gf"
                    sx={{objectFit:'contain'}}
                /> */}
            </div>
            <div className="OD-details-box">
                <div className="OD-title">
                    <h1>{product.title}</h1>
                </div>
                <h1>{product.price}{product.currency}</h1>
                <h1>{product.description}</h1>
                <h1>{product.country}</h1>
                <h1>{product.category}</h1>
                <Raiting number={4} quantity={1024}/>
                <button className='Button1 ButtonShop'>
                    <h1>Order Now</h1>
                    <div className='icon'><BsCart3/></div>
                </button>
                
                
            </div>
        </div>
       
       </LayoutPrincipal>
    )
}

export default ProductDetails