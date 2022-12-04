import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
   const [userInput, setUserInput]= useState({
        entereTitle :'',
        enteredDate : '',
        enteredAmount : '',
    })

    const titleChangeHandler = (e) => {
        setUserInput({
            ...userInput,                       //pulls out all data
            enteredTitle: e.target.value,       //and updates the new data
        })
    }

    const amountChangeHandler = (e) => {
        setUserInput({
            ...userInput,
            enteredAmount : e.target.value,
        })
    }

    const dateChangeHandler = (e) => {
        setUserInput({
            ...userInput,
            enteredDate: e.target.value,
        })
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date4" min="2022-12-04" max="2024-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm