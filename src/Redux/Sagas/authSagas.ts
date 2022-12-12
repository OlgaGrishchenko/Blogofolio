import { takeLatest, all, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { registerUser, activateUser } from "../Reducers/authReducer";
import { RegisterUserPayload, ActivateUserPayload } from "../Types/auth";
import API from "../utils/api";

function* registerUserWorker(action: PayloadAction<RegisterUserPayload>) {
  const { data: registerData, callback } = action.payload;

  const { ok, problem } = yield call(API.registerUser, registerData);
  if (ok) {
    callback();
  } else {
    console.warn("Error while registering user: ", problem);
  }
}

function* activateUserWorker(action: PayloadAction<ActivateUserPayload>) {
  const { data: activateData, callback } = action.payload;
  const { ok, problem } = yield call(API.activateUser, activateData);
  if (ok) {
    callback();
  } else {
    console.warn("Error while activating user", problem);
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(registerUser, registerUserWorker),
    takeLatest(activateUser, activateUserWorker)
  ]);
}