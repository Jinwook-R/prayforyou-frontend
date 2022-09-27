import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DESTINATION_DOMAIN_ADDRESS } from "../../utils/constants";

export const fetchAllBanners = createAsyncThunk(
  "banner/fetchAllBanners",
  async () => {
    const responseData = await axios
      .get(`${DESTINATION_DOMAIN_ADDRESS}/banner`)
      .then((res) => {
        console.log(res.data);
        return res.data;
      });
    return responseData;
  }
);

export const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    banners: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [fetchAllBanners.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchAllBanners.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.banners = action.payload;
    },
    [fetchAllBanners.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const selectBanner = (state) => state.banner.banners;
export const bannerReducer = bannerSlice.reducer;
