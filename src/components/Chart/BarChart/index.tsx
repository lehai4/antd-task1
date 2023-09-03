import { MoreOutlined } from "@ant-design/icons";
import { Card, Popover, Typography } from "antd";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type PropsBarChart = {
  options: object;
  data: any;
};
const BarChart = ({ options, data }: PropsBarChart) => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (
    <Card>
      <div className="flex flex-row items-center justify-between mb-5">
        <Typography.Text strong className="text-lg">
          IncomeChart
        </Typography.Text>
        <Popover
          content={
            <div className="flex flex-col w-24">
              {["Action", "Another action", "Something else here"].map(
                (item, i) => (
                  <Typography.Text key={i} className="my-1">
                    {item}
                  </Typography.Text>
                )
              )}
            </div>
          }
          placement="bottomRight"
          trigger="click"
          open={open}
          onOpenChange={handleOpenChange}
        >
          <MoreOutlined style={{ fontSize: 20 }} />
        </Popover>
      </div>
      <Bar options={options} data={data} />
    </Card>
  );
};

export default BarChart;
