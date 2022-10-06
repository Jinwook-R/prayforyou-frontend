import { DESTINATION_DOMAIN_ADDRESS } from "../../utils/constants";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserInfo = createAsyncThunk(
  "user/info",
  async ({ userNexonId }) => {
    const responseData = await axios
      .get(`${DESTINATION_DOMAIN_ADDRESS}/user/${userNexonId}`)
      .then(({ data }) => data)
      .catch((err) => {
        console.log(err);
      });
    return responseData;
  }
);

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    info: {},
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getUserInfo.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUserInfo.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.info = action.payload;
    },
    [getUserInfo.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const userInfoReducer = userInfoSlice.reducer;
