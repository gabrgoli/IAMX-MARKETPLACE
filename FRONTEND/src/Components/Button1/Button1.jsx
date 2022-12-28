import React from 'react'
import './Button1.css'

const Button1 = ({text,active=true, variant=1,children}) => {
  return (
    <div className={active?variant===1?'Button1A':'Button1B':'Button1Disable'} >
        {text}
        {children}
    </div>
  )
}

export default Button1