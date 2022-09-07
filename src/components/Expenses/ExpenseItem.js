import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate.js'
import React, {useState} from "react";

function ExpenseItem(props){
   
    const [title,setTitle] = useState(props.title);

    return (
    <div className='expense-item'>
        <div>
            <ExpenseDate date={props.date}/>
        </div>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    </div>
    );
}

export default ExpenseItem;