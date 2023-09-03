import { CloseOutlined, MoreOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Input, List, Popover, Typography } from "antd";
import { useEffect, useState } from "react";
import { todoData } from "../../dummyData/dummy";
import { TODO } from "../../typeProps";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { CheckboxValueType } from "antd/es/checkbox/Group";

const TodoList = () => {
  const [open, setOpen] = useState(false);
  const [dataSource, setDataSource] = useState<TODO[]>(todoData);
  const [indeterminate, setIndeterminate] = useState(false);
  const [value, setValue] = useState<TODO>({
    value: "",
    id: null,
  });
  const [edit, setEdit] = useState(false);
  const [checked, setChecked] = useState<CheckboxValueType[]>([]);
  const [checkAll, setCheckAll] = useState<boolean>(false);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter" && !edit) {
      setDataSource([...dataSource, value]);
      setValue({ value: "", id: null });
    } else if (event.key === "Enter" && edit) {
      setDataSource(
        dataSource.map((todo) =>
          todo.id === value.id ? { ...todo, ...value } : todo
        )
      );
      setValue({ value: "", id: null });
    }
  };
  const handleEdit = (e: TODO) => {
    setEdit(true);
    setValue(e);
  };
  useEffect(() => {
    console.log(dataSource);
  }, [dataSource]);
  const handleDelete = (e: TODO) => {
    const newData = dataSource.filter((item) => item.value !== e.value);
    setDataSource(newData);
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValue((prev) => {
      return {
        ...prev,
        ["value"]: value,
      };
    });
  };
  useEffect(() => {
    setIndeterminate(
      checked.length > 0 && checked.length !== dataSource.length
    );
    setCheckAll(checked.length === dataSource.length);
  }, [checked]);

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked ? dataSource.map((item) => item.value) : []);
    setCheckAll(e.target.checked);
  };

  return (
    <Card>
      <div className="flex flex-row items-center justify-between">
        <Typography.Text strong className="text-lg">
          TODO List
        </Typography.Text>
        <Popover
          content={
            <div className="flex flex-col w-24">
              {["Action", "Another action", "Something else here"].map(
                (item, i) => (
                  <Typography.Text key={i} className="my-1">
                    {item}
                  </Typography.Text>
                )
              )}
            </div>
          }
          placement="bottomRight"
          trigger="click"
          open={open}
          onOpenChange={handleOpenChange}
        >
          <MoreOutlined style={{ fontSize: 20 }} />
        </Popover>
      </div>

      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
        className="mt-5 mb-3"
      >
        Check all
      </Checkbox>
      <Checkbox.Group
        style={{ width: "100%" }}
        value={checked}
        onChange={(checkedValues) => {
          setChecked(checkedValues);
        }}
      >
        <List
          itemLayout="horizontal"
          dataSource={dataSource}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button
                  icon={<EditOutlined />}
                  type="text"
                  onClick={() => handleEdit(item)}
                />,
                <Button
                  icon={<CloseOutlined />}
                  type="text"
                  onClick={() => handleDelete(item)}
                />,
              ]}
            >
              <List.Item.Meta
                avatar={<Checkbox value={item.value} />}
                title={<Typography.Text>{item.value}</Typography.Text>}
              />
            </List.Item>
          )}
        />
      </Checkbox.Group>
      <Input
        placeholder="Enter todo..."
        size="large"
        value={value.value}
        onChange={handleChange}
        className="mt-5 rounded-3xl"
        onKeyDown={handleKeyDown}
      />
    </Card>
  );
};

export default TodoList;
