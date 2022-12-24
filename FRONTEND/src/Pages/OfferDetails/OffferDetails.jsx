import * as React from 'react'
// import { Container,Box } from '@mui/system'
// import { Divider, Typography,Chip,Rating, IconButton,CardMedia,Avatar, Tooltip,FormControlLabel, Checkbox } from '@mui/material'
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/500.css';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { useState, useContext, useEffect } from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
//import ItemCounter from '../Cart/ItemCounter';
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading'
import { GETOFFER} from '../../redux/actions';
import './OfferDetails.css'
import { BsCart3 } from "react-icons/bs";
import Raiting from '../../Components/Rating'
import LayoutPrincipal from '../../Layouts/LayoutPrincipal'
import { GoGlobe } from "react-icons/go";

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
            <div className="OD-title">
                    <h1>{product.title}</h1>
                    
            </div>
            <div className="OD-image-box">
                    <img src={product.picture} alt="no img" />
            </div>

            <div className="OD-separator">
            <span> </span>
            </div>
            
            <div className="OD-details-box">
                <div className="OD-price-line">
                    <h1>${product.price}{product.currency}</h1>
                    <h2>{<GoGlobe/>}{product.country}</h2>
                </div>
                <div className="OD-separator">
                <span> </span>
                </div>
                <h3>{product.category}</h3>
                <p>{product.description}</p>
                <Raiting number={4} quantity={1024}/>
                <button className='Button1'>
                    <h1>Order Now</h1>
                    <div className='icon'><BsCart3/></div>
                </button>
                
                
            </div>
        </div>
       
       </LayoutPrincipal>
    )
}

export default ProductDetails