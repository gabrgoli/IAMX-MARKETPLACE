import * as React from 'react'
import { Box, Typography } from '@mui/material'

import './Loading.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/500.css';

const Loading=()=>{
    
    return(
        <>
        <Box sx={{mt:20,display:'flex',alignItems:'center',flexDirection:'column'}}>
            <div className="lds-dual-ring"></div>
            <Typography sx={{m:3,fontWeight:20,fontSize:20}}>Loading...</Typography>
        </Box>
        </>
    )
}

export default Loading