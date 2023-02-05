import './index.css'
import ExpenseDate from "../expenseDate/ExpenseDate";
import ExpenseTitle from "../expenseTitle/ExpenseTitle";
import ExpenseAmount from "../expenseAmount/ExpenseAmount";
import ReactCard from "../../commons/cardComp/ReactCard";

type Props = {
    date: Date;
    title: String;
    amount: Number;
}

function ExpenseItem(props: Props) {
    const expensesDate: Date = props.date;
    const expensesAmount: Number = props.amount;

    return (
        <li>
            <ReactCard className="expense-item">
                <ExpenseDate date={expensesDate}/>
                <div className="expense-item__description">
                    <ExpenseTitle title={props.title}/>
                    <ExpenseAmount amount={`$${expensesAmount.toString()}`}></ExpenseAmount>
                </div>
            </ReactCard>
        </li>
    );
}

export default ExpenseItem;