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

            {/* PANTALLA CHICA
            <Box margin={3} display='flex' justifyContent='center'>
                <Grid container  sx={{display:{xs:'flex',md:'none'},justifyContent:{xs:'center',md:'none'}}}> 
                    {pageNumber &&
                            pageNumber.map(number => (
                                <Grid key={number}    xs={1} sx={{display:{xs:'flex',md:'none'},justifyContent:'', marginX:'20px'}}>   
                                    <Box key={number} display='flex' flexDirection='row'  className={currentPage===number?'barrasActivo':'barras'} onClick = {()=> pagination (number)}>{number}</Box>       
                                </Grid>
                            ))
                    }
                </Grid>
            </Box> */}

            {/* PANTALLA GRANDE */}

            <div className="paginationWidth">
            <Box className="boxPagination"  display='flex' flexDirection='row' justifyContent='center' sx={{display:{xs:'flex',md:'flex'}}}>
                <div className="leftArrow">
                    <HiChevronDoubleLeft />
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
                            <HiChevronDoubleRight />
                           </div>
            </Box>
            </div>


                    
        </>
    )
}