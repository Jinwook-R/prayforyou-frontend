import { DESTINATION_DOMAIN_ADDRESS } from "../../utils/constants";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getIncludedClans = createAsyncThunk("clan/home", async () => {
  const responseData = await axios
    .get(`${DESTINATION_DOMAIN_ADDRESS}/clan/home`)
    .then((res) => res.data.data)
    .catch((err) => {
      console.log(err);
    });
  return responseData;
});

export const includedClansSlice = createSlice({
  name: "clanHome",
  initialState: {
    content: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getIncludedClans.pending]: (state, action) => {
      state.status = "loading";
    },
    [getIncludedClans.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.content = action.payload;
    },
    [getIncludedClans.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const includedReducer = includedClansSlice.reducer;
