import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../../../redux/apiRequest";
import { useAppDispatch } from "../../../hooks/hooks";
import { Typography } from "antd";

const { Link } = Typography;
const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleFinished = (e: React.ChangeEvent<HTMLElement>) => {
    signInUser(e, dispatch, navigate);
  };
  return (
    <Form layout="vertical" className="m-12 p-12" onFinish={handleFinished}>
      <Form.Item
        label="Tên đăng nhập"
        name="username"
        rules={[{ required: true }, { whitespace: true }]}
      >
        <Input size="large" placeholder="Nhập tên đăng nhập" />
      </Form.Item>
      <Form.Item
        label="Mật khẩu"
        name="password"
        rules={[
          { required: true },
          {
            pattern: new RegExp(/(?=.*?[#?!@$%^&*-])(?=.*?[A-Z])(?=.*?[0-9])/),
            message:
              "Mật khẩu cần ít nhất 1 ký tự đặc biệt, 1 chữ in hoa và một số",
          },
        ]}
      >
        <Input size="large" placeholder="Nhập mật khẩu" />
      </Form.Item>
      <Form.Item className="flex flex-row justify-end items-center ">
        <Link href="/register" className="mr-4">
          Chưa có tài khoản?
        </Link>
        <Button
          type="primary"
          htmlType="submit"
          className="bg-blue-500 text-white uppercase"
        >
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignIn;
