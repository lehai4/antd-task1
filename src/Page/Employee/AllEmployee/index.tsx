import {
  BarsOutlined,
  BorderlessTableOutlined,
  EllipsisOutlined,
  LogoutOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { SvgIcon } from "@mui/material";
import { Badge, Button, Space, Table, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { ColumnsType } from "antd/es/table/interface";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DefaultContext } from "../../../Context/ContextProvider";
import { InputSearch, SelectForm, Wrapper } from "../../../components";
import employee from "../../../dummyData/employee";
import { EmployeeType } from "../../../typeProps";
import { useAppDispatch } from "../../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { LogOutUser } from "../../../redux/apiRequest";
const { Text } = Typography;
type EmployeeProps = {
  title: string;
};

const gridNameEmployeeDot = (text: string, record: any) => {
  return (
    <>
      <div className="w-max flex flex-row items-center gap-2">
        <Badge color={record.color} />
        <Text>{text}</Text>
      </div>
    </>
  );
};

const gridActive = (record: EmployeeType) => {
  return (
    <>
      <div className="flex flex-row items-center gap-2">
        {record.active ? (
          <div>
            <SvgIcon component={AccountCircleIcon} style={{ color: "blue" }} />
          </div>
        ) : (
          <div>
            <SvgIcon component={AccountCircleIcon} />
          </div>
        )}
      </div>
    </>
  );
};

const gridSex = (record: string) => (
  <span
    className="font-semibold p-1 pl-2 pr-2 rounded-md"
    style={
      record === "Nam"
        ? { color: "#266073", background: "#DDF2F4" }
        : { color: "red", background: "#EBCBC2" }
    }
  >
    {record}
  </span>
);

const Employee = ({ title }: EmployeeProps) => {
  const theme = useContext(DefaultContext);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [selected, setSelected] = useState<string>("Toàn bộ phòng ban");
  const [value, setValue] = useState<string>("");

  const [employeeArr, setEmployeeArr] = useState<EmployeeType[]>([]);
  const [employeeArrOrgin, setEmployeeArrOrgin] = useState<EmployeeType[]>([]);

  const columns: ColumnsType<EmployeeType> = [
    {
      render: () => <EllipsisOutlined style={{ fontSize: 20 }} />,
    },
    { width: 40, render: (record) => gridActive(record) },
    {
      title: () => {
        return <span className="text-sm">ID</span>;
      },
      dataIndex: "id",
      sorter: {
        compare: (a, b) => (a.id > b.id ? 1 : 0),
      },
      width: 80,
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row flex-nowrap items-center gap-2">
            <SvgIcon component={HorizontalSplitIcon} />
            <span className="text-sm">Tên nhân viên</span>
          </div>
        );
      },
      dataIndex: "nameEmployee",
      render: (text, record) => {
        return (
          <div className="w-max flex flex-row flex-nowrap items-center gap-2">
            {record.image !== "" && (
              <img src={record.image} style={{ borderRadius: "50%" }} alt="" />
            )}
            <span>{text}</span>
          </div>
        );
      },
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row flex-nowrap items-center gap-2">
            <BarsOutlined style={{ fontSize: 20 }} />
            <span className="text-sm">Phòng ban</span>
          </div>
        );
      },
      dataIndex: "nameDepartment",
      render: (text, record) => gridNameEmployeeDot(text, record),
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row flex-nowrap items-center gap-2">
            <SvgIcon component={PhoneOutlinedIcon} />
            <span className="text-sm">Số điện thoại</span>
          </div>
        );
      },
      dataIndex: "phone",
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row flex-nowrap items-center gap-2">
            <BarsOutlined style={{ fontSize: 20 }} />
            <span className="text-sm">Giới tính</span>
          </div>
        );
      },
      dataIndex: "sex",
      render: (record) => gridSex(record),
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row flex-nowrap items-center gap-2">
            <SvgIcon component={HorizontalSplitIcon} />
            <span className="text-sm">Email</span>
          </div>
        );
      },
      dataIndex: "email",
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row flex-nowrap items-center gap-2">
            <SvgIcon component={HorizontalSplitIcon} />
            <span className="text-sm">Ngân Hàng</span>
          </div>
        );
      },
      dataIndex: "bank",
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row flex-nowrap items-center gap-2">
            <SvgIcon component={ContactMailIcon} />
            <span className="text-sm">Địa chỉ</span>
          </div>
        );
      },
      dataIndex: "address",
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row flex-nowrap items-center gap-2">
            <SvgIcon component={HorizontalSplitIcon} />
            <span className="text-sm">Quốc gia</span>
          </div>
        );
      },
      dataIndex: "country",
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row flex-nowrap items-center gap-2">
            <BorderlessTableOutlined style={{ fontSize: 20 }} />
            <span className="text-sm flex">TK Ngân Hàng</span>
          </div>
        );
      },
      dataIndex: "stk",
    },
  ];

  const handleLogOut = () => {
    LogOutUser(dispatch, navigate);
  };

  const handleAdd = () => {
    toast.warning("Sorry, Temporarily close function");
  };

  const handleRefresh = () => {
    setSelected("Toàn bộ phòng ban");
  };

  const handleChange = (value: string) => {
    setSelected(value);
  };

  useEffect(() => {
    setTimeout(() => {
      setEmployeeArr(employee);
      setEmployeeArrOrgin(employee);
    }, 2000);
  }, []);

  useEffect(() => {
    let filterResult = employeeArrOrgin;
    filterResult =
      selected !== "Toàn bộ phòng ban"
        ? employeeArrOrgin.filter((item) => item.nameDepartment === selected)
        : filterResult;

    setEmployeeArr(filterResult);
  }, [selected]);

  useEffect(() => {
    let filterResult = employeeArrOrgin;
    filterResult =
      value !== ""
        ? employeeArrOrgin.filter(
            (item) => item.nameDepartment.toLowerCase() === value
          )
        : filterResult;
    setEmployeeArr(filterResult);
  }, [value]);

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
        <Space
          className="border shadow rounded justify-between flex pr-6 pl-4"
          style={{ height: 90 }}
        >
          <InputSearch
            value={value}
            handleChange={(e) => setValue(e.target.value)}
            placeholder="Tìm kiếm"
          />
          <div className="flex flex-row items-center gap-2">
            <SelectForm
              defaultValue={selected}
              options={employee.map((item) => {
                return {
                  value: item.nameDepartment,
                  label: item.nameDepartment,
                };
              })}
              selected={selected}
              styles={{ width: 180 }}
              handleChange={handleChange}
            />
            <Button
              size={"large"}
              className="flex float-right items-center border-emerald-500 text-green-500"
              onClick={handleRefresh}
            >
              Làm mới
            </Button>
          </div>
          <Button
            type="primary"
            size={"large"}
            icon={<PlusOutlined style={{ fontSize: 18 }} />}
            className="flex float-right items-center bg-blue-500 text-white"
            onClick={handleAdd}
          >
            Thêm nhân viên
          </Button>
        </Space>
        <Table
          columns={columns}
          dataSource={employeeArr}
          className="border shadow rounded mt-4"
          scroll={{ x: true }}
          loading={employeeArr.length == 0 ? true : false}
          pagination={{
            pageSize: 10,
            defaultPageSize: 10,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
          }}
        />
      </Content>
    </Wrapper>
  );
};

export default Employee;
