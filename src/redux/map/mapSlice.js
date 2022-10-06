import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DESTINATION_DOMAIN_ADDRESS } from "../../utils/constants";

export const getMapPositions = createAsyncThunk(
  "battle/positions",
  async () => {
    const responseData = await axios
      .get(`${DESTINATION_DOMAIN_ADDRESS}/battle/positions`)
      .then((res) => res.data.data)
      .catch((err) => {
        console.log(err);
      });
    return responseData;
  }
);

export const mapSlice = createSlice({
  name: "map",
  initialState: {
    map: [],
    hover: {
      isHovered: false,
      hoveredPlaceType: "",
    },
    positions: [],
    status: null,
  },
  reducers: {
    setHover: (state, action) => {
      state.hover = action.payload;
    },
  },
  extraReducers: {
    [getMapPositions.pending]: (state, action) => {
      state.status = "loading";
    },
    [getMapPositions.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.positions = action.payload;
    },
    [getMapPositions.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { setHover } = mapSlice.actions;
export const mapReducer = mapSlice.reducer;
