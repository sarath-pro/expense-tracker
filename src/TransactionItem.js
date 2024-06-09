import React from 'react'
import "./TransactionItem.css"

function TransactionItem({ imgSrc, itemName, date, price, category, showEditExpenseForm }) {
    return (
        <div className='item'>
            <div className='container item-content'>
                <div className='container'>
                    <img src={imgSrc} alt={category} />
                    <div>
                        <div>{itemName}</div>
                        <div className='date'>{date}</div>
                    </div>
                </div>
                <div className='right container'>
                    <div style={{color: '#F4BB4A', margin:'0 16px'}}>&#8377;{price}</div>
                    <div className='action-imgs'>
                        <img src="assets/remove.png" />
                        <img src="assets/edit.png" onClick={showEditExpenseForm}/>
                    </div>
                    
                </div>
            </div>
            <div class='underline'></div>
        </div>
    )
}

export default TransactionItem