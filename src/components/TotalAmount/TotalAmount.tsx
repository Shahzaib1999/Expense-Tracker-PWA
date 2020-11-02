import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const TotalAmount = () => {
  const { balance } = useContext(GlobalContext);
  return (
    <div className="totalWrapper">
      <p className="totalText">
        Current Balance
      </p>
      <p className="amountText">
        ${balance}
      </p>
    </div>
  )
}