import { Space } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { StepForm, Wrapper } from "../../../components";

import { LogoutOutlined } from "@ant-design/icons";
import { Typography, theme } from "antd";
import { useState } from "react";
import AccountForm from "../../../components/Form/AccountForm";
import InforForm from "../../../components/Form/InformationForm";
import department from "../../../dummyData/department";
import { accountFormProps, dataFormInfor } from "../../../typeProps";
const { Text } = Typography;

type CreateEmployeeProps = {
  title: string;
};

const CreateEmployee = ({ title }: CreateEmployeeProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [accountInfo, setAccountInfo] = useState<accountFormProps>();
  const [infoDetails, setInfoDetails] = useState<dataFormInfor>();

  const onFinishCreateAccountForm = (values: accountFormProps) => {
    setAccountInfo(values);
    setCurrentStep(1);
  };
  const onFinishInfoForm = (values: dataFormInfor) => {
    setInfoDetails(values);
    setCurrentStep(2);
  };
  const forms = [
    <AccountForm onFinish={onFinishCreateAccountForm} />,
    <InforForm
      data={department}
      setCurrentStep={setCurrentStep}
      onFinish={onFinishInfoForm}
    />,
  ];

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
        <Space style={{ margin: "0 auto", width: 1250, display: "block" }}>
          <StepForm
            titleStart="Tạo tài khoản"
            titleEnd="Thông tin cá nhân"
            currentStep={currentStep}
            styles={{ marginBottom: "2.5rem", marginLeft: 12 }}
            handleChangeStep={() => setCurrentStep}
          />
          {forms[currentStep]}
        </Space>
      </Content>
    </Wrapper>
  );
};

export default CreateEmployee;
