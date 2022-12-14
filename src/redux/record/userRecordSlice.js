import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DESTINATION_DOMAIN_ADDRESS } from "../../utils/constants";

export const getUserRecords = createAsyncThunk(
  "user/matches",
  async ({ userNexonId, page = 0 }) => {
    const responseData = await axios
      .get(
        `${DESTINATION_DOMAIN_ADDRESS}/user/match?userNexonId=${userNexonId}&page=${page}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return responseData;
  }
);

export const userRecordsSlice = createSlice({
  name: "userRecords",
  initialState: {
    content: [],
    isEnd: true,
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getUserRecords.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUserRecords.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.content = action.payload.data;
      state.isEnd = action.payload.last;
    },
    [getUserRecords.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const userRecordsReducer = userRecordsSlice.reducer;
