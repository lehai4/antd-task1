import Chart from "react-apexcharts";
type ColumnLineChartProps = {
  options: object;
  series: any[];
};
const ColumnLineChart = ({ options, series }: ColumnLineChartProps) => {
  return (
    <Chart
      options={options}
      series={series}
      className="rounded border shadow-md"
    />
  );
};
export default ColumnLineChart;
