import { display } from '@mui/system'
import React from 'react'
import style from "./OrderNow.module.css";
const OrderNowComponent = ({price='15,99', simbol='€', subscription=false}) => {
  return (
    <div className={style.Container}>
            <div style={{display:'flex', alignItems:'baseline'}}>
              <h1 className={style.Price}>{price}</h1>
              <div className={style.Currency}>{simbol}</div>
            </div>
            {subscription&&<h1 className={style.Text1}>per year</h1>}
            <h1 className={style.Text1}>
              <img className={style.Line} src="line.svg" alt="IAMX" ></img>
              or
              <img className={style.Line} src="line.svg" alt="IAMX" ></img>
            </h1>
            <h1 className={style.Text2}>10 IAMX Token</h1>
            {price===0&&<h1 className={style.Text1}>(Free)</h1>}
            <img className={style.Icon}  src="infoIcon.svg" alt="IAMX" ></img>
    </div>
  )
}

export default OrderNowComponent