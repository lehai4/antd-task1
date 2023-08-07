import { Route, Routes } from "react-router-dom";
import { Dashboard, Department, Employee } from "../Page";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route
        path="/phong-ban"
        element={<Department title="Danh sách phòng ban" />}
      />
      <Route
        path="/toan-bo-nhan-vien"
        element={<Employee title="Danh sách nhân viên" />}
      />
    </Routes>
  );
};

export default Router;
