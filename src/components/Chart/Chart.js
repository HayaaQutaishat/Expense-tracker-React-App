import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValuesArray = props.dataPoints.map(
    (dataPoint) => dataPoint.value
  );
  const totalMaximum = Math.max(...dataPointValuesArray);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};

export default Chart;
