import "./index.css"
import ExpenseItem from "../expenseItem/ExpenseItem";
import Expenses from "../../models/expenses";
import ReactCard from "../../commons/cardComp/ReactCard";

function ExpenseBase(props: { expenses:Array<Expenses> }){
    const expenses = props.expenses;
    return (
        <ReactCard className="expenses">
            {
                expenses.map(expense =>
                    <ExpenseItem
                        amount={expense.amount}
                        date={expense.date}
                        title={expense.title}/>)
            }
        </ReactCard>
    )
}

export default ExpenseBase;