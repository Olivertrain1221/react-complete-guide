import React, { useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// THESE ARE PROPS THE EVENT LISTNER ON THE HTML?JSX on click runs variable which is a function effectively
function ExpenseItem(props) {
    // Use state is a built in react that monitors for changes BUT have to pass in what is expected to be changed in this case the button to the title
    // returns an array! previous value and the new version hence the 
  const [title, setTitle] = useState(props.title);

  // Click handler
  const changeTitle = () => {
    setTitle('updated');
    console.log(title)
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <p></p>
        <div className='expense-item__price test'>${props.amount}</div>
      </div>
      {/* THESE ARE PROPS THE EVENT LISTNER ON THE HTML?JSX on click runs variable which is a function effectively */}
      <button onClick={changeTitle}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;