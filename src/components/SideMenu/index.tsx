import {
  FieldTimeOutlined,
  HomeOutlined,
  MailOutlined,
  MoneyCollectOutlined,
  ReconciliationOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Image, Menu, Typography } from "antd";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const { Text } = Typography;
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuProps["items"] = [
  getItem(
    <h3 className="flex flex-rows items-center gap-3">
      <HomeOutlined style={{ fontSize: 20 }} /> Dashboard
    </h3>,
    "/"
  ),
  getItem(
    <span className="text-slate-900 font-semibold">NHÂN VIÊN</span>,
    "employee",
    <></>,
    [
      getItem(
        "Phòng Ban",
        "/phong-ban",
        <UsergroupAddOutlined style={{ fontSize: 20 }} />
      ),
      getItem(
        "Phòng Ban Của Tôi",
        "/phong-ban-cua-toi",
        <UsergroupAddOutlined style={{ fontSize: 20 }} />
      ),
      getItem(
        "Toàn Bộ Nhân Viên",
        "/toan-bo-nhan-vien",
        <UsergroupAddOutlined style={{ fontSize: 20 }} />
      ),
      getItem(
        "Tạo Nhân Viên Mới",
        "/tao-nhan-vien-moi",
        <UserOutlined style={{ fontSize: 20 }} />
      ),
    ]
  ),

  getItem(
    <span className="text-slate-900 font-semibold">TĂNG CA</span>,
    "overtime",
    <></>,
    [
      getItem(
        "Đơn Tăng Ca Nhân Viên",
        "/don-tang-ca-nhan-vien",
        <FieldTimeOutlined style={{ fontSize: 20 }} />
      ),
      getItem(
        "Đơn Tăng Ca Của Tôi",
        "/don-tang-ca-cua-toi",
        <FieldTimeOutlined style={{ fontSize: 20 }} />
      ),
    ]
  ),

  getItem(
    <span className="text-slate-900 font-semibold">NGHỈ PHÉP</span>,
    "ON LEAVE",
    <></>,
    [
      getItem(
        "Đơn Nghỉ Phép Nhân Viên",
        "/don-nghi-phep-nhan-vien",
        <ReconciliationOutlined style={{ fontSize: 20 }} />
      ),
      getItem(
        "Đơn Nghỉ Phép Của Tôi",
        "/don-nghi-phep-cua-toi",
        <ReconciliationOutlined style={{ fontSize: 20 }} />
      ),
    ]
  ),

  getItem(
    <span className="text-slate-900 font-semibold">ĐƠN KHÁC</span>,
    "OTHER FORM",
    <></>,
    [
      getItem(
        "Danh Sách Đơn Khác",
        "/danh-sach-don-khac",
        <MailOutlined style={{ fontSize: 20 }} />
      ),
      getItem(
        "Danh Sách Đơn Của Tôi",
        "/danh-sach-don-cua-toi",
        <MailOutlined style={{ fontSize: 20 }} />
      ),
    ]
  ),

  getItem(
    <span className="text-slate-900 font-semibold">QUẢN LÝ LƯƠNG</span>,
    "manager-salary",
    <></>,
    [
      getItem(
        "Lương Nhân Viên",
        "/luong-nhan-vien",
        <MoneyCollectOutlined style={{ fontSize: 20 }} />
      ),
      getItem(
        "Lương Của Tôi",
        "/luong-cua-toi",
        <MoneyCollectOutlined style={{ fontSize: 20 }} />
      ),
    ]
  ),

  getItem(
    <span className="text-slate-900 font-semibold">HỢP ĐỒNG</span>,
    "contract",
    <></>,
    [
      getItem(
        "Hợp Đồng Nhân Viên",
        "/hop-dong-nhan-vien",
        <MailOutlined style={{ fontSize: 20 }} />
      ),
      getItem(
        "Hợp Đồng Của Tôi",
        "/hop-dong-cua-toi",
        <MailOutlined style={{ fontSize: 20 }} />
      ),
    ]
  ),

  getItem(
    <span className="text-slate-900 font-semibold">TUYỂN DỤNG</span>,
    "hire",
    <></>,
    [
      getItem(
        "Danh sách ứng viên",
        "/tuyen-dung",
        <UsergroupAddOutlined style={{ fontSize: 20 }} />
      ),
    ]
  ),
];

const SideMenu = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<string>("Le Chi Hai");
  const pathname = useLocation();

  const convertPath = (path: string) => {
    let key = path.indexOf("/");
    let stringCut = path.slice(key + 1);

    let restKey = stringCut.indexOf("/");

    let pathname = path.slice(key, restKey !== -1 ? restKey + 1 : path.length);
    return pathname;
  };
  return (
    <React.Fragment>
      <div
        className="flex items-center p-4 pl-6 bg-white"
        style={{
          gap: "20px",
        }}
      >
        <Image
          style={{
            maxWidth: 40,
            textAlign: "center",
          }}
          src="https://haycafe.vn/wp-content/uploads/2022/03/hinh-meo-hai-huoc.jpg"
        />
        <Text strong className="text-lg">
          {user}
        </Text>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={[`${convertPath(pathname.pathname)}`]}
        defaultOpenKeys={[
          "employee",
          "overtime",
          "ON LEAVE",
          "OTHER FORM",
          "manager-salary",
          "contract",
          "hire",
        ]}
        onClick={(item) => {
          navigate(item.key);
        }}
        style={{
          background: "#FFFFFF",
          borderRight: 0,
          overflow: "auto",
          height: "inherit",
          paddingBottom: 100,
        }}
        items={items}
      />
    </React.Fragment>
  );
};

export default SideMenu;
