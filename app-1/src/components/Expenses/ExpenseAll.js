import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseAll.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';

const ExpenseAll = () => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const onYearSelection = (selectedYear) => {
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 95.12,
            date: new Date(2022, 11, 25),
        },
        {
            id: 'e2',
            title: 'Tissues',
            amount: 95.12,
            date: new Date(2022, 11, 25),
        }, {
            id: 'e3',
            title: 'Napkins',
            amount: 95.12,
            date: new Date(2022, 11, 25),
        }, {
            id: 'e4',
            title: 'ToothBrush',
            amount: 95.12,
            date: new Date(2022, 11, 25),
        },
    ]
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter defaultYear={filteredYear} onYearSelects={onYearSelection} />

            {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
            <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} /> */}
                <ExpenseItem expense={expenses[0]} />
                <ExpenseItem expense={expenses[1]} />
                <ExpenseItem expense={expenses[2]} />
                <ExpenseItem expense={expenses[3]} />
            </Card>
        </div>
    )
}

export default ExpenseAll

/**
 * Here in ExpenseFilter we are lifting state up(child to parent data passing)
 * performing 2-way binding by also sending data from parent to child as props.
 */