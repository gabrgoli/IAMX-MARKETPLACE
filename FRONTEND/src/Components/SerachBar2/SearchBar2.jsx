import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function SearchInput({placeholder,url,dinamic=false,action}) {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const [input, setInput] = React.useState('')

  const handleChange = (e) => {
    setInput(() => e.target.value)
  }

  const click = () => {
    console.log("input",input)
    dispatch(action(input))
    navigate(`${url}`)
  }

   React.useEffect(()=>
   {dinamic && dispatch(action(input))}
   ,[input])


  return (
   
      <form
        className='SearchbarConteiner'
        component="form"
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(action(input))
          navigate(`${url}`)
          //setInput(()=>'')
        }}
        
      >
        
        <input
          placeholder={placeholder}
          value={input}
          onChange={(e) =>handleChange(e)}
        />
        <button className='SearchbarIconContent' type="submit" onClick={click}  >
          <SearchIcon sx={{  color: '#black', backgroundColor:'orange',width:"100%",height:"100%" }} />
        </button>
      </form>
  
  );
}
