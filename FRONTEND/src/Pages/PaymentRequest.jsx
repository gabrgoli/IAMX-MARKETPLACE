import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import CardUser from '../Components/CardUser/CardUser'

export const PaymentRequest = () => {
  return (
    <div>
        <NavBar title={'Payment Request'} arrow={false}/>
        <CardUser edit={false}/>

        <div className='box-buttons-paymentRequest'>
            <button className='buttonPaymentRequest'>   Decline   </button>
            <button className='buttonPaymentRequest'>   Allow   </button>
        </div>


    </div>
  )
}


export default PaymentRequest