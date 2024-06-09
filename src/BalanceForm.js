import React from 'react'
import './BalanceForm.css'

function BalanceForm({eventHandler}) {
  return (
    <div id='balance-form'>
        <div className='form-container'>
            <div className='form-title'>Add Balance</div>
            <div class='row'>
                <input placeholder='Incone Amount' />
                <button type='submit' style={{background: '#F4BB4A', color: 'white' }}>Add Balance</button>
                <button style={{background: '#D9D9D9', color: 'white' }} onClick={eventHandler}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default BalanceForm