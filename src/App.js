import React from 'react';
import Expenses from './components/Expenses/Expenses';

// A arrow function is now preffered method to writing a function
// Normal = function App() {
//      BLAR BLAR BLAR
// }
// Arrow = const App = () => {
//      BLAR BLAR BLAR
// }

  
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <div>
        <Expenses items={expenses}/>
      </div>
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
