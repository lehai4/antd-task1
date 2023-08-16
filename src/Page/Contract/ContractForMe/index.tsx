import { LogoutOutlined } from "@ant-design/icons";
import { Space, Typography, theme } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Wrapper } from "../../../components";
import employee from "../../../dummyData/employee";
const { Text } = Typography;
type ContractForMeProps = {
  title: string;
};
const ContractForMe = ({ title }: ContractForMeProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Wrapper title={title}>
      <Header
        className="border flex flex-row justify-between items-center"
        style={{
          padding: 0,
          height: 50,
          paddingLeft: 36,
          paddingRight: 42,
          background: colorBgContainer,
        }}
      >
        <Text strong className="text-lg capitalize">
          {title}
        </Text>
        <LogoutOutlined
          style={{
            fontSize: "28px",
            color: "blue",
            padding: 5,
            border: "1px solid rgba(0,0,0,0.05)",
            borderRadius: 6,
            backgroundColor: "rgba(255,255,255,254)",
          }}
        />
      </Header>
      <Content
        className="bg-white pt-10 pb-2"
        style={{ paddingLeft: 36, paddingRight: 42 }}
      >
        <Space style={{ margin: "0 auto", width: 1350, display: "block" }}>
          <h3 className="font-semibold text-3xl">Thông tin hợp đồng</h3>
          <div className="px-20">
            <div className="mt-10">
              <div>
                <h3 className="font-normal text-3xl mb-5 text-blue-600">
                  Thông tin người lao động
                </h3>
                <div className="flex flex-col px-8 gap-y-3">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-1 items-center gap-12 text-base">
                      <Text strong className="text-base">
                        Họ và tên:
                      </Text>
                      {employee[0].nameEmployee}
                    </div>
                    <div className="flex flex-1 items-center gap-12 text-base">
                      <Text strong className="text-base">
                        Giới tính:
                      </Text>
                      {employee[0].sex}
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-1 items-center gap-12 text-base">
                      <Text strong className="text-base">
                        Sinh ngày:
                      </Text>
                      <span>{employee[0].dateOfBirth}</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-1 items-center gap-6 text-base">
                      <Text strong className="text-base">
                        CCCD/CMND:
                      </Text>
                      1232178281
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-1 items-center gap-16 text-base">
                      <Text strong className="text-base">
                        Địa chỉ:
                      </Text>
                      <span className="ml-2">{employee[0].address}</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-1items-center gap-6 text-base">
                      <Text strong className="text-base">
                        Số điện thoại:
                      </Text>
                      {employee[0].phone}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="my-3 font-normal text-3xl text-blue-600">
                  Hợp đồng lao động
                </h3>
                <div className="flex flex-col">
                  <span className="my-3 text-blue-500 text-lg">
                    1. Công việc, phòng ban và thời hạn hợp đồng
                  </span>
                  <div className="px-8 flex flex-col gap-y-3">
                    <div className="flex flex-1 items-center gap-12 text-base">
                      <Text strong className="text-base">
                        Phòng ban công tác:
                      </Text>
                      <span>Sales</span>
                    </div>
                    <div className="flex flex-1 items-center gap-20 text-base">
                      <Text strong className="text-base">
                        Loại hợp đồng:
                      </Text>
                      <span className="ml-2">Hợp đồng xác định thời hạn</span>
                    </div>
                    <div className=" relative flex flex-row items-center">
                      <div className="flex flex-1 items-center gap-20 text-base">
                        <Text strong className="text-base">
                          Từ ngày:
                        </Text>
                        <span style={{ marginLeft: "3.5rem" }}>01-01-2023</span>
                      </div>
                      <span className="absolute" style={{ left: "37%" }}>
                        -
                      </span>
                      <div className="flex flex-1 items-center gap-20 text-base">
                        <Text strong className="text-base">
                          Đến ngày:
                        </Text>
                        <span className="ml-2">01-01-2023</span>
                      </div>
                    </div>
                  </div>

                  <span className="my-3 text-blue-500 text-lg">
                    2. Lương, phụ cấp và các khoản bổ sung khác
                  </span>
                  <div className="px-8 flex flex-col gap-y-3">
                    <div className=" relative flex flex-row items-center">
                      <div className="flex flex-1 items-center gap-20 text-base">
                        <Text strong className="text-base">
                          Lương căn bản:
                        </Text>
                        <span className="ml-1.5">
                          {new Intl.NumberFormat("en-DE").format(9000000)}
                        </span>
                      </div>
                      <div className="flex flex-1 items-center text-base">
                        <Text strong className="text-base">
                          Lương tính thuế:
                        </Text>
                        <span className="ml-10">
                          {new Intl.NumberFormat("en-DE").format(8000000)}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center gap-12 text-base">
                      <Text strong className="text-base">
                        Các phụ cấp &nbsp;(mỗi tháng):
                      </Text>
                      <span></span>
                    </div>
                    <div>
                      <div className="flex flex-1 items-center gap-12 text-base">
                        <Text strong className="text-base">
                          Hình thức trả lương:
                        </Text>
                        <span>Chuyển khoản</span>
                      </div>
                      <div className="ml-6 mt-2 flex flex-col gap-y-3">
                        <div className="flex flex-1 items-center gap-16 text-base">
                          <Text className="text-base">Số TK ngân hàng:</Text>
                          <span className="ml-4">Chuyển khoản</span>
                        </div>
                        <div className="flex flex-1 items-center gap-24 text-base">
                          <Text className="text-base">Chủ tài khoản:</Text>
                          <span className="ml-2">LeChiHai</span>
                        </div>
                        <div className="flex flex-1 items-center gap-28 text-base">
                          <Text className="text-base">Ngân hàng:</Text>
                          <span className="ml-2.5">ACB</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <span className="my-3 text-blue-500 text-lg">
                    3. Thời gian làm việc và ghi chú
                  </span>
                  <div className="px-8 flex flex-col gap-y-3">
                    <div className="flex flex-1 items-center gap-10 text-base">
                      <Text strong className="text-base">
                        Số ngày làm việc trong 1 tuần:
                      </Text>
                      <span className="ml-1.5">5</span>
                    </div>
                    <div className="flex flex-1 items-center gap-20 text-base">
                      <Text strong className="text-base">
                        Số người phụ thuộc
                      </Text>
                      <span className="ml-10">1</span>
                    </div>
                    <div className="flex flex-1 items-center gap-48 text-base">
                      <Text strong className="text-base">
                        Ghi chú:
                      </Text>
                      <span className="ml-3">abc</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Space>
      </Content>
    </Wrapper>
  );
};

export default ContractForMe;
