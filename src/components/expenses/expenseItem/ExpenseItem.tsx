import './index.css'
import ExpenseDate from "../expenseDate/ExpenseDate";
import ExpenseTitle from "../expenseTitle/ExpenseTitle";
import ExpenseAmount from "../expenseAmount/ExpenseAmount";
import {useState} from "react";
import ReactCard from "../../commons/cardComp/ReactCard";

type Props = {
    date: Date;
    title: String;
    amount: Number;
}

function ExpenseItem(props: Props) {
    const expensesDate: Date = props.date;
    const [expensesTitle, setExpensesTitle] = useState(props.title);
    const expensesAmount: Number = props.amount;

    const changeTitle = () => {
        setExpensesTitle("updated!!!");
    }

    return (
        <ReactCard className="expense-item">
            <ExpenseDate date={expensesDate}/>
            <div className="expense-item__description">
                <ExpenseTitle title={expensesTitle}/>
                <ExpenseAmount amount={`$${expensesAmount.toString()}`}></ExpenseAmount>
            </div>
            <button onClick={changeTitle}>Cambiar titulo</button>
        </ReactCard>
    );
}

export default ExpenseItem;