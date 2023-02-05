import "./index.css"
import ExpenseItem from "../expenseItem/ExpenseItem";
import Expenses from "../../models/expenses";
import ReactCard from "../../commons/cardComp/ReactCard";
import React, {useState} from "react";
import ExpenseFilter from "../expenseFilter/ExpenseFilter";

type Props = {
    expenses: Expenses[],
    expensesFilter: Expenses[] | undefined,
    onFilterChange: Function
}

function ExpenseBody(props: Props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (filter: string) => {
        setFilteredYear(filter)
        props.onFilterChange(filter);
    }

    const showExpenses = () => {
        const expensesList = props.expensesFilter || props.expenses;
        return expensesList.map((expense: Expenses) => (
            <ExpenseItem
                key={expense.id}
                amount={expense.amount}
                date={expense.date}
                title={expense.title}/>
        ))
    }

    return (
        <ReactCard className="expenses">
            <ExpenseFilter key="filter"
                           filteredYear={filteredYear}
                           onFilterChange={filterChangeHandler}
            />
            <>{
                showExpenses()
            }</>

        </ReactCard>
    )
}

export default ExpenseBody;