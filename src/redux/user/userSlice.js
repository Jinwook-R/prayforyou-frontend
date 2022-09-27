import { DESTINATION_DOMAIN_ADDRESS } from "../../utils/constants";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchUsers = createAsyncThunk(
  "user/searchUsers",
  async (searchText) => {
    searchText = searchText === "" ? null : searchText;
    const responseData = await axios
      .get(`${DESTINATION_DOMAIN_ADDRESS}/user/search?nickname=${searchText}`)
      .then((res) => res.data)
      .then(({ data }) => data)
      .catch((err) => {
        console.log(err);
      });
    return responseData;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [searchUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [searchUsers.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.users = action.payload;
    },
    [searchUsers.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const selectUser = (state) => state.user.users;
export const userReducer = userSlice.reducer;
