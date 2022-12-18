import * as React from 'react'
import { Container,Box } from '@mui/system'
import { Divider, Typography,Chip,Rating, IconButton,CardMedia,Avatar, Tooltip,FormControlLabel, Checkbox } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/500.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
//import ProductCard from './CardProduct'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useState, useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
//import  CartContext from '../Cart/CartContext';
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
//import Comment from '../Components/Comment'
//import Cookie from 'js-cookie'
//import { useAuth0 } from '@auth0/auth0-react';

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

      
    const typo=(texto)=>{
        return(
            <Typography sx={{m:1,p:1,ml:3}}>{texto}</Typography>
        )
    }
    const divider=()=>{
        return(
            <Divider sx={{marginX:3}}/>
        )
    }

    return (
       
        <Container sx={{mt:15}}>
            {loaded?
            <>
            <Box sx={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px;',display:'flex',justifyContent:'space-between',flexDirection:{xs:'column',md:'row'},borderRadius:3,alignItems:'center'}}>
             
                <Container sx={{width:{xs:'100%',md:'50%'},height:'50%',display:'flex',alignItems:'center',marginY:3}}>
                    <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation
                    >
                        {product.picture?.map(e=>
                            <SwiperSlide>
                                <CardMedia
                                component="img"
                                height="400"
                                image={e}
                                alt="gf"
                                sx={{objectFit:'contain'}}
                                />
                            </SwiperSlide>)}
                    </Swiper>
                </Container>


                <Box sx={{flexDirection:'column',width:{xs:'100%',md:'50%'}}}>
                    <Box sx={{flexDirection:'column'}}>
                        <Box sx={{m:1,border:'1px solid lightgray',p:3,pt:1,borderRadius:5}}>
                            <Box sx={{display:'flex',justifyContent:'space-between'}}>

                                {/* AGREGAR A FAVORITOS */}
                                {
                                <Tooltip title="Agregar a favoritos" placement="top">
                                    <IconButton  style  ={{color: 'red'}}>
                                        <FavoriteIcon />
                                    </IconButton>
                                </Tooltip> }

                                {/* TITULO DEL PRODUCTO */}
                                <Tooltip title={product.title||'no title'} placement='top'>
                                    <Typography sx={{fontSize:{xs:20,sm:30},maxHeight:150}}>{product.title?.length>35?product.title.slice(0,35)+'...':product.title}</Typography>
                                </Tooltip>

                                {/* BOTON AGREGAR AL CARRITO */}
                                {product.enable===0?
                                <IconButton 
                                    sx={{bgcolor:'red',borderRadius:3,fontSize:{xs:10,sm:15},color:'black',height:50}}
                                    //onClick={ onAddProduct }
                                >
                                    Agregar al carrito 
                                    <AddShoppingCartIcon sx={{ml:1}}/>
                                </IconButton>
                                :
                                <Chip label= {`Sin Stock`} sx={{m:3}} color='error'/>}
                            </Box>

                            

                            <Box display='flex' flexDirection='row'>

                            </Box>
                                    {/* ITEM COUNTER */}         
                                <Box sx={{my:2,display:'flex',alignItems:'center',justifyContent:'left'}}>
                                    <Typography variant='subtitle2'>Cantidad </Typography>
                                    {/* <ItemCounter 
                                        currentValue={ tempCartProduct.quantity }
                                        maxValue={ product.stock }
                                        updatedQuantity={ (value)=>onUpdateQuantity(value)  } 
                                    /> */}
                                </Box>

                            {/*DESCRIPCION DEL PRODUCTO*/}   
                            <Typography overflow={'auto'} variant='body1' sx={{mt:2,maxHeight:200}}>{product.description}</Typography>


                            
                        </Box>
                    </Box>
                   

                    <Box sx={{flexDirection:'column',p:0}}>
                        <Box sx={{m:1,border:'1px solid lightgray',borderRadius:5}}>
                            {/* {typo('Marca: Apple')}
                            {divider()}
                            {typo('Modelo: 11')}
                            {divider()}
                            {typo('Color: Violeta')}
                            {divider()} */}

                            {/* MUESTRA EL STOCK DEL PRODUCTO */}
                            <Box sx={{display:'flex',alignItems:'center'}}> 
                                {typo(`Stock:`)}
                                {product.stock>0?
                                <Chip label= {`${product.stock} en Stock`} sx={{bgcolor:'red'}}/>
                                :
                                <Chip label= {`Sin Stock`} color='error'/>}
                            </Box>

                            {divider()}

                            {/* VALORACION GENERAL DEL PRODUCTO */}
                            <Box sx={{display:'flex',alignItems:'center'}}>
                                {typo('Valoracion: ')}
                                <Rating readOnly defaultValue={product.rating} precision={0.1}/>
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </Box>



            <Box sx={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px;',display:'flex',justifyContent:'space-between',flexDirection:'column',borderRadius:3,mt:4,mb:3}}>
                <Box sx={{display:'flex'}}>
                    <Typography sx={{fontSize:{xs:15,md:30},m:2,ml:4}}>Preguntas al vendedor</Typography>

                </Box>
                {divider()}

                
                <Container component="div" sx={{ overflow: 'auto',mb:2,maxHeight:400 }}>{/* PREGUNTAS Y RESPUESTAS */}


                    
                </Container>
                <Divider flexItem/>

                
            </Box>

            </>:<Loading/>
            }
        </Container>
    )
}

export default ProductDetails