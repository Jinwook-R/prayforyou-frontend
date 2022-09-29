import { configureStore } from "@reduxjs/toolkit";
import { bannerReducer } from "./banner";
import { userReducer } from "./user";
import { battleReducer } from "./battle";
import { rankingReducer } from "./ranking";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    user: userReducer,
    battle: battleReducer,
    ranking: rankingReducer,
  },
});
