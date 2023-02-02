import './App.css';
import Expenses from "./components/models/expenses";
import NewExpenses from "./components/expenses/newExpense/NewExpenses";
import ExpenseBase from "./components/expenses/expenseMain/ExpenseBase";

function App() {
    const expenses: Array<Expenses> = [
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
            date: new Date(2023, 2, 12)
        },
        {
            id: 'e3',
            title: 'Seguro de Auto',
            amount: 294.67,
            date: new Date(2023, 2, 28)
        },
        {
            id: 'e4',
            title: 'Nuevo escritorio (Madera)',
            amount: 450,
            date: new Date(2023, 5, 12)
        }
    ];

    return (
        <div>
            <NewExpenses/>
            <ExpenseBase expenses={expenses}/>
        </div>
    )
}

export default App
