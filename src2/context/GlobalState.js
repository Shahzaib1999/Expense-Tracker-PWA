import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: [],
    balance: 0.00
};

export const GlobalContext = createContext(AppReducer, initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addTransaction(transaction) {
        let total = state.balance + parseFloat(transaction.amount);
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: {
                transaction,
                total
            }
        });
    }

    function deleteTransaction(id, amount) {
        let total = state.balance - parseFloat(amount);
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: {
                id,
                total
            }
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        balance: state.balance,
        addTransaction,
        deleteTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}