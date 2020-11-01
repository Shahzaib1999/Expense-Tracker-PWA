export default (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload.transaction, ...state.transactions],
                balance: action.payload.total
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload.id),
                balance: action.payload.total
            }
        default:
            return state;
    }
}