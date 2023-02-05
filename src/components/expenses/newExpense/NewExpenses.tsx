
import './index.css';
import ExpenseForm from "./form/ExpenseForm";
import Expenses from "../../models/IExpenses";

type Props = {
    onAddExpense: Function
}
function NewExpenses (props: Props) {

    const saveNewExpenseData = (enteredExpenseData : Expenses) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onNewExpenseData={saveNewExpenseData}/>
        </div>
    )
}

export default NewExpenses;