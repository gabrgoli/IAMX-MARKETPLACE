import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Chip, IconButton,Box,Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import Rating from '../Components/Rating'


//FUNCION PRINCIPAL
export default function CardOffer({offer,defaultPic='https://www.wimacpc.com/assets/images/no-disponible.png'}) {
  const {isAuthenticated}=useAuth0()
  const navigate=useNavigate()
  const dispatch=useDispatch()


  return (
    <Card onClick={()=>navigate(`/offer/${offer.id}`)} sx={{cursor:'pointer' ,height:520, width: {xs:250 ,sm:250}}}>

       <CardMedia     
            component="img"
            height="200"
            image={offer.picture||defaultPic}
            alt="gf"
            sx={{objectFit:'contain'}}
           />
        <CardContent>

            <div className='CardOfferCardText'>
              <Tooltip title={offer.title} placement="top">
                  <Box sx={{display:'flex'}}>
                    <h6 className='CardOfferBigTitle' variant="h6" sx={{fontWeight:'600'}}>
                      {offer.title}
                    </h6>
                  </Box>
              </Tooltip>
              <div className='CardOfferBigPrice'>
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

        </CardContent>
    </Card>
  );
}