import { ACCESS_TOKEN_KEY } from '../../Constants/consts';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterUserPayload, ActivateUserPayload, SignInUserPayload } from "../Types/auth";

const INITIAL_STATE = {
  isLoggedIn: !!localStorage.getItem(ACCESS_TOKEN_KEY),
  userName: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    registerUser: (state, action: PayloadAction<RegisterUserPayload>) => {},
    signInUser: (state, action: PayloadAction<SignInUserPayload>) => {},
    activateUser: (state, action: PayloadAction<ActivateUserPayload>) => {},
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    getUserData: (state, action: PayloadAction<undefined>) => {},
    setUserData: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    logoutUser: (state, action: PayloadAction<undefined>) => {}
  },
});


export const {
  registerUser,
  signInUser,
  activateUser,
  setLoggedIn,
  getUserData,
  setUserData,
  logoutUser,
} = authSlice.actions;

export default authSlice.reducer;