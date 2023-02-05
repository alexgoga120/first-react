import React from 'react';

import './index.css';

type Props = {
    filteredYear: string,
    'onFilterChange': Function
}


const ExpensesFilter = (props: Props) => {

    const selectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectValue: string = event.target.value;
        props.onFilterChange(selectValue);
    }


    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filtro por año</label>
                <select value={props.filteredYear} onChange={selectChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;