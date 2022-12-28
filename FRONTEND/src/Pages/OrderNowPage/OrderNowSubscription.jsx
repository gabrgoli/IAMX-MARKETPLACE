import React from 'react'
import Button1 from '../../Components/Button1/Button1'
import OrderNow from '../../Components/OrderNow/OrderNow'
import './OrderNowPage.css'
import LayoutPrincipal from '../../Layouts/LayoutPrincipal'
import TabBar from '../../Components/TabBar/TabBar'
import NavBarTitleBackArrow from '../../Components/NavBarTitleBackArrow/NavBarTitleBackArrow'
const OrderNowPage = () => {

  const [ubication,setUbication]=React.useState('subscription')

  return (
    <LayoutPrincipal showNavbar={false}>
      <NavBarTitleBackArrow>IAMX KYB</NavBarTitleBackArrow>
      <TabBar tab1={'pay-as-you-go'} tab2={'subscription'} ubication={ubication} setUbication={setUbication}/>
      <div className='OrderNow-Container'>
          <OrderNow subscription={true}/>
          <div className="OrderNow-ContainerButton">
            <Button1 variant={2}>Order Now</Button1>
          </div>
          <div className="OrderNow-ContainerIcons">
            <div style={{ display: "flex",cursor:"pointer"}}>
              <img className="Order-NowIcon" src="detailsIcon.svg" alt="IAMX" ></img>
              <h1 className="Order-NowIconText">Details</h1>
            </div >
            <div style={{ display: "flex",cursor:"pointer"}}>
              <img className="OrderNow-Icon" src="shareIcon.svg" alt="IAMX" ></img>
              <h1 className="OrderNow-IconText"> Share </h1>
            </div>
          </div>
      </div>
    </LayoutPrincipal>
  )
}

export default OrderNowPage