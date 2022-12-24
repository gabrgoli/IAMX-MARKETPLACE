import React from 'react';
//import { Link } from 'react-router-dom';
import { Grid,Box } from '@mui/material'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import './Pagination.css'

export default function Pagination ({offersPerPage,  allOffers, pagination, currentPage }){
    const pageNumber = []
    
    for (let i=1;i<=Math.ceil(allOffers/offersPerPage); i++){
        pageNumber.push(i)
    }

    return(
        <>

            <div className="paginationWidth">
            <Box className="boxPagination"  display='flex' flexDirection='row' justifyContent='center' sx={{display:{xs:'flex',md:'flex'}}}>
                <div className="leftArrow">
                    <HiChevronDoubleLeft
                        onClick = {currentPage!==1 ? ()=> pagination (currentPage-1) : null}
                    />
                    <span classnName="paginationLine"></span>
                </div>
                
                {pageNumber &&
                        pageNumber.map(number => (
                            <Box 
                                key={number}
                                display='flex' 
                                flexDirection='row'  
                                className={currentPage===number?'PaginationActive':'PaginationNotActive'} 
                                onClick = {()=> pagination (number)}
                            >{number}
                            </Box>       
                        ))
                }
                          <div className="rightArrow">
                            <span classnName="paginationLine"></span>
                            <HiChevronDoubleRight
                                onClick = {currentPage < pageNumber.length?()=> pagination (currentPage+1):null}
                            />
                           </div>
            </Box>
            </div>


                    
        </>
    )
}