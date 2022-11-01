import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  const incomeAmounts = incomeTransactions.map(
    incomeTransaction => incomeTransaction.incomeAmount
  );

  const expenseAmounts = expenseTransactions.map(
    expenseTransaction => expenseTransaction.expenseAmount
  );

  const totalIncome = incomeAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const totalExpenses = expenseAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h3>${(totalIncome - totalExpenses).toFixed(2)}</h3> 
      <div className="income-expense">
        <div className="plus">
          <h3 className="incom">Income</h3>
          <p className='p1'>+${totalIncome}</p>
        </div>
        <div className="minus">
          <div>
            <h3 className="expens">Expenses</h3>
            <p className='p2'>-${totalExpenses}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;