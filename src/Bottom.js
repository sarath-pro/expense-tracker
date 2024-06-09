import React from 'react'
import RecentTransactions from './RecentTransactions'
import TopExpenses from './TopExpenses'
import "./Bottom.css"

function Bottom({showEditExpenseForm}) {
  return (
    <div className='bottom-container'>
      <RecentTransactions showEditExpenseForm={showEditExpenseForm}/>
      <TopExpenses />
    </div>
  )
}

export default Bottom