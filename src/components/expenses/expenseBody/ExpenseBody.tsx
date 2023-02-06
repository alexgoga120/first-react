import "./index.css"
import Expenses from "../../../models/Expenses";
import ReactCard from "../../commons/cardComp/ReactCard";
import React, {useState} from "react";
import ExpenseFilter from "../expenseFilter/ExpenseFilter";
import ExpenseList from "../expenseList/ExpenseList";
import ExpenseChart from "../expenseChart/ExpenseChart";

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



    return (
        <ReactCard className="expenses">
            <ExpenseFilter key="filter"
                           filteredYear={filteredYear}
                           onFilterChange={filterChangeHandler}
            />
            <ExpenseChart expenses={props.expensesFilter || props.expenses}/>
            <ExpenseList expenses={props.expensesFilter || props.expenses}/>

        </ReactCard>
    )
}

export default ExpenseBody;