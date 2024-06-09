import React from 'react'
import './ExpenseForm.css'

function ExpenseForm({eventHandler, type}) {
    
  return (
    <div id='expense-form'>
        <div className='form-container'>
            <div className='form-title'>
                {type==='edit'? 'Edit Expenses' : 'Add Expenses'}
            </div>
            <div class='row'>
                <input placeholder='Title' />
                <input placeholder='Price' />
            </div>
            <div class='row'>
                <input placeholder='Select Category' />
                <input placeholder='dd/mm/yyyy' />
            </div>
            <div class='row row-start'>
                <button type='submit' style={{background: '#F4BB4A', color: 'white' }}>Add Expense</button>
                <button style={{background: '#D9D9D9', color: 'white' }} onClick={eventHandler}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default ExpenseForm