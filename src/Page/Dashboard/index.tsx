import { LogoutOutlined } from "@ant-design/icons";
import { Space, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { useContext, useState } from "react";
import { DefaultContext } from "../../Context/ContextProvider";
import { InputSearch, Rectangle, Wrapper } from "../../components";
import { item } from "../../dummyData/dummy";
import { useAppDispatch } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { LogOutUser } from "../../redux/apiRequest";
const { Text } = Typography;

type DashboardProps = {
  title: string;
};

const Dashboard = ({ title }: DashboardProps) => {
  const theme = useContext(DefaultContext);
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <div className="grid grid-cols-4 gap-4 md:mb-5 md:mt-5">
              <Rectangle items={item} />
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Dashboard;
