//React Imports
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState,useEffect } from 'react'

//Components Imports
import CardOffer from '../../Offers/CardOffer'
import CardOfferSmall from '../../Offers/CardOfferSmall'
import NavBar from '../../Components/NavBar/NavBar'
import Loading from '../../Components/Loading/Loading'
import OrderByPrice from '../../Components/OrderByPrice'
import FilterByCategory from '../../Components/FilterCategory'
import Pagination from '../../Components/Pagination/Pagination'
import LayoutPrincipal from '../../Layouts/LayoutPrincipal'
//Actions
import { GETOFFERS, SEARCHBYTITLEOFFERS, GETCATEGORIES } from '../../redux/actions'

//Swiper images
import { Grid,CardMedia, Box, Typography, Divider } from '@mui/material'
import { Autoplay,Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//CSS
import './Home.css'


const slideImages=['https://res.cloudinary.com/dnlooxokf/image/upload/v1654579315/images/jwupcxolofvkyfzrdvin.png','https://res.cloudinary.com/dnlooxokf/image/upload/v1654579317/images/qgizpdigf71farfs88ae.png','https://res.cloudinary.com/dnlooxokf/image/upload/v1654579317/images/wgwbatmjliclmqek0k5r.png','https://res.cloudinary.com/dnlooxokf/image/upload/v1654579318/images/gstne4ffczw3e6zql5mh.png','https://res.cloudinary.com/dnlooxokf/image/upload/v1654579318/images/x35mc8bzxto8bf4mkclm.png','https://res.cloudinary.com/dnlooxokf/image/upload/v1654579318/images/s6wjxqzsxwcrvzua1oun.png','https://res.cloudinary.com/dnlooxokf/image/upload/v1654579319/images/ho68csnn5muuhecl33kj.png']

const Home=()=>{
    const dispatch=useDispatch()
    let offers=useSelector((state)=>state.rootReducer.offers)
    let sideMenuOpenClose=useSelector((state)=>state.rootReducer.sideMenuOpenClose)
    let darkMode=useSelector((state)=>state.rootReducer.darkMode)


    useEffect(()=>{
        dispatch(GETOFFERS())
        dispatch(GETCATEGORIES())
    },[dispatch])

        //PAGINATION
    const [currentPage,setCurrentPage]=useState(1) //creo un estado local en donde le paso la pagina actual
    const [offersPerPage, setOffersPerPage]=useState(4) //cantidad de recetas por pagina
    const indexOfLastOffer = currentPage * offersPerPage //porque si estoy en la pagina 3, el ultimo recipe va a ser 6*3=18
    const indexOfFirstOffer = indexOfLastOffer - offersPerPage //da el index de la primera receta
    const currentOffers = offers.slice(indexOfFirstOffer,indexOfLastOffer) //va mostrando cuantos recipes hay que rednerizar por pagina
    
    const pagination = (pageNumber)=> {
        setCurrentPage(pageNumber)
    }
    console.log('offers:',offers[0])

    return(
        <LayoutPrincipal>
          <div className={darkMode && "darkmode"}>
          <div className="mainContainer">
            {/* <nav className="navbar">
              <NavBar arrow={false} />
            </nav> */}
            <div className="main">
              {/* <FilterByCategory title={'Filter'}/> */}
              <div className="swiperBox">
                <Swiper
                  modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={40}
                  slidesPerView={1}
                  navigation
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                  }}
                  loop
                >
                  {slideImages.map((e) => (
                    <SwiperSlide key={e} className="swiperSlide">
                      <CardMedia
                        component="img"
                        height="110%"
                        image={e}
                        alt="gf"
                        sx={{ objectFit: "fill" }}
                        className={darkMode && "darkmode"} //darkmode no effect in pictures
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="offersPage">
                {offers.length === 0 && <Loading></Loading>}
                {offers[0] !== "No Offers" && (
                  <Pagination
                    key={pagination}
                    offersPerPage={offersPerPage}
                    allOffers={offers.length}
                    pagination={pagination}
                    currentPage={currentPage}
                  />
                )}
                {offers[0] === "No Offers" ? (
                  <div className="HomeTextNoOffers">
                    There are no offers in this category
                  </div>
                ) : (
                  currentOffers.map((offer) => (
                    <>
                      <Box marginX={1} className="CardProductSmallGrid">
                        <CardOfferSmall key={offer.idoffer} offer={offer} />
                      </Box>
                      <Grid className="CardProductGrid">
                        <CardOffer key={offer} offer={offer} />
                      </Grid>
                    </>
                  ))
                )}
                {offers[0] !== "No Offers" && (
                  <Pagination
                    key={pagination * 20000}
                    offersPerPage={offersPerPage}
                    allOffers={offers.length}
                    pagination={pagination}
                    currentPage={currentPage}
                  />
                )}
              </div>
            </div>
            {/* <footer className="footer">FOOTER</footer> */}
          </div>
                </div>
        </LayoutPrincipal>

    )
}

export default Home