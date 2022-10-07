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
import { matchDetailSliceReducer } from "./record/matchDetailSlice";
import { clanInfoReducer } from "./clan/clanInfoSlice";
import { includedReducer } from "./clan/includedClansSlice";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    userSearch: userSearchReducer,
    userInfo: userInfoReducer,
    includedClans: includedReducer,
    clanInfo: clanInfoReducer,
    battle: battleReducer,
    ranking: rankingReducer,
    map: mapReducer,
    clanRankingList: clanRankingReducer,
    privateRankingList: privateRankingReducer,
    userRecords: userRecordsReducer,
    clanRecords: clanRecordsReducer,
    matchDetail: matchDetailSliceReducer,
  },
});
