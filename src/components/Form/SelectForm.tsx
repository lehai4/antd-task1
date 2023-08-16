import {
  default as ArrowDropDownIcon,
  default as SvgIcon,
} from "@mui/icons-material/ArrowDropDown";
import { Select } from "antd";
type optionProps = {
  value: string;
  label: string;
};
type SelectFormProps = {
  options: optionProps[];
  selected: string;
  handleChange: (value: string) => void;
  defaultValue: string;
  styles: React.CSSProperties;
};
const SelectForm = ({
  options,
  selected,
  handleChange,
  styles,
  defaultValue,
}: SelectFormProps) => {
  return (
    <Select
      value={selected}
      style={styles}
      bordered={false}
      options={options}
      onChange={handleChange}
      defaultValue={defaultValue}
      suffixIcon={<SvgIcon component={ArrowDropDownIcon} />}
    />
  );
};

export default SelectForm;
