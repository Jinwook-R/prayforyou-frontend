import {
  combineReducers,
  configureStore,
  createAction,
} from "@reduxjs/toolkit";
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

export function resetStore() {
  return {
    type: "reset",
    payload: undefined,
  };
}

const combinedReducer = combineReducers({
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
});
const rootReducer = (state, action) => {
  if (action.type === "reset") {
    state = {};
  }

  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});
