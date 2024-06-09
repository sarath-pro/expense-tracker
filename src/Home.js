import React, { useState } from 'react'
import Top from "./Top"
import Bottom from "./Bottom"
import "./Home.css"
import ExpenseForm from './ExpenseForm'
import BalanceForm from './BalanceForm'

function Home() {
  const [expenseForm, setExpenseForm] = useState(false)
  const [balanceForm, setBalanceForm] = useState(false)
  const [editExpenseForm, setEditExpenseForm] = useState(false)
  const showAddExpenseForm = () => {
    setExpenseForm(!expenseForm)
  }
  const showEditExpenseForm = () => {
    setEditExpenseForm(!editExpenseForm)
  }
  const showAddBalanceForm = () => {
    setBalanceForm(!balanceForm)
  }
  return (
    <div className='home'>
        <Top showAddBalanceForm={showAddBalanceForm} showAddExpenseForm={showAddExpenseForm}/>
        <Bottom showEditExpenseForm={showEditExpenseForm}/>
        {expenseForm && (<ExpenseForm eventHandler={showAddExpenseForm}/>)}
        {editExpenseForm && (<ExpenseForm eventHandler={showEditExpenseForm} type={'edit'}/>)}
        {balanceForm && (<BalanceForm eventHandler={showAddBalanceForm} />)}
        
    </div>
  )
}

export default Home