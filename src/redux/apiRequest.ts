import { toast } from "react-toastify";
import { signInSuccess } from "./authSlice";
export const signInUser = async (user: any, dispatch: any, navigate: any) => {
  toast.success("Login successfully");
  dispatch(signInSuccess());
  navigate("/");
};

// https://queuing-api.vercel.app
// http://localhost:3001
