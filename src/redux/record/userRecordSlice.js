import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DESTINATION_DOMAIN_ADDRESS } from "../../utils/constants";

export const getUserRecords = createAsyncThunk(
  "user/matches",
  async ({ userNexonId }) => {
    const responseData = await axios
      .get(
        `${DESTINATION_DOMAIN_ADDRESS}/user/match?userNexonId=${userNexonId}`
      )
      .then((res) => {
        console.log("what?", res.data);
        return res.data.content;
      })
      .catch((err) => {
        console.log(err);
      });
    return responseData;
  }
);

export const userRecordsSlice = createSlice({
  name: "privateRankingList",
  initialState: {
    matches: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getUserRecords.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUserRecords.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.matches = action.payload;
    },
    [getUserRecords.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const userRecordsReducer = userRecordsSlice.reducer;
