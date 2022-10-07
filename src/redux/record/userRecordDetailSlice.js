import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DESTINATION_DOMAIN_ADDRESS } from "../../utils/constants";

export const getUserRecordDetail = createAsyncThunk(
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

export const userRecordDetailSlice = createSlice({
  name: "userRecordDetail",
  initialState: {
    content: [],
    isEnd: true,
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getUserRecordDetail.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUserRecordDetail.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.content = action.payload.data;
      state.isEnd = action.payload.last;
    },
    [getUserRecordDetail.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const userRecordDetailReducer = userRecordDetailSlice.reducer;
