import { createSlice } from "@reduxjs/toolkit";
import { PropsLogin } from "../typeProps";

const login: PropsLogin = {
  user: false,
  isFetching: false,
  error: false,
};

type initialStateType = {
  login: PropsLogin;
};

const initialState: initialStateType = {
  login,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // Login
    signInStart: (state) => {
      state.login.isFetching = true;
    },
    signInSuccess: (state) => {
      state.login.isFetching = false;
      state.login.user = true;
      // state.login.currentUser = action.payload;
      state.login.error = false;
    },
    signInFailure: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
  },
});
export const { signInStart, signInSuccess, signInFailure } = authSlice.actions;
export default authSlice.reducer;
