import React from 'react'
import "./ButtonCard.css"

function ButtonCard({type, text, amount, buttonTxt, eventHandler}) {
  return (
    <div className='button-card'>
        <div className='text'>{text}: <span className={type +" amount"}>&#8377;{amount}</span></div>
        <button className={type+" btn-text"} onClick={()=>{
          eventHandler(type)
        }}>{buttonTxt}</button>
    </div>
  )
}

export default ButtonCard