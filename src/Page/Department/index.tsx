import {
  BorderlessTableOutlined,
  EllipsisOutlined,
  LogoutOutlined,
  MoreOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { SvgIcon } from "@mui/material";
import { Button, Divider, Table, Typography, theme } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { ColumnsType } from "antd/es/table/interface";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { Wrapper } from "../../components";
import department from "../../dummyData/department";
import { DataType } from "../../typeProps";
const { Text } = Typography;
type DepartmentProps = {
  title: string;
};

const gridNameDepartmentDot = (text: string, record: any) => {
  return (
    <>
      <div className="w-max flex flex-row items-center gap-2">
        <div
          style={{
            backgroundColor: record.color,
            minWidth: "8px",
            height: "8px",
            borderRadius: "50%",
          }}
        ></div>
        <Text underline>{text}</Text>
      </div>
    </>
  );
};

const Department = ({ title }: DepartmentProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const columns: ColumnsType<DataType> = [
    {
      render: () => <EllipsisOutlined style={{ fontSize: 20 }} />,
    },
    {
      title: () => {
        return <span className="text-sm">ID</span>;
      },
      dataIndex: "id",
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row items-center gap-2">
            <SvgIcon component={AccountCircleOutlinedIcon} />
            <span className="text-sm">Tên phòng ban</span>
          </div>
        );
      },
      dataIndex: "namDepartment",
      render: (text, record) => gridNameDepartmentDot(text, record),
    },
    {
      title: () => {
        return (
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <SvgIcon component={AccountCircleOutlinedIcon} />
              <span className="text-sm">Quản lý</span>
            </div>
            <MoreOutlined style={{ fontSize: 20 }} />
          </div>
        );
      },
      render: (text, record) => {
        return (
          <div className="w-max flex flex-row items-center gap-2">
            {record.image !== "" && (
              <img src={record.image} style={{ borderRadius: "50%" }} alt="" />
            )}
            <span>{text}</span>
          </div>
        );
      },
      dataIndex: "nameManagement",
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row items-center gap-2">
            <BorderlessTableOutlined style={{ fontSize: 20 }} />
            <span className="text-sm">Số nhân viên</span>
          </div>
        );
      },
      dataIndex: "numberEmployee",
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row items-center gap-2">
            <SvgIcon component={HorizontalSplitIcon} />
            <span className="text-sm">Email quản lý</span>
          </div>
        );
      },
      dataIndex: "email",
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row items-center gap-2">
            <SvgIcon component={PhoneOutlinedIcon} />
            <span className="text-sm">Số điện thoại</span>
          </div>
        );
      },
      dataIndex: "phone",
    },
  ];

  const handleAdd = () => {
    toast.warning("Sorry, Temporarily close function");
  };

  const handlePage: any = useCallback(() => {
    let totalPage,
      pageSize = 0;
    totalPage = department.length;
    pageSize = Math.round(totalPage / 2);
    return {
      totalPage,
      pageSize,
    };
  }, []);

  return (
    <Wrapper title={title}>
      <Header
        className="border flex flex-row justify-between items-center"
        style={{
          padding: 0,
          height: 50,
          paddingLeft: 36,
          paddingRight: 42,
          background: colorBgContainer,
        }}
      >
        <Text strong className="text-lg capitalize">
          {title}
        </Text>
        <LogoutOutlined
          style={{
            fontSize: "28px",
            color: "blue",
            padding: 5,
            border: "1px solid rgba(0,0,0,0.05)",
            borderRadius: 6,
            backgroundColor: "rgba(255,255,255,254)",
          }}
        />
      </Header>
      <Content
        className="bg-white pt-10 pb-2"
        style={{ paddingLeft: 36, paddingRight: 42 }}
      >
        <Button
          type="primary"
          size={"large"}
          icon={<PlusOutlined style={{ fontSize: 18 }} />}
          style={{ marginBottom: 6 }}
          className="flex float-right items-center bg-blue-500 text-white"
          onClick={handleAdd}
        >
          Thêm phòng ban
        </Button>
        <Divider style={{ margin: 0 }} />

        <Table
          columns={columns}
          dataSource={department}
          className="border shadow rounded mt-4"
          scroll={{ x: true }}
          loading={department.length == 0 ? true : false}
          pagination={{
            pageSize: handlePage().totalPage,
            defaultPageSize: handlePage().totalPage,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
          }}
        />
      </Content>
    </Wrapper>
  );
};

export default Department;
