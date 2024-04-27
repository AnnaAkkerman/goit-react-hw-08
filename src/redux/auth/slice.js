import { createSlice } from "@reduxjs/toolkit";
import { apiLogin, apiLogout, apiRefreshUser, apiRegister } from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(apiRegister.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(apiRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiRegister.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(apiLogin.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(apiLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiLogin.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(apiRefreshUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(apiRefreshUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(apiLogout.fulfilled, () => {
        return INITIAL_STATE;
      }),
});

export const authReducer = authSlice.reducer;
