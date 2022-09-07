import React,{useState} from "react"
import './ExpenseForm.css'
const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmout] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountHandler = (event) => {
        setEnteredAmout(event.target.value);
    }
    const dateHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredAmout('');
        setEnteredTitle('');
        setEnteredDate('');
    };

    const toggleHandlerNoAdd = (event) => {
        event.preventDefault();
        props.signalToggle();
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='0.01' value={enteredAmount} step='0.01' onChange={amountHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min='2019-01-01' value={enteredDate}  step='2023-12-31' onChange={dateHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={toggleHandlerNoAdd} type="button">Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm