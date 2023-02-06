import './index.css';
import ExpenseForm from "./form/ExpenseForm";
import Expenses from "../../../models/Expenses";
import React, {useState} from "react";

type Props = {
    onAddExpense: Function
}

function NewExpenses(props: Props) {

    const saveNewExpenseData = (enteredExpenseData: Expenses) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    const [enableForm, setEnableForm] = useState(false);

    const toggleForm = () => {
        setEnableForm((prevState) => {
            return !prevState
        })
    }

    const showContent = () => {
        if (enableForm) {
            return <ExpenseForm onNewExpenseData={saveNewExpenseData} onCancelSubmit={toggleForm}/>
        }
        return (
            <div className="new-expense__add">
                <button type="submit" onClick={toggleForm}>Añadir nuevo gasto</button>
            </div>
        )
    }

    return (
        <div className="new-expense">
            {showContent()}
        </div>
    )
}

export default NewExpenses;