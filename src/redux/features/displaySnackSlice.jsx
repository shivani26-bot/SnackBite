import { createSlice } from "@reduxjs/toolkit";

const displaySnackSlice = createSlice({
  name: "displaySnack",
  initialState: {
    displayedSnacks: [],
  },
  reducers: {
    setDisplayedSnacks: (state, action) => {
      console.log("action1", action.payload);
      state.displayedSnacks = action.payload;
    },
  },
});

export const { setDisplayedSnacks } = displaySnackSlice.actions;
export default displaySnackSlice.reducer;
