import { createReducer } from '@reduxjs/toolkit'
import * as actions from './actions'
import Cookie from 'js-cookie'


const initialState = {
  offers:[],
  offer:[],
  categories:[],
  category:"all",
  sideMenuOpenClose:false,
  darkMode:false,
}



const OrderByPrice=(state,action)=>{  //Ordenar por precio mayor a menos Funcion
        const sortedProductsByPrice =
          action.payload === "precioMax"
            ? state.products.sort(function (a, b) {
                if (a.price < b.price) {
                  return 1;
                }
                if (b.price < a.price) {
                  return -1;
                }
                return 0;
              })
            : state.products.sort(function (a, b) {
                if (a.price < b.price) {
                  return -1;
                }
                if (b.price < a.price) {
                  return 1;
                }
                return 0;
              });

        return sortedProductsByPrice
}




const rootReducer = createReducer(initialState, (builder) => {
  builder



                          /////////////////////////////////////   
                         //      ACCIONES PARA PRODUCTOS    //   
                        ///////////////////////////////////// 

    .addCase(actions.GETOFFERS.fulfilled, (state, action) => {
      state.offers=[]
      state.offers=action.payload
    })

    .addCase(actions.GETOFFER.fulfilled, (state, action) => {
      state.offer=[]
      state.offer=action.payload
    })

    .addCase(actions.SEARCHOFFERSBYCATEGORY.fulfilled, (state, action) => {
      state.offers=[]
      state.offers=action.payload 
    })
    
    .addCase(actions.GETCATEGORIES.fulfilled, (state, action) => {
      state.categories=action.payload
    })

    .addCase(actions.GETCATEGORY, (state, action) => {
      state.category=action.payload
    })

    .addCase(actions.SEARCHBYTITLEOFFERS.fulfilled, (state, action) => {
      state.offers=[]
      state.offers=action.payload
    })

    .addCase(actions.SIDEMENUOPENCLOSE, (state, action) => {
      state.sideMenuOpenClose=action.payload
    })

    .addCase(actions.DARKMODE, (state, action) => {
      state.darkMode=action.payload
    })
    /*

    .addCase(actions.CREATEPRODUCT.fulfilled, (state, action) => {
    })

    .addCase(actions.GETPRODUCT.fulfilled, (state, action) => {
      state.detail=[]
      state.detail=action.payload
    })

    .addCase(actions.SEARCHBYNAMEPRODUCTS.fulfilled, (state, action) => {
      state.products=[]
      state.products=action.payload
    })


    .addCase(actions.ORDERBYPRICE, (state, action) => {
      const sortedProductsByPrice = OrderByPrice(state,action)
      state.products=[]
      state.products=sortedProductsByPrice
    })

    .addCase(actions.GETRECOMMENDED.fulfilled, (state, action) => {
      state.recommended=action.payload
    })

    .addCase(actions.MODIFYPRODUCT.fulfilled,(state,action)=>{

      state.product=action.payload 
      
    })

                          /////////////////////////////////////   
                         //      ACCIONES PARA USUARIOS    //   
                        ///////////////////////////////////// 

    .addCase(actions.GETUSERS.fulfilled, (state, action) => {
        state.users=action.payload
    })
                        
    .addCase(actions.SEARCHBYNAMEUSERS.fulfilled, (state, action) => {
      //state.users=[]
      state.users=action.payload
    })
    .addCase(actions.VERIFYADMIN.fulfilled, (state, action) => {
      state.isAdmin=action.payload
    })

    .addCase(actions.MODIFYUSER.fulfilled,(state,action)=>{
      if(action.payload!=='ok'){//si el usuario que tengo en cookies actualmente es igual al que modifique, modifica las cookies
      
        Cookie.set('user',JSON.stringify( action.payload ),{expires:0.08})
      }
    })

    .addCase(actions.GETREVIEWS.fulfilled, (state, action) => { //obtiene todas la reviews de la bdd
      state.reviews=action.payload
    })

    .addCase(actions.GETPRODUCTREVIEWS.fulfilled, (state, action) => { // todas las reviews de un producto en especifico
      state.productReviews=action.payload
    })

    .addCase(actions.GETWISHLIST.fulfilled, (state, action) => {
      state.wishList=action.payload
    })

    .addCase(actions.GETPRODUCTQUESTIONS.fulfilled, (state, action) => {
      state.questions=[]
      state.questions=action.payload
    })

    .addCase(actions.GETALLQUESTIONS.fulfilled, (state, action) => {
      state.allquestions=[]
      state.allquestions=action.payload
    })


    .addCase(actions.MAKEQUESTION.fulfilled, (state, action) => {
    })

    .addCase(actions.MAKEANSWER.fulfilled, (state, action) => {
    })


                          /////////////////////////////////////   
                         //      ACCIONES PARA ORDENES    //   
                        ///////////////////////////////////// 

    .addCase(actions.CREATEORDER.fulfilled, (state, action) => {
    })

    .addCase(actions.GETORDERS.fulfilled, (state, action) => {
      state.orders=action.payload
      
    })

    .addCase(actions.GETORDER.fulfilled, (state, action) => {
      state.order=action.payload
    })

    .addCase(actions.PAYORDER.fulfilled, (state, action) => {
    })

    .addCase(actions.SEARCHORDERS.fulfilled, (state, action) => {
      state.orders=[]
      state.orders=action.payload
    })

*/

})
export default rootReducer