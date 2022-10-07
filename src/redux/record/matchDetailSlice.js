import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DESTINATION_DOMAIN_ADDRESS } from "../../utils/constants";

export const getMatchDetail = createAsyncThunk(
  "clan/matchDetail",
  async ({ matchId, page = 0 }) => {
    const responseData = await axios
      .get(`${DESTINATION_DOMAIN_ADDRESS}/clan/match/detail?matchId=${matchId}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return responseData;
  }
);

export const MatchDetailSlice = createSlice({
  name: "matchDetail",
  initialState: {
    data: {},
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getMatchDetail.pending]: (state, action) => {
      state.status = "loading";
    },
    [getMatchDetail.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload.data;
    },
    [getMatchDetail.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const matchDetailSliceReducer = MatchDetailSlice.reducer;
