import { toast } from "react-toastify";
import { logOutSuccess, signInSuccess } from "./authSlice";
export const signInUser = async (user: any, dispatch: any, navigate: any) => {
  toast.success("Login successfully");
  dispatch(signInSuccess());
  navigate("/");
};
export const LogOutUser = async (dispatch: any, navigate: any) => {
  toast.success("LogOut successfully");
  dispatch(logOutSuccess());
  navigate("/auth");
};

// https://queuing-api.vercel.app
// http://localhost:3001
