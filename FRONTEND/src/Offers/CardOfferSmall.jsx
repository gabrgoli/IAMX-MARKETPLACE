import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from '../Components/Rating'

export default function CardOfferSmall({offer}) {

  const navigate=useNavigate()
  const dispatch=useDispatch()

  return (
      <div onClick={()=>navigate(`/offer/${offer.idoffer}`)} className='CSmallCont'>
        <img src={offer?.picture} alt='pic'/>
        <div className='CSmallInfo'>        
            <h4> {offer?.title}  </h4>
            <div className='CSmallPrice'>

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

              <Rating/>

        </div>
      </div>
  );
}