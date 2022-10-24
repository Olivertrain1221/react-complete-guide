import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
// A arrow function is now preffered method to writing a function
// Normal = function App() {
//      BLAR BLAR BLAR
// }
// Arrow = const App = () => {
//      BLAR BLAR BLAR
// }
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Rent",
    amount: 550.00,
    date: new Date(2022, 7, 14),
  },
  { id: "e2",
    title: "Loan",
    amount: 180.00,
    date: new Date(2022, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 55.00,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",  
    title: "Phone",
    amount: 55.00,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 55.00,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 55.00,
    date: new Date(2022, 2, 28),
  },
];
  
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses}/>
    </div>
  );
}

export default App;

  // React.createElement('div',
  //  {},
  //  React.createElement('h2', {}, "Lets's Get Started"),
  //  React.createElement(Expenses, { items: expenses })
  // );
  // creates the element says what the element is 'div' and then nothing to pass so empty array {}//
