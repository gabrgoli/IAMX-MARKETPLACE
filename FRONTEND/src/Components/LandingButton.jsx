import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const LandingButton = ({title, text}) => {
  return (

        <div className='LandingButtonConteiner'>
            <div className='LandingButtonTextConteiner'>
                <h1 className='LandingTitleText'>{title}</h1>
                <h1 className='LandingText'> {text}</h1>
            </div>
            <KeyboardArrowRightIcon sx={{color:'white',margin:'auto',marginRight:'0px'}}/>
        </div>

  )
}

export default LandingButton
