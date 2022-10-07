import { DESTINATION_DOMAIN_ADDRESS } from "../../utils/constants";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getClanInfo = createAsyncThunk("clan/info", async ({ clanId }) => {
  const responseData = await axios
    .get(`${DESTINATION_DOMAIN_ADDRESS}/clan/${clanId}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
  return responseData;
});

export const clanInfoSlice = createSlice({
  name: "clanInfo",
  initialState: {
    info: {},
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getClanInfo.pending]: (state, action) => {
      state.status = "loading";
    },
    [getClanInfo.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.info = action.payload;
    },
    [getClanInfo.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const clanInfoReducer = clanInfoSlice.reducer;
