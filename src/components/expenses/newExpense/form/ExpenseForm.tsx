import './index.css';
import React, {useState} from "react";

// interface FormData {
//     enteredTitle: String,
//     enteredAmount: String,
//     enteredDate: String
// }

type Props = {
    onNewExpenseData: Function,
    onCancelSubmit: React.MouseEventHandler<HTMLButtonElement>
}

function ExpenseForm(props : Props) {

    // const [userInput, setUserInput] = useState<FormData>({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setUserInput((prevState) => ({
        //     ...prevState,
        //     enteredTitle: event.target.value
        // }));
        setEnteredTitle(event.target.value);
    }

    const amountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setUserInput((prevState) => ({
        //     ...prevState,
        //     enteredAmount: event.target.value
        // }));
        setEnteredAmount(event.target.value);
    }

    const dateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setUserInput((prevState) => ({
        //     ...prevState,
        //     enteredDate: event.target.value
        // }));
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onNewExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Titulo</label>
                    <input value={enteredTitle}
                           onChange={titleChange}
                           type="text"/>
                </div>
                <div className="new-expense__control">
                    <label>Precio</label>
                    <input value={enteredAmount}
                           onChange={amountChange}
                           type="number"
                           min="0.01"
                           step="0.01"/>
                </div>
                <div className="new-expense__control">
                    <label>Fecha</label>
                    <input value={enteredDate}
                           onChange={dateChange}
                           type="date"
                           min="2019-01-01"
                           max="2023-12-31"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.onCancelSubmit}>Cancelar</button>
                <button type="submit">Añadir gasto</button>
            </div>
        </form>
    )
}

export default ExpenseForm;