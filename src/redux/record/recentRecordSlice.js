import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DESTINATION_DOMAIN_ADDRESS } from "../../utils/constants";

export const getRecentRecords = createAsyncThunk(
  "clan/matches/recent",
  async () => {
    const responseData = await axios
      .get(`${DESTINATION_DOMAIN_ADDRESS}/clan/match/recent`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return responseData;
  }
);

export const recentRecordsSlice = createSlice({
  name: "recentRecords",
  initialState: {
    content: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getRecentRecords.pending]: (state, action) => {
      state.status = "loading";
    },
    [getRecentRecords.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.content = action.payload.data;
      state.isEnd = action.payload.last;
    },
    [getRecentRecords.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const recentRecordsReducer = recentRecordsSlice.reducer;
