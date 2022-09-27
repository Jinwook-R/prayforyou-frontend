import { configureStore } from "@reduxjs/toolkit";
import { bannerReducer } from "./banner/bannerSlice";
import { userReducer } from "./user";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    user: userReducer,
  },
});
