import { configureStore } from "@reduxjs/toolkit";

export const store = ({
  reducer: { },
});

export type RootState = ReturnType<typeof store.getState>;