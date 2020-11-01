import React, { useState, useContext } from 'react';
import swal from 'sweetalert';
import { GlobalContext } from '../../context/GlobalState';

export const AddTransaction = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    if (!description) return swal("Oops!", "Please enter description!", "warning");
    if (!amount) return swal("Oops!", "Please enter amount!", "warning");

    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      description,
      amount: parseFloat(amount)
    };

    addTransaction(newTransaction);
    setAmount('');
    setDescription('');
  }

  return (
    <div className="addTransactionWrapper">
      <form onSubmit={onSubmit}>
        <div className="descriptionWrapper">
          <label className="descriptionLabel">Description</label>
          <input type="text" className="inp" onChange={(e) => setDescription(e.target.value)} value={description} />
        </div>
        <div className="amountWrapper">
          <label className="amountLabel">Transaction Amount</label>
          <input type="number" className="inp" onChange={(e) => setAmount(e.target.value)} value={amount} />
        </div>
        <button className="addBtn">Add transaction</button>
      </form>
    </div>
  )
}