import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { TransactionList } from '../TransactionList/TransactionList';

export const Transaction = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  const onDeleteTransaction = (id, amount) => {
    deleteTransaction(id, amount);
  }
  
  return (
    <>
      <p className="transactionHistoryText m-1">Transaction History</p>
      <div className="transactionsWrapper" style={(!transactions.length) ? { lineHeight: 6 } : {}}>
        {(transactions && transactions.length) ? transactions.map((transaction, ind) => {
          return (
            <TransactionList transaction={transaction} key={ind} deleteTransaction={onDeleteTransaction} />
          )
        })
          :
          <p>No History</p>}

      </div>
    </>
  )
}