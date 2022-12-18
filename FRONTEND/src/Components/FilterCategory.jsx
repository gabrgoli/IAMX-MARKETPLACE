import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Box,FormControl,Select } from '@mui/material';
import {GETCATEGORIES,SEARCHOFFERSBYCATEGORY,GETOFFERS} from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import {useLocation, useNavigate } from 'react-router-dom';

export default function FilterByCategory({title}) {
    const [sValue,setSvalue]=React.useState('Todos')
    const location=useLocation()
    const navigate=useNavigate()

    const dispatch=useDispatch()

    React.useEffect(()=>{
        dispatch(GETCATEGORIES())
    },[])
    const categories=useSelector((state)=>state.rootReducer.categories)

    async function handleFilterCategory(e) {      
      if(e.target.value==="Todos") {
        dispatch(GETOFFERS())
        if(location!=='/home')navigate('/home')
      }
      else{
         dispatch(SEARCHOFFERSBYCATEGORY({category:e.target.value}))
        if(location!=='/home')navigate('/home')
      }

      return e.target.value
    }
    console.log(categories)

  return (
    <Box sx={{minWidth:100}}>
        <FormControl fullWidth>
          <Select
            id="demo-simple-select"
            value={sValue}
            onChange={(e) => {
              setSvalue(()=>e.target.value)
              handleFilterCategory(e)
            }}
            name='category'
            sx={{ height:24,fontSize:{xs:11} }}
          >
              <MenuItem key='select' value='Todos' 
                onClick={()=>{
                  dispatch(GETOFFERS()) 
                  if(location!=='/home')navigate('/home')
                }}>
                  {title}
              </MenuItem>
                  {categories?.map((category) => (
                    <MenuItem 
                      key={category.idcategory} 
                      name={category.category} 
                      value={category.category}>
                      {category.category}
                    </MenuItem>
                  ))}
          </Select>
        </FormControl>
    </Box>
  );
}