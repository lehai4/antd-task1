import { Button, DatePicker, Form, Input, Radio, Select } from "antd";
import dayjs from "dayjs";
import { DataType, dataFormInfor } from "../../../typeProps";
import {
  default as ArrowDropDownIcon,
  default as SvgIcon,
} from "@mui/icons-material/ArrowDropDown";
type InforFormProps = {
  data: DataType[];
  onFinish: (value: dataFormInfor) => void;
  setCurrentStep: (num: number) => void;
};

const InforForm = ({ data, onFinish, setCurrentStep }: InforFormProps) => (
  <Form
    layout="vertical"
    style={{ width: "inherit", margin: "0 auto" }}
    onFinish={onFinish}
  >
    <div className="flex flex-row items-center justify-between gap-5">
      <Form.Item
        label="Họ"
        name="firstName"
        className="flex-1"
        rules={[{ required: true }, { whitespace: true }]}
      >
        <Input size="large" placeholder="Nhập họ" />
      </Form.Item>
      <Form.Item
        label="Tên"
        name="lastName"
        className="flex-1"
        rules={[{ required: true }, { whitespace: true }]}
      >
        <Input size="large" placeholder="Nhập tên" />
      </Form.Item>
    </div>

    <div className="flex flex-row items-center justify-between gap-5">
      <Form.Item
        label="Giới tính"
        name="sex"
        className="flex-1"
        rules={[{ required: true }, { whitespace: true }]}
      >
        <Radio.Group>
          <Radio value="female"> Nữ </Radio>
          <Radio value="male"> Nam </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Quốc tịch"
        name="nationality"
        className="flex-1"
        rules={[{ required: true }, { whitespace: true }]}
      >
        <Input size="large" placeholder="Nhập tên" />
      </Form.Item>
    </div>

    <div className="flex flex-row items-center justify-between gap-5">
      <Form.Item
        label="Số điện thoại"
        name="phone"
        className="flex-1"
        rules={[{ required: true }, { whitespace: true }]}
      >
        <Input size="large" placeholder="Nhập số điện thoại" />
      </Form.Item>
      <Form.Item
        label="Ngày sinh"
        name="dob"
        className="flex-1"
        rules={[{ required: true }]}
      >
        <DatePicker
          picker="date"
          size="large"
          defaultValue={dayjs("01/01/2000", "DD/MM/YYYY")}
          format={"DD/MM/YYYY"}
        />
      </Form.Item>
    </div>
    <Form.Item
      label="Địa chỉ"
      name="address"
      className="flex-1"
      rules={[{ required: true }, { whitespace: true }]}
    >
      <Input size="large" placeholder="Nhập địa chỉ" />
    </Form.Item>

    <div className="flex flex-row items-center justify-between gap-5">
      <Form.Item name="department" label="Phòng ban" className="flex-1">
        <Select
          placeholder="Chọn phòng ban"
          size="large"
          suffixIcon={<SvgIcon component={ArrowDropDownIcon} />}
        >
          {data.map((item, i) => {
            return (
              <Select.Option key={i} value={item.namDepartment.toLowerCase()}>
                {item.namDepartment}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item
        label="CCCD/CMND"
        name="identify"
        className="flex-1"
        rules={[{ required: true }, { whitespace: true }]}
      >
        <Input size="large" placeholder="Nhập CCCD/CMND" />
      </Form.Item>
    </div>

    <div className="flex flex-row items-center justify-between gap-5">
      <Form.Item
        label="Tên tài khoản ngân hàng"
        name="nameBank"
        className="flex-1"
        rules={[{ required: true }, { whitespace: true }]}
      >
        <Input size="large" placeholder="Nhập tên tài khoản ngân hàng" />
      </Form.Item>
      <Form.Item
        label="Số tài khoản ngân hàng"
        name="stk"
        className="flex-1"
        rules={[{ required: true }, { whitespace: true }]}
      >
        <Input size="large" placeholder="Nhập số tài khoản ngân hàng" />
      </Form.Item>
    </div>

    <Form.Item
      label="Ngân hàng"
      name="bank"
      className="flex-1"
      rules={[{ required: true }, { whitespace: true }]}
    >
      <Input size="large" placeholder="Nhập ngân hàng" />
    </Form.Item>

    <Form.Item>
      <div className="flex flex-row items-center justify-between">
        <Button
          htmlType="reset"
          className="uppercase"
          onClick={() => setCurrentStep(0)}
        >
          Quay về
        </Button>
        <Button
          disabled
          type="primary"
          htmlType="submit"
          className="bg-blue-500 text-white uppercase"
        >
          Hoàn thành
        </Button>
      </div>
    </Form.Item>
  </Form>
);
export default InforForm;
