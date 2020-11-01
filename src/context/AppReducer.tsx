import { transactionType, actionType } from "../Types/Types";

export default (state: transactionType, action: actionType) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload.transaction],
        balance: action.payload.total,
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload.id
        ),
        balance: action.payload.total,
      };
    default:
      return state;
  }
};
