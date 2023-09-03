import Chart from "react-apexcharts";
type AreaChartProps = {
  options: object;
  series: any[];
};
const AreaChart = ({ options, series }: AreaChartProps) => {
  return (
    <Chart
      options={options}
      series={series}
      className="rounded border shadow-md"
    />
  );
};
export default AreaChart;
