import { configureStore } from "@reduxjs/toolkit";
import { bannerReducer } from "./banner";
import { userSearchReducer } from "./user";
import { battleReducer } from "./battle";
import { rankingReducer } from "./ranking";
import { mapReducer } from "./map";
import { clanRankingReducer } from "./clan";
import { privateRankingReducer } from "./private";
import { clanRecordsReducer, userRecordsReducer } from "./record";
import { userInfoReducer } from "./user/userInfoSlice";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    userSearch: userSearchReducer,
    userInfo: userInfoReducer,
    battle: battleReducer,
    ranking: rankingReducer,
    map: mapReducer,
    clanRankingList: clanRankingReducer,
    privateRankingList: privateRankingReducer,
    userRecords: userRecordsReducer,
    clanRecords: clanRecordsReducer,
  },
});
