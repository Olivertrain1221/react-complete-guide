import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// THESE ARE PROPS THE EVENT LISTNER ON THE HTML?JSX on click runs variable which is a function effectively
function ExpenseItem(props) {
    const changeTitle = () => {
      console.log("test");
    }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <p></p>
        <div className='expense-item__price test'>${props.amount}</div>
      </div>
      {/* THESE ARE PROPS THE EVENT LISTNER ON THE HTML?JSX on click runs variable which is a function effectively */}
      <button onClick={changeTitle}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;