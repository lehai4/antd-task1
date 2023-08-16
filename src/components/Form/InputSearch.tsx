import { Input } from "antd";

type InputSearchProps = {
  placeholder: string;
  value: string;
  handleChange: (value: any) => void;
};
const InputSearch = ({
  placeholder,
  value,
  handleChange,
}: InputSearchProps) => {
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

export default InputSearch;
