import { createSlice } from "@reduxjs/toolkit";
// import { INITIAL_STATE } from "../constants";
export const INITIAL_STATE_FILTERS = {
  filters: {
    name: "",
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE_FILTERS,
  reducers: {
    changeFilter(state, action) {
      state.filters.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
