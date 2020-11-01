import React from 'react';

export const TransactionList = (props) => {
  let sign = props.transaction.amount > 0 ? '+' : '-';
  return (
    <div className="transactionWrapper" style={props.transaction.amount > 0 ? { borderRight: '5px solid #17ce67' } : { borderRight: '5px solid #f25052' }}>
      <p className="deleteBtn" onClick={() => props.deleteTransaction(props.transaction.id, props.transaction.amount)}>x</p>
      <p className="m-1">{props.transaction.description}</p>
      <p className="m-1">{sign}${Math.abs(props.transaction.amount)}</p>
    </div>
  )
}