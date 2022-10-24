import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => {
    /* Start of looping over an array of values appose to increasig via index */
    /* Always add a key to a list that is being iterated over */
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'> No expenses found</h2>
    }

    return (
    <ul className='expenses-list'>
        {props.items.map((expense) => (
            <ExpenseItem
            key={expense.id} 
            title={expense.title}
            amount={expense.amount}
            date={expense.date} 
            />
        ))}
    </ul>
    );
};


export default ExpensesList;