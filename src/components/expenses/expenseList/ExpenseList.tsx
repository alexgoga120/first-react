import ExpenseItem from "../expenseItem/ExpenseItem";
import React from "react";
import IExpenses from "../../models/IExpenses";
import "./index.css"

type Props = {
    expenses: IExpenses[]
}

function ExpenseList(props: Props): JSX.Element {

    const expensesList = props.expenses;
    if (expensesList.length === 0) {
        return <p className="expenses-list__fallback">No se han encontrado datos.</p>
    }
    return <ul className="expenses-list">
        {
            expensesList.map((expense: IExpenses) => (
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