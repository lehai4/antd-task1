import { LogoutOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Space, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultContext } from "../../../Context/ContextProvider";
import { Wrapper } from "../../../components";
import { useAppDispatch } from "../../../hooks/hooks";
import { LogOutUser } from "../../../redux/apiRequest";
import department from "../../../dummyData/department";

const { Text } = Typography;

const CreateDepartment = () => {
  const theme = useContext(DefaultContext);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    LogOutUser(dispatch, navigate);
  };
  return (
    <Wrapper title="FormDepartment ">
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
          Form tạo phòng ban
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
        style={{ paddingLeft: 36, paddingTop: 50, paddingRight: 42 }}
      >
        <Space
          style={{
            margin: "0 auto",
            paddingTop: 38,
            width: 1250,
            display: "block",
          }}
        >
          <Form
            layout="vertical"
            style={{ width: "inherit", margin: "0 auto" }}
          >
            <Form.Item
              label="Tên phòng ban"
              name="nameDeparment"
              rules={[
                { required: true },
                { whitespace: true },
                ({}) => ({
                  validator(_, value) {
                    if (!value) {
                      department.filter((item) => {
                        if (item.namDepartment === value && !value) {
                          return Promise.reject(
                            new Error("Duplicate values are not allowed.")
                          );
                        }
                      });
                    }
                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <Input size="large" placeholder="Nhập tên phòng ban" />
            </Form.Item>
            <Form.Item
              label="Quản lý"
              name="manager"
              rules={[{ required: true }]}
            >
              <Input size="large" placeholder="Nhập tên quản lý" />
            </Form.Item>
            <Form.Item
              label="Số nhân viên"
              name="amountEmployee"
              rules={[
                { required: true },
                { type: "number" },
                ({}) => ({
                  validator(rule, value) {
                    if (value < 0) {
                      return Promise.reject(
                        "the number of employees is not less than 0"
                      );
                    } else {
                      return Promise.resolve();
                    }
                  },
                }),
              ]}
            >
              <InputNumber size="large" defaultValue="1" />
            </Form.Item>
            <Form.Item
              label="Email quản lý"
              name="email"
              rules={[{ required: true }, { type: "email" }]}
            >
              <Input size="large" placeholder="Nhập email" />
            </Form.Item>

            <Form.Item>
              <div className="flex flex-row items-center justify-between">
                <Button
                  htmlType="reset"
                  onClick={() => navigate(-1)}
                  className="uppercase"
                >
                  Quay về
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-blue-500 text-white uppercase"
                >
                  Tạo phòng ban
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Space>
      </Content>
    </Wrapper>
  );
};

export default CreateDepartment;
