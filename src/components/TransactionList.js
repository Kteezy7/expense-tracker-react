import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction';

export const TransactionList = () => {
    //we use the useContext hook to pull the global state onto other components
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {/* needs to know which specific transaction to render, so we have to pass it as a prop */}
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}    
            </ul>
        </>
    )
}
