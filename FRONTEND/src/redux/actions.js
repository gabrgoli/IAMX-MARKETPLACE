import axios from "axios"
import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
// import Cookie from 'js-cookie'

export const api=process.env.REACT_APP_URL_BACKEND||'http://localhost:3002'
//export const api='https://app3tech-backend.herokuapp.com'

                        /////////////////////////////////////   
                        //             ACCIONES            //   
                        /////////////////////////////////////  


    //Get all The Offers
    export const GETOFFERS = createAsyncThunk('GETOFFERS', async () => { 
        const response = await axios(`${api}/offers`)
        return response.data
    })  

    //Get 1 offer recibeing the id of the offer
    export const GETOFFER = createAsyncThunk('GETOFFER', async (id) => { 
        const response = await axios(`${api}/offers/${id}`,{headers:{
            'offerId':`${id}`
            }})
        return response.data
    })
    
    
    export const SEARCHBYTITLEOFFERS=createAsyncThunk('SEARCHBYTITLEOFFERS',async (title)=>{
        console.log('title',title)
        //const result=await axios.post(`${api}/offers/getoffersbytitle/?title=${title}`) 
        const result=await axios.post(`${api}/offers/getoffersbytitle`,{title}) 
        console.log('result',result)
        return result.data
    })

    export const SEARCHOFFERSBYCATEGORY = createAsyncThunk('SEARCHOFFERSBYCATEGORY', async (input) => { 
        //const response = await axios.post(`${api}/offers/getoffersbycategory/?category=${input.category}`)
        const response = await axios.post(`${api}/offers/getoffersbycategory`,input)
        
        return response.data
    })  

    export const GETCATEGORIES = createAsyncThunk('GETCATEGORIES', async () => { 
        const response = await axios(`${api}/categories`)
        return response.data
    })

    export const GETCATEGORY=createAction('GETCATEGORY',(category)=>{ 
        return {payload:category}
    })

    export const DARKMODE=createAction('DARKMODE',(darkMode)=>{ 
        return {payload:darkMode}
    })




    // export const SEARCHOFFERSBYCATEGORY = createAsyncThunk('SEARCHOFFERSBYCATEGORY', async (input) => { 
    //     //const response = await axios.post(`${api}/offers/getoffersbycategory/?category=${input.category}`)
    //     const response = await axios.post(`${api}/offers/getoffersbycategory`,input)
        
    //     return response.data.map((offer)=>({
    //         ...offer,
    //         images:['https://www.wimacpc.com/assets/images/no-disponible.png'],
    //         price: 3570,
    //         discount:10
    //     }))
    // })  