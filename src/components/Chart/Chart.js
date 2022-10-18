import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    // how much the bar should be filled
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <BarChart
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
