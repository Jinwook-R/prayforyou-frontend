import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DESTINATION_DOMAIN_ADDRESS } from "../../utils/constants";

export const getPrivateRankings = createAsyncThunk(
  "user/ranking",
  async ({ page = 0 }) => {
    const responseData = await axios
      .get(`${DESTINATION_DOMAIN_ADDRESS}/user/ranking?page=${page}`)
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

export const privateRankingSlice = createSlice({
  name: "privateRankingList",
  initialState: {
    users: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getPrivateRankings.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPrivateRankings.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.users = action.payload;
    },
    [getPrivateRankings.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const privateRankingReducer = privateRankingSlice.reducer;
