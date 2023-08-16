import {
  BarsOutlined,
  BorderlessTableOutlined,
  EllipsisOutlined,
  LogoutOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";

import SvgIcon from "@mui/icons-material/ArrowDropDown";
import { Space, Typography, theme } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Table, { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { InputSearch, Wrapper } from "../../../components";
import contractForEmployee from "../../../dummyData/contractForEmployee";
import { ContractForEmployeeType } from "../../../typeProps";
import { formatTimeStamp } from "../../../ultils/formatDate";
const { Text } = Typography;
type ContractForEmployeeProps = {
  title: string;
};

const gridTypeContract = (text: string, row: ContractForEmployeeType) => {
  return (
    <>
      <div className="w-max flex flex-row items-center gap-2">
        <div
          style={{
            backgroundColor: row.colorTypeDotContract,
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

const gridStatus = (row: ContractForEmployeeType) => {
  return (
    <>
      {row ? (
        <span
          className="w-max flex font-semibold capitalize p-1 pl-2 pr-2 rounded-md"
          style={{ color: "#6C3CB4", backgroundColor: "#DBD1F0" }}
        >
          hiệu lực
        </span>
      ) : (
        <>
          <span
            className="w-max flex font-semibold capitalize p-1 pl-2 pr-2 rounded-md"
            style={{ color: "#6C3CB4", backgroundColor: "#DBD1F0" }}
          >
            hết hiệu lực
          </span>
        </>
      )}
    </>
  );
};
const gridSalary = (text: string, row: ContractForEmployeeType) => {
  return (
    <>
      <div>
        <span
          className="w-max flex font-semibold capitalize p-1 pl-2 pr-2 rounded-md"
          style={{ color: "#3DA1B8", backgroundColor: "rgb(199 244 247)" }}
        >
          {text}
        </span>
      </div>
    </>
  );
};

const handleDate = (row: ContractForEmployeeType) => {
  return <span className="w-max flex">{formatTimeStamp(row)}</span>;
};

const gridNote = (row: string) => {
  return (
    <>
      {row === "" ? (
        <Text italic className="flex w-max">
          Chưa có ghi chú
        </Text>
      ) : (
        <span className="flex w-max">{row}</span>
      )}
    </>
  );
};

const ContractForEmployee = ({ title }: ContractForEmployeeProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [value, setValue] = useState<string>("");
  const [contract, setContract] = useState<ContractForEmployeeType[]>([]);
  const [contractOrgin, setContractOrgin] = useState<ContractForEmployeeType[]>(
    []
  );

  // columns
  const columns: ColumnsType<ContractForEmployeeType> = [
    {
      render: () => <EllipsisOutlined style={{ fontSize: 20 }} />,
    },
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
          <div className="w-max flex flex-row items-center gap-2">
            <SvgIcon component={AccountCircleOutlinedIcon} />
            <span className="text-sm">Tạo bởi</span>
          </div>
        );
      },
      dataIndex: "nameCreate",
      render: (text, row) => {
        return (
          <div className="w-max flex flex-row items-center gap-2">
            {row.image !== "" && (
              <img src={row.image} style={{ borderRadius: "50%" }} alt="" />
            )}
            <span>{text}</span>
          </div>
        );
      },
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row items-center gap-2">
            <SvgIcon component={AccountCircleOutlinedIcon} />
            <span className="text-sm">Loại hợp đồng</span>
          </div>
        );
      },
      dataIndex: "nameContract",
      render: (text, row) => gridTypeContract(text, row),
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row flex-nowrap items-center gap-2">
            <BarsOutlined style={{ fontSize: 20 }} />
            <span className="text-sm">Trạng thái</span>
          </div>
        );
      },
      dataIndex: "status",
      render: (row) => gridStatus(row),
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row flex-nowrap items-center gap-2">
            <BarsOutlined style={{ fontSize: 20 }} />
            <span className="text-sm">Loại lương</span>
          </div>
        );
      },
      dataIndex: "typeSalary",
      render: (text, row) => gridSalary(text, row),
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row flex-nowrap items-center gap-2">
            <BorderlessTableOutlined style={{ fontSize: 20 }} />
            <span className="text-sm">Người phụ thuộc</span>
          </div>
        );
      },
      dataIndex: "dependentPerson",
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row flex-nowrap items-center gap-2">
            <CalendarOutlined style={{ fontSize: 20 }} />
            <span className="text-sm">Ngày bắt đầu</span>
          </div>
        );
      },
      dataIndex: "dayStart",
      render: (row) => handleDate(row),
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row flex-nowrap items-center gap-2">
            <CalendarOutlined style={{ fontSize: 20 }} />
            <span className="text-sm">Ngày kết thúc</span>
          </div>
        );
      },
      dataIndex: "dayEnd",
      render: (row) => handleDate(row),
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row flex-nowrap items-center gap-2">
            <BorderlessTableOutlined style={{ fontSize: 20 }} />
            <span className="text-sm">Lương thỏa thuận</span>
          </div>
        );
      },
      dataIndex: "salaryAgree",
      align: "right",
      render: (row) => (
        <span>
          {row.toLocaleString()}
          &nbsp;
          <Text underline>đ</Text>
        </span>
      ),
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row flex-nowrap items-center gap-2">
            <BorderlessTableOutlined style={{ fontSize: 20 }} />
            <span className="text-sm">Lương đóng thuế</span>
          </div>
        );
      },
      dataIndex: "salaryTax",
      align: "right",
      render: (row) => (
        <span>
          {row.toLocaleString()}
          &nbsp;
          <Text underline>đ</Text>
        </span>
      ),
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row flex-nowrap items-center gap-2">
            <BorderlessTableOutlined style={{ fontSize: 20 }} />
            <span className="text-sm">Tổng phụ cấp</span>
          </div>
        );
      },
      dataIndex: "totalAllowance",
      render: (row) => (
        <span>
          {new Intl.NumberFormat("en-DE").format(row)}
          &nbsp;
          <Text underline>đ</Text>
        </span>
      ),
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row flex-nowrap items-center gap-2">
            <SvgIcon component={HorizontalSplitIcon} />
            <span className="text-sm">Ghi chú</span>
          </div>
        );
      },
      dataIndex: "note",
      render: (row) => gridNote(row),
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row flex-nowrap items-center gap-2">
            <CalendarOutlined style={{ fontSize: 20 }} />
            <span className="text-sm">Thời gian tạo</span>
          </div>
        );
      },
      dataIndex: "createAt",
      render: (row) => handleDate(row),
    },
    {
      title: () => {
        return (
          <div className="w-max flex flex-row flex-nowrap items-center gap-2">
            <CalendarOutlined style={{ fontSize: 20 }} />
            <span className="text-sm">Thời gian thay đổi</span>
          </div>
        );
      },
      dataIndex: "updatedAt",
      render: (row) => handleDate(row),
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setContract(contractForEmployee);
      setContractOrgin(contractForEmployee);
    }, 2000);
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
        className="bg-white pt-2 pb-2"
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
        </Space>
        <Table
          columns={columns}
          dataSource={contract}
          className="border shadow rounded mt-4"
          scroll={{ x: true }}
          loading={contract.length == 0 ? true : false}
          // pagination={{
          //   pageSize: handlePage().totalPage,
          //   defaultPageSize: handlePage().totalPage,
          //   showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
          // }}
        />
      </Content>
    </Wrapper>
  );
};

export default ContractForEmployee;
