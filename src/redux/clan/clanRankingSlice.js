import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DESTINATION_DOMAIN_ADDRESS } from "../../utils/constants";

export const getClanRankings = createAsyncThunk(
  "clan/ranking",
  async ({ levelName }) => {
    const responseData = await axios
      .get(`${DESTINATION_DOMAIN_ADDRESS}/clan/ranking?levelName=${levelName}`)
      .then((res) => {
        return res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return responseData;
  }
);

export const clanRankingSlice = createSlice({
  name: "clanRankingList",
  initialState: {
    content: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getClanRankings.pending]: (state, action) => {
      state.status = "loading";
    },
    [getClanRankings.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.content = action.payload;
    },
    [getClanRankings.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const clanRankingReducer = clanRankingSlice.reducer;
