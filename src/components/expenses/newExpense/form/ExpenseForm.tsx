import './index.css';
function ExpenseForm () {
    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Titulo</label>
                    <input type="text"/>
                </div>
                <div className="new-expense__control">
                    <label>Precio</label>
                    <input type="number" min="0.01" step="0.01"/>
                </div>
                <div className="new-expense__control">
                    <label>Fecha</label>
                    <input type="date" min="2019-01-01" max="2023-12-31"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Añadir gasto</button>
            </div>
        </form>
    )
}

export default ExpenseForm;