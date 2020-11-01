import React from 'react';

import { Header } from './components/Header/Header';
import { TotalAmount } from './components/TotalAmount/TotalAmount';
import { IncomeExpense } from './components/IncomeExpense/IncomeExpense';
import { Transaction } from './components/Transaction/Transaction';
import { AddTransaction } from './components/AddTransaction/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="App-header">
        <Header />
        <TotalAmount />
        <div className="bodyWrapper">
          <IncomeExpense />
          <Transaction />
          <p className="transactionHistoryText m-20">Add New Transaction</p>
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
