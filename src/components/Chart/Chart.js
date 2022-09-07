import React from "react"
import "./Chart.css"
import ChartBar from "./ChartBar"

const Chart = props => {
    
    const dataValues = props.chartData.map(data => data.value);

    const totalMaximum = Math.max(...dataValues);


    return (
    <div className="chart">
        {props.chartData.map(data => (
            <ChartBar
            key={data.label} 
            value={data.value} 
            maxValue={totalMaximum} 
            label={data.label} 
            />))}
    </div>
    )
};

export default Chart