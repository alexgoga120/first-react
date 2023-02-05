import "./index.css"
import IExpenses from "../../models/IExpenses";
import ReactCard from "../../commons/cardComp/ReactCard";
import React, {useState} from "react";
import ExpenseFilter from "../expenseFilter/ExpenseFilter";
import ExpenseList from "../expenseList/ExpenseList";

type Props = {
    expenses: IExpenses[],
    expensesFilter: IExpenses[] | undefined,
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

            <ExpenseList expenses={props.expensesFilter || props.expenses}/>

        </ReactCard>
    )
}

export default ExpenseBody;