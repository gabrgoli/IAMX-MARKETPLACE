
import * as React from 'react'
import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { AccountCircleOutlined, AdminPanelSettings, CategoryOutlined, ConfirmationNumberOutlined, EscalatorWarningOutlined, FemaleOutlined, InvertColors, LoginOutlined, MaleOutlined, SearchOutlined, VpnKeyOutlined } from "@mui/icons-material"
import { useDispatch,useSelector } from 'react-redux';
import { SIDEMENUOPENCLOSE,GETCATEGORIES,SEARCHOFFERSBYCATEGORY,SEARCHBYTITLEOFFERS} from '../redux/actions';
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


export default function SideMenu()   {

let sideMenuOpenClose=useSelector((state)=>state.rootReducer.sideMenuOpenClose)
let categories=useSelector((state)=>state.rootReducer.categories)
let darkMode=useSelector((state)=>state.rootReducer.darkMode)
const [input, setInput] = React.useState('')
const navigate=useNavigate()

useEffect(()=>{
    dispatch(GETCATEGORIES())
},[])

  const dispatch = useDispatch()

  const closeSideMenu  = ()=>{
    dispatch(SIDEMENUOPENCLOSE(false))
  }

  const searchSideBar  = ()=>{
    dispatch(SEARCHBYTITLEOFFERS(input))
    closeSideMenu()
  }

  const clickCategory  = (category)=>{
     dispatch(SEARCHOFFERSBYCATEGORY({category:category.category}))
     closeSideMenu()
  }
  

  return (
    <Drawer
        open={ sideMenuOpenClose }
        anchor='left'
        sx={{backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        onClose={closeSideMenu} 
    >
        <Box className={darkMode&&'darkmode'}  sx={{width: 250, paddingTop: 5, height:'100%' }}>
            
            <List>
                <img  style={imageCss} src="IAMX-logo.png" alt="img"/> 
                <ListItem>
                    <form
                     component="form"
                     onSubmit={(e) => {
                       e.preventDefault()
                       dispatch(SEARCHBYTITLEOFFERS(input))
                       navigate(`/home`)
                       closeSideMenu()
                    }}
                    >
                        <Input
                            autoFocus
                            type='text'
                            placeholder="Search..."
                            value={input}
                            onChange={(e)=>setInput(()=>e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    onClick={()=>searchSideBar()}
                                    aria-label="toggle password visibility"
                                    >
                                    <SearchOutlined />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </form>
                </ListItem>
                <ListItemText sx={{display:'flex',justifyContent:'center'}} primary={'Categories'} />
                <div style={categoriesCss}>                       
                    {categories?.map((category)=>(
                        // <button style={buttonCategories}>{category.category}</button>
                        //onClick={clickCategory}
                        <ListItem key={category.idcategory} button onClick={()=>clickCategory(category)} >
                            <ListItemText  primary={category.category} />
                        </ListItem>
                    ))
                    }                           
                </div>

                <Divider/>

                <ListItem button>
                    <ListItemIcon>
                        <VpnKeyOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Login'} />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <LoginOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Logout'} />
                </ListItem>

            </List>
        </Box>
    </Drawer>
  )
}



const imageCss = {
    display:'flex',
    width: "35%",
  //   justifContent:'center',
  //   aligItems: 'center',
    margin:'auto',
    marginBottom:'20px'
}

const categoriesCss = {
  display:'flex',
  justifContent:'center',
  aligItems: 'center',
  flexDirection:'column',
  margin:'2px'
}

const buttonCategories = {
display:'flex',
justifContent:'center',
aligItems: 'center',
flexDirection:'column',
margin:'2px',
textAlign:'center'
}
