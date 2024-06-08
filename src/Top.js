import React from "react";
import "./Top.css";
import ButtonCard from "./ButtonCard";
import MyChart from "./MyChart";

function Top() {
  return (
    <div>
      <div className="title">Expense Tracker</div>
      <div className="container">
        <div className="container btn-container">
          <ButtonCard
            text={"Wallet Balance"}
            type={'wallet'}
            amount={5000}
            buttonTxt={"+ Add Income"}
          />
          <ButtonCard
            text={"Expenses"}
            type={'expense'}
            amount={500}
            buttonTxt={"+ Add Expense"}
          />
        </div>
        <MyChart />
      </div>
    </div>
  );
}

export default Top;
