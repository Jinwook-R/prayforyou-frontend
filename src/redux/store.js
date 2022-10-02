import { configureStore } from "@reduxjs/toolkit";
import { bannerReducer } from "./banner";
import { userReducer } from "./user";
import { battleReducer } from "./battle";
import { rankingReducer } from "./ranking";
import { mapReducer } from "./map";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    user: userReducer,
    battle: battleReducer,
    ranking: rankingReducer,
    map: mapReducer,
  },
});
