import React, {useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  // Multiple states
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  function inputChangeHandler(identifier, value) {
    if (identifier === 'title') {
      setEnteredTitle(value);
    } else if (identifier === 'amount') {
      setEnteredAmount(value);
    } else if (identifier === 'date') {
      setEnteredDate(value);
    }
  };

  function submitHandler(event) {
    // Prevents the default behavior of the form
    // (sending a request and reloading the page)
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    
    // Pass the data to the parent component
    // and execute the function
    props.onSaveExpenseData(expenseData);
    // Clear the form after submitting
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={(event) => inputChangeHandler('title', event.target.value)}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={(event) => inputChangeHandler('amount', event.target.value)}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2024-12-31' value={enteredDate} onChange={(event) => inputChangeHandler('date', event.target.value)}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;