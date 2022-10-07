import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DESTINATION_DOMAIN_ADDRESS } from "../../utils/constants";

export const searchBattle = createAsyncThunk(
  "battle/searchBattle",
  async (userId) => {
    const responseData = await axios
      .get(`${DESTINATION_DOMAIN_ADDRESS}/battle/place?userNexonId=${userId}`)
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
    battlePositions: [
      {
        description: "",
        kill: 0,
        death: 0,
      },
    ],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [searchBattle.pending]: (state, action) => {
      state.status = "loading";
    },
    [searchBattle.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.battlePositions = action.payload.length
        ? action.payload
        : [
            {
              description: "텔포자리",
              kill: 100,
              death: 0,
              rate: 100,
            },
            {
              description: "매박",
              kill: 90,
              death: 10,
              rate: 90,
            },
            {
              description: "롱길",
              kill: 80,
              death: 20,
              rate: 80,
            },
            {
              description: "에이 적베",
              kill: 80,
              death: 20,
              rate: 80,
            },
          ];
    },
    [searchBattle.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const battleReducer = battleSlice.reducer;
