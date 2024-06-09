import React from 'react'
import TransactionItem from './TransactionItem'
import "./RecentTransactions.css"
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

function RecentTransactions({showEditExpenseForm}) {
    let data = [
        {
            name: 'Samosa',
            price: 150,
            date: 'March 20, 2024',
            img: 'assets/samosa.png',
            category: 'Food'
        },
        {
            name: 'Movie',
            price: 300,
            date: 'March 21, 2024',
            img: 'assets/movie.png',
            category: 'Entertainment'
        },
        {
            name: 'Auto',
            price: 50,
            date: 'March 22, 2024',
            img: 'assets/auto.png',
            category: 'Travel'
        },
    ]

    return (
        <div>
            <div className='transactions-header'>Recent Transactions</div>
            <div className='transactions-card'>
                <div>
                {data.map((item) => (
                    <TransactionItem
                        itemName={item.name}
                        imgSrc={item.img}
                        date={item.date}
                        category={item.category}
                        price={item.price} 
                        showEditExpenseForm={showEditExpenseForm}/>
                ))}
                </div>
                <div className='navigation'>
                    <button className='direction'><GoArrowLeft style={{width: '24px', height: '24px'}}/></button>
                    <button className='numeric'>1</button>
                    <button className='direction'><GoArrowRight  style={{width: '24px', height: '24px'}}/></button>
                </div>
                
            </div>
            

        </div>
    )
}

export default RecentTransactions