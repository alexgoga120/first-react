import Chart from "../../charts/chart/Chart";
import DataPoints from "../../../models/DataPoints";
import Expenses from "../../../models/Expenses";

interface Props {
    expenses: Expenses[]
}
function ExpenseChart(props: Props){

    const dataPoints:DataPoints[] = [
        { label:'Ene', value:0},
        { label:'Feb', value:0},
        { label:'Mar', value:0},
        { label:'Abr', value:0},
        { label:'May', value:0},
        { label:'Jun', value:0},
        { label:'Jul', value:0},
        { label:'Ago', value:0},
        { label:'Sep', value:0},
        { label:'Oct', value:0},
        { label:'Nov', value:0},
        { label:'Dic', value:0},
    ]

    for (const expense in props.expenses){
        const expenseMonth = props.expenses[expense].date.getMonth();
        dataPoints[expenseMonth].value += props.expenses[expense].amount;
    }

    return <Chart dataPoints={dataPoints}></Chart>
}

export default ExpenseChart