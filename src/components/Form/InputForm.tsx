import { Input } from "antd";

type InputFormProps = {
  placeholder: string;
  value: string;
  handleChange: (value: any) => void;
};
const InputForm = ({ placeholder, value, handleChange }: InputFormProps) => {
  return (
    <Input
      placeholder={placeholder}
      className="text-base"
      style={{
        width: 200,
        border: "none",
        borderBottom: "1px solid #d9d9d9",
        borderRadius: 0,
      }}
      bordered={false}
      value={value}
      onChange={handleChange}
    />
  );
};

export default InputForm;
