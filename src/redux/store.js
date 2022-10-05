import { configureStore } from "@reduxjs/toolkit";
import { bannerReducer } from "./banner";
import { userReducer } from "./user";
import { battleReducer } from "./battle";
import { rankingReducer } from "./ranking";
import { mapReducer } from "./map";
import { clanRankingReducer } from "./clan";
import { privateRankingReducer } from "./private";
import { clanRecordsReducer, userRecordsReducer } from "./record";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    user: userReducer,
    battle: battleReducer,
    ranking: rankingReducer,
    map: mapReducer,
    clanRankingList: clanRankingReducer,
    privateRankingList: privateRankingReducer,
    userRecords: userRecordsReducer,
    clanRecords: clanRecordsReducer,
  },
});
