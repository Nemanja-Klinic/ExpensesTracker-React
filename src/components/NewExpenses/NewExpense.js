import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const [showForm, toggleForm] = useState(false);

  const saveExpenseHandler = (expData) => {
    const expenseData = {
      ...expData,
      id: Math.random().toString(),
    };
    toggleForm(!showForm);
    props.onAddExpense(expenseData);
  };
  const toggleHandler = () => {
    toggleForm(!showForm);
  };

  if (!showForm) {
    return <div className="new-expense button">
        <button onClick={toggleHandler}>Add Expense</button>
    </div>
  } else {

    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseHandler} signalToggle={toggleHandler}></ExpenseForm>
      </div>
    );
  }
};

export default NewExpense;
