import "./index.css"
import DataPoints from "../../../models/DataPoints";
import {CSSProperties} from "react";

interface Props extends DataPoints {
    maxValue: number
}

function ChartBar(props: Props) {

    let barFillHeight: CSSProperties = {
        height: '0 %'
    };

    if (props.maxValue > 0) {
        barFillHeight.height = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={barFillHeight}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
}

export default ChartBar;