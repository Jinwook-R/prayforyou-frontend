import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DESTINATION_DOMAIN_ADDRESS } from "../../utils/constants";

export const searchBattle = createAsyncThunk(
  "battle/searchBattle",
  async (userId) => {
    const responseData = await axios
      .get(`${DESTINATION_DOMAIN_ADDRESS}/user/${userId}/battle`)
      .then((res) => res.data)
      .then(({ data }) => data)
      .catch((err) => {
        console.log(err);
      });
    return responseData;
  }
);

export const battleSlice = createSlice({
  name: "battle",
  initialState: {
    battles: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [searchBattle.pending]: (state, action) => {
      state.status = "loading";
    },
    [searchBattle.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.battle = action.payload;
    },
    [searchBattle.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const battleReducer = battleSlice.reducer;
