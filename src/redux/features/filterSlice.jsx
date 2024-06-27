import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    selectedFilters: [],
  },
  reducers: {
    setFilters: (state, action) => {
      //   console.log("filterslice", action.payload);
      state.selectedFilters = action.payload;
    },
  },
});
export const { setFilters } = filterSlice.actions;
export default filterSlice.reducer;
