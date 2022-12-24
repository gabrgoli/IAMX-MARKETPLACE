import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating({number=2,quantity=1026}) {
  const [value, setValue] = React.useState(number);

  return (
    <Box sx={{display:'flex', alignItems:'center'}}>
      <Rating  name="read-only" value={number} readOnly /> 
      <Typography sx={{fontWeight:'300', fontSize:'15px'}}>{"(" + quantity +")"}</Typography>
    </Box>
  );
}