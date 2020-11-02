import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";
import { transactionType, transType } from "../Types/Types";

const initialState: transactionType = {
  transactions: [],
  balance: 0.0,
};

type contextProps = {
  transactions: transType[]
  addTransaction: (newTransaction: transType) => void,
  deleteTransaction: (id: number, amount: number) => void
  balance: number;
};

export const GlobalContext = createContext<Partial<contextProps>>({});

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addTransaction(transaction: transType) {
    let total = state.balance + transaction.amount;
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        transaction,
        total,
      },
    });
  }

  function deleteTransaction(id: number, amount: number) {
    let total = state.balance - amount;
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: {
        id,
        total,
      },
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
        balance: state.balance,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
