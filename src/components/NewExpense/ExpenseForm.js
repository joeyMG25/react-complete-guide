import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) =>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    /*You can use the following to use one state instead of several as shown on top
    
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    */    

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        /*Use this function if using one state for user input as shown above.(if your state update depends on the prev state)
        Safest way to make sure you are operating on latest state snapshot
        setUserInput((prevState) => {
            return{...prevState, enteredTitle: event.target.value};       
        });*/
    };
    
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData ={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
     
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2022-01-01" max="2030-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );

};

export default ExpenseForm;