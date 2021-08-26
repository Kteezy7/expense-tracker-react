export default (state, action) => {
    //type is like an id
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return { //create a new state and send it
                ...state, //send current state and all transaction value except the deleted one
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions] //new transaction plus the previous
            }
        default: 
         return state;
    }    
}