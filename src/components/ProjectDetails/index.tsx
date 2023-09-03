import { MoreOutlined } from "@ant-design/icons";
import {
  Avatar,
  Card,
  Popover,
  Progress,
  Statistic,
  Table,
  Tag,
  Typography,
} from "antd";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { projectDeails } from "../../dummyData/dummy";
import { ProjectType } from "../../typeProps";
const ProjectDetails = () => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  const columns: ColumnsType<ProjectType> = [
    {
      title: () => {
        return (
          <Typography.Text strong className="text-sm">
            Project
          </Typography.Text>
        );
      },
      dataIndex: "nameProject",
    },
    {
      title: () => {
        return (
          <Typography.Text strong className="text-sm">
            Team
          </Typography.Text>
        );
      },
      dataIndex: "team",
      render: (value, row) => {
        return (
          <Avatar.Group
            maxCount={2}
            maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
          >
            {row.team.map((ava) => (
              <Avatar src={ava.avatar} />
            ))}
          </Avatar.Group>
        );
      },
    },
    {
      title: () => {
        return (
          <Typography.Text strong className="text-sm">
            Priority
          </Typography.Text>
        );
      },
      render: (value, row) => {
        return (
          <>
            {row.priority === 1 ? (
              <Tag color="orange">High</Tag>
            ) : row.priority === 0 ? (
              <Tag color="green">Low</Tag>
            ) : (
              <Tag color="blue">Medium</Tag>
            )}
          </>
        );
      },
      dataIndex: "priority",
    },
    {
      title: () => {
        return (
          <Typography.Text strong className="text-sm">
            Status
          </Typography.Text>
        );
      },
      render: (value, row) => {
        return (
          <>
            {row.status ? (
              <Progress
                percent={50}
                status="exception"
                strokeLinecap="butt"
                showInfo={false}
              />
            ) : (
              <Progress percent={20} showInfo={false} strokeLinecap="butt" />
            )}
          </>
        );
      },
      dataIndex: "status",
    },
    {
      title: () => {
        return (
          <Typography.Text strong className="text-base">
            Amount
          </Typography.Text>
        );
      },
      render: (value, row) => {
        return (
          <Typography className="flex flex-row items-center">
            <Statistic value={`$`} />
            &nbsp;
            <Statistic value={row.amount} precision={2} />
          </Typography>
        );
      },
      dataIndex: "amount",
    },
  ];
  return (
    <Card>
      <div className="flex flex-row items-center justify-between">
        <Typography.Text strong className="text-lg">
          Project Details
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
      <Table
        className="mt-8"
        columns={columns}
        dataSource={projectDeails}
        pagination={false}
      />
    </Card>
  );
};

export default ProjectDetails;
