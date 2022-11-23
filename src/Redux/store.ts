import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "./Reducers/postsReducer";
import themeReducer from "./Reducers/themeReducer";
import imageReducer from "./Reducers/imageReducer";

export const store = configureStore({
  reducer: { themeReducer, postsReducer, imageReducer },
});

export type RootState = ReturnType<typeof store.getState>;