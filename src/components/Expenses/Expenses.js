import React, { useState } from "react";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter.js";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2021");

  const yearHandler = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <div className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onSelectYear={yearHandler}
        ></ExpenseFilter>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses}/>
      </div>
    </div>
  );
}

export default Expenses;
