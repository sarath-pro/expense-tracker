import React from 'react'
import "./MyBarChart.css"

function Item({name, amount, max}) {
    let x = String((amount/max)*100)+'%'
    let style = {
        width: x
    }
    console.log('style:: ', style)
    return (
        <div className='bar-container' >
            <div className='bar-name'>{name}</div>
            <div className='bar' style={style} id={name}></div>
        </div>
    )
}

let data = [
    {
        name: 'Entertainment',
        amount: 2400
    },
    {
        name: 'Food',
        amount: 1300
    },
    {
        name: 'Travel',
        amount: 1000
    },
]

let max = 0
data.forEach((item)=>{
    max = item.amount<max ? max : item.amount 
})
// console.log('max:: ', max)

function MyBarChart() {
  return (
    <div className='data-container'>
        {
            data.map((item)=>(
                <Item name={item.name} amount={item.amount} max={max}/>
            ))
        }
    </div>
  )
}

export default MyBarChart