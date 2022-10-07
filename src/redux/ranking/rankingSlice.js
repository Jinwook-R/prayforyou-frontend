import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DESTINATION_DOMAIN_ADDRESS } from "../../utils/constants";
import axios from "axios";

export const fetchAllRanking = createAsyncThunk(
  "ranking/fetchAllRanking",
  async (param) => {
    const { levelName } = param;

    const responseData = await axios
      .get(`${DESTINATION_DOMAIN_ADDRESS}/clan/ranking?levelName=${levelName}`)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });

    return responseData;
  }
);

export const rankingSlice = createSlice({
  name: "ranking",
  initialState: {
    ranking: {
      dailyView: [],
      weeklyView: [],
    },
    status: null,
  },
  reducers: {},
  extraReducers: {
    [fetchAllRanking.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchAllRanking.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.ranking = action.payload;
    },
    [fetchAllRanking.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const selectRanking = (state) => state.banner.banners;
export const rankingReducer = rankingSlice.reducer;
