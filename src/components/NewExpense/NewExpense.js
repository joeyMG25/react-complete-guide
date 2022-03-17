import React, { useState } from "react";

import './NewExpense.css';

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{
    const [newExpenseButton, setNewExpenseButton] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        

        props.onAddExpense(expenseData);
        setNewExpenseButton(false);
    };

    const newExpenseBtnHandler = () => {
        setNewExpenseButton(true);
        console.log('The button is working');
    }

    const cancelButton = () => {
        setNewExpenseButton(false);
    }

    

    return(
        <div className="new-expense">
            {!newExpenseButton && <button onClick={newExpenseBtnHandler}>Add New Expense</button>}
            {newExpenseButton && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelButton} />}
        </div>
    );

    };

export default NewExpense;