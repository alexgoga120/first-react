import ChartBar from "../chartBar/ChartBar";
import "./index.css"
import DataPoints from "../../../models/DataPoints";

type Props = {
    dataPoints: DataPoints[]
}

function Chart(props: Props): JSX.Element {

    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointsValues);

    return (
        <div className="chart">
            {
                props.dataPoints.map((dataPoint) =>
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={totalMax}
                        label={dataPoint.label}
                    />
                )
            }
        </div>
    )
}

export default Chart;