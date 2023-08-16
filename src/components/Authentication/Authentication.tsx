import { AuthForm, Wrapper } from "../";
import imgAuthen from "../../assets/img/authentication.png";
const Authentication = () => {
  return (
    <Wrapper title="authentication">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AuthForm />
        <div className="authentication-img flex justify-end items-center">
          <img src={`${imgAuthen}`} alt="Quản lý dữ liệu" />
        </div>
        <div className="flex justify-center flex-col">
          <h3 className="text-3xl font-bold text-orange-500">Hệ thống</h3>
          <h2 className="text-5xl font-bold leading-normal tracking-normal text-orange-500">
            Quản lý dữ liệu
          </h2>
        </div>
      </div>
    </Wrapper>
  );
};

export default Authentication;
