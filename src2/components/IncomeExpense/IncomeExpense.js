import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  
  let amounts = transactions.length && transactions.map(transaction => parseFloat(transaction.amount));
  let income = amounts.length && amounts.filter(amount => amount > 0).reduce((a, b) => (a += b), 0);
  let expense = amounts.length && amounts.filter(amount => amount < 0).reduce((a, b) => a -= b, 0);
  
  return (
    <div className="incomeExpenseWrapper">
      <div className="incomeWrapper">
        <p className="incomeText m-1">Income</p>
        <p className="incomeAmountText m-1">${income ? income : '0.00'}</p>
      </div>
      <div className="expenseWrapper">
        <p className="expenseText m-1">Expense</p>
        <p className="expenseAmountText m-1">${expense ? Math.abs(expense) : '0.00'}</p>
      </div>
    </div>
  )
}