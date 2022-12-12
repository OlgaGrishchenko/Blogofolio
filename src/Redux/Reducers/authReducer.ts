import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterUserPayload, ActivateUserPayload } from "../Types/auth";

const INITIAL_STATE = {};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    registerUser: (state, action: PayloadAction<RegisterUserPayload>) => {},
    activateUser: (state, action: PayloadAction<ActivateUserPayload>) => {},
  },
});

export const { registerUser, activateUser } = authSlice.actions;

export default authSlice.reducer;