import NewExpenses from "../../components/expenses/newExpense/NewExpenses";
import ExpenseBody from "../../components/expenses/expenseBody/ExpenseBody";
import {useState} from "react";
import ExpensesMain from "../../components/models/expenses";

function Expenses() {
    const expensesBase: ExpensesMain[] = [
        {
            id: 'e1',
            title: 'Papel de baño',
            amount: 94.12,
            date: new Date(2023, 7, 14)
        },
        {
            id: 'e2',
            title: 'Nueva Tv',
            amount: 799.49,
            date: new Date(2022, 2, 12)
        },
        {
            id: 'e3',
            title: 'Seguro de Auto',
            amount: 294.67,
            date: new Date(2021, 2, 28)
        },
        {
            id: 'e4',
            title: 'Nuevo escritorio (Madera)',
            amount: 450,
            date: new Date(2020, 5, 12)
        }
    ];

    const [expenses, setExpenses] = useState<ExpensesMain[]>(expensesBase);
    const [expensesFilter, setExpensesFilter] = useState<ExpensesMain[] | undefined>(undefined);


    const addExpense = (newExpense: ExpensesMain) => {
        // setExpenses([...expenses, newExpense]);
        setExpenses((prevState) => {
            const newValue = [...prevState, newExpense];
            if (expensesFilter) {
                const currentFilter = expensesFilter[0].date.getFullYear().toString();
                filterAddExpense(newValue, currentFilter);
            }
            return newValue;
        });
    }

    const filterChangeHandler = (filter: string) => {
        setExpensesFilter((expenses)!.filter(expense => expense.date.getFullYear().toString() === filter));
    }

    const filterAddExpense = (newExpense : ExpensesMain[], filter: string) => {
        setExpensesFilter((newExpense)!.filter(expense => expense.date.getFullYear().toString() === filter));
    }

    return (
        <div>
            <NewExpenses onAddExpense={addExpense}/>
            <ExpenseBody expenses={expenses}
                         expensesFilter={expensesFilter}
                         onFilterChange={filterChangeHandler}
            />
        </div>
    )
}

export default Expenses;