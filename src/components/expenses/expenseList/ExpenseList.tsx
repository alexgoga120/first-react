import ExpenseItem from "../expenseItem/ExpenseItem";
import React from "react";
import Expenses from "../../../models/Expenses";
import "./index.css"

type Props = {
    expenses: Expenses[]
}

function ExpenseList(props: Props): JSX.Element {

    const expensesList = props.expenses;
    if (expensesList.length === 0) {
        return <p className="expenses-list__fallback">No se han encontrado datos.</p>
    }
    return <ul className="expenses-list">
        {
            expensesList.map((expense: Expenses) => (
                <ExpenseItem
                    key={expense.id}
                    amount={expense.amount}
                    date={expense.date}
                    title={expense.title}/>
            ))
        }
    </ul>
}

export default ExpenseList;