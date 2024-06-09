
import React from 'react'
import "./TopExpenses.css"
import MyBarChart from './MyBarChart'

function TopExpenses() {
  return (
    <div>
        <div className='chart-header'>Top Expenses</div>
        <div className='chart-card'>
            <MyBarChart />
        </div>
    </div>
  )
}

export default TopExpenses