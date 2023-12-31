import { Navigate, Route, Routes } from "react-router-dom";
import {
  ContractForEmployee,
  ContractForMe,
  CreateDepartment,
  CreateEmployee,
  Dashboard,
  Department,
  Employee,
} from "../Page";
import { Authentication } from "../components";
import { useAppSelector } from "../hooks/hooks";
export interface IRouterProps {}
const Router: React.FunctionComponent<IRouterProps> = () => {
  const user = useAppSelector((state) => state.auth.login.user);
  return (
    <Routes>
      <Route
        path="/"
        element={
          !user ? <Navigate to="/auth" /> : <Dashboard title="Dashboard" />
        }
      />

      <Route path="/auth" element={<Authentication />}>
        <Route path=":slug" element={<Authentication />} />
      </Route>

      <Route
        path="/phong-ban"
        element={<Department title="Danh sách phòng ban" />}
      />

      <Route path="/phong-ban">
        <Route path="them-phong-ban" element={<CreateDepartment />} />
      </Route>

      <Route
        path="/toan-bo-nhan-vien"
        element={<Employee title="Danh sách nhân viên" />}
      />
      <Route
        path="/tao-nhan-vien-moi"
        element={<CreateEmployee title="Thêm nhân viên" />}
      />
      <Route
        path="/hop-dong-cua-toi"
        element={<ContractForMe title="Hợp đồng của tôi" />}
      />
      <Route
        path="/hop-dong-nhan-vien"
        element={<ContractForEmployee title="Hợp đồng nhân viên" />}
      />
    </Routes>
  );
};

export default Router;
