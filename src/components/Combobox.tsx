import { TreeSelect } from "antd";
import { useState } from "react";

export default function ComboBox() {
  const [value, setValue] = useState<string>();
  const [treeData, setTreeData] = useState<any[]>([
    {
      title: "năm 2021",
      value: "năm 2021",
      children: [
        {
          value: "Tháng 1",
          title: "Tháng 1",
          children: [
            { value: "Ngày 1", title: "Ngày 1" },
            { value: "Ngày 2", title: "Ngày 2" },
            { value: "Ngày 3", title: "Ngày 3" },
            { value: "Ngày 4", title: "Ngày 4" },
            { value: "Ngày 5", title: "Ngày 5" },
            { value: "Ngày 6", title: "Ngày 6" },
            { value: "Ngày 7", title: "Ngày 7" },
            { value: "Ngày 8", title: "Ngày 8" },
          ],
        },
        {
          value: "Tháng 2",
          title: "Tháng 2",
          children: [
            { value: "Ngày 1", title: "Ngày 1" },
            { value: "Ngày 2", title: "Ngày 2" },
            { value: "Ngày 3", title: "Ngày 3" },
            { value: "Ngày 4", title: "Ngày 4" },
            { value: "Ngày 5", title: "Ngày 5" },
            { value: "Ngày 6", title: "Ngày 6" },
            { value: "Ngày 7", title: "Ngày 7" },
            { value: "Ngày 8", title: "Ngày 8" },
          ],
        },
        { value: "Tháng 3", title: "Tháng 3" },
        { value: "Tháng 4", title: "Tháng 4" },
        { value: "Tháng 5", title: "Tháng 5" },
        { value: "Tháng 6", title: "Tháng 6" },
        { value: "Tháng 7", title: "Tháng 7" },
        { value: "Tháng 8", title: "Tháng 8" },
      ],
    },
    {
      title: "năm 2022",
      value: "năm 2022",
      children: [
        { value: "Tháng 1", title: "Tháng 1" },
        { value: "Tháng 2", title: "Tháng 2" },
        { value: "Tháng 3", title: "Tháng 3" },
        { value: "Tháng 4", title: "Tháng 4" },
        { value: "Tháng 5", title: "Tháng 5" },
        { value: "Tháng 6", title: "Tháng 6" },
        { value: "Tháng 7", title: "Tháng 7" },
        { value: "Tháng 8", title: "Tháng 8" },
      ],
    },
  ]);
  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <TreeSelect
      showSearch
      style={{ width: "100%" }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
      placeholder="Please select"
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
  );
}
