import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from '../Rating'
import './CardOfferMobile.css'

export default function CardOfferMobile({offer}) {

  const navigate=useNavigate()
  const dispatch=useDispatch()

  return (
      <div onClick={()=>navigate(`/offer/${offer.idoffer}`)} className='CardOfferMobileContainer'>
        <img src={offer?.picture} alt='pic'/>
        <div className='CardOfferMobileInfo'>        
            <h4 className='CardOfferMobileTitle'> {offer?.title}  </h4>
            <div className='CardOfferMobilePrice'>

            {
                !offer.percent?
                <h4>$<span>{new Intl.NumberFormat().format(offer.price)}</span>  </h4>
                :
                <>
                  <h4>$<del>{new Intl.NumberFormat().format(offer.price)}</del>  </h4>
                  <h4>$<span>{new Intl.NumberFormat().format(offer.price)*(100-offer.percent)/100}</span>  </h4>              
                </>

            }

              <h4> {offer?.percent? `${offer.percent}%`: <></>}  </h4>
            </div>

              <h4> {offer?.country}  </h4>

              <div className="CardOfferMobileRaiting"><Rating/></div>

        </div>
      </div>
  );
}