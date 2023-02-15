import { ACCESS_TOKEN_KEY } from '../../Constants/consts';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { 
  RegisterUserPayload,
  ActivateUserPayload,
  SignInUserPayload,
  SetUserDataPayload,
  SendResetEmailPayload,
  resetPasswordConfirmPayload } from "../Types/auth";

type AuthState = {
  isLoggedIn: boolean
  userName: string
  userId: number | null
}

const INITIAL_STATE: AuthState = {
  isLoggedIn: !!localStorage.getItem(ACCESS_TOKEN_KEY),
  userName: "",
  userId: null,
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
    setUserData: (state, action: PayloadAction<SetUserDataPayload>) => {
      const { userName, id } = action.payload;
      state.userName = userName;
      state.userId = id;
    },
    logoutUser: (state, action: PayloadAction<undefined>) => {},
    sendResetEmail: (state, action: PayloadAction<SendResetEmailPayload>) => {},
    resetPasswordConfirm: (state, action: PayloadAction<resetPasswordConfirmPayload>) => {},
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
  sendResetEmail,
  resetPasswordConfirm,
} = authSlice.actions;

export default authSlice.reducer;