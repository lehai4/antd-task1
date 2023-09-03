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
import { Badge, Button, Divider, Table, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { ColumnsType } from "antd/es/table/interface";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultContext } from "../../Context/ContextProvider";
import { Wrapper } from "../../components";
import department from "../../dummyData/department";
import { useAppDispatch } from "../../hooks/hooks";
import { LogOutUser } from "../../redux/apiRequest";
import { DataType } from "../../typeProps";
const { Text } = Typography;
type DepartmentProps = {
  title: string;
};

const gridNameDepartmentDot = (text: string, record: any) => {
  return (
    <>
      <div className="w-max flex flex-row items-center gap-2">
        <Badge color={record.color} />
        <Text>{text}</Text>
      </div>
    </>
  );
};

const Department = ({ title }: DepartmentProps) => {
  const theme = useContext(DefaultContext);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
    navigate("/phong-ban/them-phong-ban");
  };

  const handleLogOut = () => {
    LogOutUser(dispatch, navigate);
  };
  return (
    <Wrapper title={title}>
      <Header
        className="border flex flex-row justify-between items-center"
        style={{
          padding: 0,
          height: 50,
          paddingLeft: 36,
          paddingRight: 42,
          background: theme.bgColor,
        }}
      >
        <Text strong className="text-lg capitalize">
          {title}
        </Text>
        <LogoutOutlined
          onClick={handleLogOut}
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
            defaultPageSize: 10,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
          }}
        />
      </Content>
    </Wrapper>
  );
};

export default Department;
