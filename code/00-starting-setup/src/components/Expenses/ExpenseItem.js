import React, {useState} from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  /** 
   * useState returns an array with 2 elements,
   * the first is the current state value, the second is a function that allows us to update the state value.
   * useState is a React hook, it allows us to manage state in a functional component.
   */
  const [title, setTitle] = useState(props.title); 

  function clickHandler() {
    setTitle('Updated!');
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;