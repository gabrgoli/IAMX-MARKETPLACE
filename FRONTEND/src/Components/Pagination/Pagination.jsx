import React from 'react';
//import { Link } from 'react-router-dom';
import { Grid,Box } from '@mui/material'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import style from './Pagination.module.css'

export default function Pagination ({offersPerPage,  allOffers, pagination, currentPage }){
    const pageNumber = []
    
    for (let i=1;i<=Math.ceil(allOffers/offersPerPage); i++){
        pageNumber.push(i)
    }

    return(
        <>

            <div className={style.paginationWidth}>
            <Box className={style.boxPagination}  >
                <button disabled={currentPage===1?true:false} className={`${style.Arrow} ${style.ArrowLeft}`} onClick = {currentPage!==1 ? ()=> pagination (currentPage-1) : null}>
                    <HiChevronDoubleLeft/>
                    <span classnName={style.paginationLine}></span>
                </button>
                
                {pageNumber &&
                        pageNumber.map(number => (

                                <Box
                                    key={number}
                                    display='flex'
                                    flexDirection='row'
                                    className={currentPage===number?style.PaginationActive:style.PaginationNotActive}
                                    onClick = {()=> pagination (number)}
                                >{number}
                                </Box>

                        ))
                }
                        <button disabled={currentPage===2?true:false} className={`${style.Arrow} ${style.ArrowRight}`} onClick = {currentPage < pageNumber.length?()=> pagination (currentPage+1):null}>
                            <span classnName={style.paginationLine}></span>
                            <HiChevronDoubleRight/>
                        </button>
            </Box>
            </div>


                    
        </>
    )
}