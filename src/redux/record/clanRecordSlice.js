import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DESTINATION_DOMAIN_ADDRESS } from "../../utils/constants";

export const getClanRecords = createAsyncThunk(
  "clans/records",
  async ({ clanId }) => {
    const responseData = await axios
      .get(`${DESTINATION_DOMAIN_ADDRESS}/clan/match?clanId=${clanId}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return responseData;
  }
);

export const clanRecordsSlice = createSlice({
  name: "clanRecordList",
  initialState: {
    content: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getClanRecords.pending]: (state, action) => {
      state.status = "loading";
    },
    [getClanRecords.fulfilled]: (state, action) => {
      state.status = "succeeded";
      console.log("뭐야", action);
      state.content = action.payload.data;
    },
    [getClanRecords.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const clanRecordsReducer = clanRecordsSlice.reducer;
