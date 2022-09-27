import { configureStore } from "@reduxjs/toolkit";
import { bannerReducer } from "./banner/bannerSlice";
import { userReducer } from "./user";
import { battleReducer } from "./battle/battleSlice";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    user: userReducer,
    battle: battleReducer,
  },
});
