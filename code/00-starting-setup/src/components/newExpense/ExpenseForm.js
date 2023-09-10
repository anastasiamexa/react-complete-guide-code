import React, {useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
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

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>{enteredTitle}</label>
          <input type='text' onChange={(event) => inputChangeHandler('title', event.target.value)}/>
        </div>
        <div className='new-expense__control'>
          <label>{enteredAmount}</label>
          <input type='number' min='0.01' step='0.01' onChange={(event) => inputChangeHandler('amount', event.target.value)}/>
        </div>
        <div className='new-expense__control'>
          <label>{enteredDate}</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={(event) => inputChangeHandler('date', event.target.value)}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;