import { SvgIcon } from "@mui/material";
import { Card, Progress, Space, Typography } from "antd";

interface BoxContentProps {
  item: {
    title: string;
    iconMain: any;
    total: number;
    growthRate: {
      numberRate: number;
      iconRate: any;
    };
    progress: number;
    color: string;
    bg: string;
  };
}
const BoxContent = ({ item }: BoxContentProps) => {
  return (
    <Card className="relative" style={{ background: item.bg }}>
      <div className="absolute top-2/4 bottom-2/4 right-5 flex justify-end items-center ml-3">
        <SvgIcon
          style={{ fontSize: 100, opacity: 0.1 }}
          component={item.iconMain}
        />
      </div>
      <div className="mb-4">
        <Typography.Text className="text-xl mb-0 font-bold text-white">
          {item.title}
        </Typography.Text>
      </div>
      <div className="flex flex-row items-center justify-between">
        <Typography.Text className="text-2xl tracking-wider font-bold text-white">
          {item.total.toLocaleString()}
        </Typography.Text>
        <Space>
          <Typography.Text className="text-sm font-normal text-white">
            {item.growthRate.numberRate}%
          </Typography.Text>
          <SvgIcon
            className="text-white"
            style={{ fontSize: 15, display: "flex" }}
            component={item.growthRate.iconRate}
          />
        </Space>
      </div>
      <Progress
        showInfo={false}
        trailColor="#FFF"
        strokeLinecap="butt"
        percent={item.progress}
        strokeColor={item.color}
      />
    </Card>
  );
};

export default BoxContent;
