import { Button, Form, Input } from "antd";
import { accountFormProps } from "../../../typeProps";

type AccountFormProps = {
  onFinish: (value: accountFormProps) => void;
};

const AccountForm = ({ onFinish }: AccountFormProps) => {
  return (
    <Form
      layout="vertical"
      style={{ width: "inherit", margin: "0 auto" }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Tên đăng nhập"
        name="username"
        rules={[{ required: true }, { whitespace: true }]}
      >
        <Input size="large" placeholder="Nhập tên đăng nhập" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true }, { type: "email" }]}
      >
        <Input size="large" placeholder="Nhập email" />
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
      <Form.Item
        label="Xác nhận mật khẩu"
        name="confirmPassword"
        rules={[
          { required: true },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                "The confirm password does not match with password"
              );
            },
          }),
        ]}
      >
        <Input size="large" placeholder="Nhập lại mật khẩu" />
      </Form.Item>
      <Form.Item>
        <div className="flex flex-row items-center justify-between">
          <Button htmlType="reset" disabled className="uppercase">
            Quay về
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-blue-500 text-white uppercase"
          >
            Tiếp
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
export default AccountForm;
