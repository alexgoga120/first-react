import './index.css';
function ExpenseDate(props: { date: Date }) {
    const date = props.date;
    const month = date.toLocaleString('es-MX', {month: 'long'});
    const day = date.toLocaleString('es-MX', {day: '2-digit'});
    const year = date.getFullYear();
    return (
        <div className="expense-date">
            <div className="body">
                <div className="expense-date__month">
                    {month}
                </div>
                <div className="expense-date__year">
                    {year}
                </div>
                <div className="expense-date__day">
                    {day}
                </div>
            </div>
        </div>
    )
}

export default ExpenseDate;