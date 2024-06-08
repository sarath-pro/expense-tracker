import React from 'react'
import "./ButtonCard.css"

function ButtonCard({type, text, amount, buttonTxt}) {
  return (
    <div className='button-card'>
        <div className='text'>{text}: &#8377;<span className={type +" amount"}>{amount}</span></div>
        <button className={type+" btn-text"}>{buttonTxt}</button>
    </div>
  )
}

export default ButtonCard