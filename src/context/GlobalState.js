import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    transactions: []
}

//Create Context
export const GlobalContext = createContext(initialState);

//Provider component provides the state and actions to the components or "children"
export const GlobalProvider = ({ children }) => {
    //Use reducer
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    //children are the components that are to be wrapped
    return (<GlobalContext.Provider value={{
        transactions: state.transactions ,       //we can access transactions from any component that is requested using useContext
        deleteTransaction,
        addTransaction
    }}>
        { children }   
    </GlobalContext.Provider>)
}
