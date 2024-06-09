import React from "react";
import "./Top.css";
import ButtonCard from "./ButtonCard";
import MyPieChart from "./MyPieChart";

function Top({ showAddExpenseForm, showAddBalanceForm }) {

  return (
    <div>
      <div className="title">Expense Tracker</div>
      <div className="main-container">
        <div className="container btn-container">
          <ButtonCard
            text={"Wallet Balance"}
            type={'wallet'}
            amount={5000}
            buttonTxt={"+ Add Income"}
            eventHandler={showAddBalanceForm}
          />
          <ButtonCard
            text={"Expenses"}
            type={'expense'}
            amount={500}
            buttonTxt={"+ Add Expense"}
            eventHandler={showAddExpenseForm}
          />
        </div>
        <div className="chart-container">
          <div style={{ width: '200px', height: '200px' }}>
            <MyPieChart />
          </div>
          <div className="legend">
            <div className="row">
              <div className="rect" style={{ background: '#A000FF' }}></div>
              <span>Food</span>
            </div>
            <div className="row">
              <div className="rect" style={{ background: '#FF9304' }}></div>
              <span>Entertainment</span>
            </div>
            <div className="row">
              <div className="rect" style={{ background: '#FDE006' }}></div>
              <span>travel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
