import React from 'react'
 

const Button1 = ({text,active=true}) => {
  return (
    <div className={active?'Button1':'Button1Desactive'}>
        {text}
    </div>
  )
}

export default Button1