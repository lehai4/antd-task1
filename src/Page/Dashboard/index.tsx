import { LogoutOutlined } from "@ant-design/icons";

import { Col, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultContext } from "../../Context/ContextProvider";
import {
  AreaChart,
  BarChart,
  BoxContent,
  ColumnLineChart,
  ProjectDetails,
  TodoList,
  Wrapper,
} from "../../components";
import {
  boxContent,
  incomeDataChart,
  productDataChart,
  profitDataChart,
} from "../../dummyData/dummy";
import { useAppDispatch } from "../../hooks/hooks";
import { LogOutUser } from "../../redux/apiRequest";
const { Text } = Typography;

type DashboardProps = {
  title: string;
};

const Dashboard = ({ title }: DashboardProps) => {
  const theme = useContext(DefaultContext);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    LogOutUser(dispatch, navigate);
  };

  return (
    <Wrapper title={title}>
      <Header
        className="border flex flex-row justify-between items-center w-full"
        style={{
          padding: 0,
          width: "calc(100% - 310px)",
          position: "fixed",
          paddingLeft: 36,
          paddingRight: 42,
          zIndex: 999,
          height: 50,
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
        className="bg-white pt-16 pb-2"
        style={{ paddingLeft: 36, paddingRight: 42 }}
      >
        <div className="ant-row flex flex-row flex-wrap gap-y-8 -mx-4">
          {boxContent.map((item, i) => (
            <Col key={i} sm={12} md={12} xl={6} xs={24} lg={12}>
              <BoxContent item={item} />
            </Col>
          ))}

          <Col sm={12} md={12} xl={12} xs={12} lg={12}>
            <ColumnLineChart
              options={productDataChart.options}
              series={productDataChart.series}
            />
          </Col>
          <Col sm={12} md={12} xl={12} xs={12} lg={12}>
            <AreaChart
              options={profitDataChart.options}
              series={profitDataChart.series}
            />
          </Col>
          <Col sm={12} md={12} xl={16} xs={12} lg={12}>
            <ProjectDetails />
          </Col>
          <Col sm={12} md={12} xl={8} xs={12} lg={12}>
            <TodoList />
          </Col>
          <Col sm={12} md={12} xl={8} xs={12} lg={12}>
            <BarChart
              options={incomeDataChart.options}
              data={incomeDataChart.data}
            />
          </Col>
          <Col sm={12} md={12} xl={8} xs={12} lg={12}>
            <BarChart
              options={incomeDataChart.options}
              data={incomeDataChart.data}
            />
          </Col>
          <Col sm={12} md={12} xl={8} xs={12} lg={12}>
            <BarChart
              options={incomeDataChart.options}
              data={incomeDataChart.data}
            />
          </Col>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Dashboard;
