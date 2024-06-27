import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import displaySnackSlice from "../features/displaySnackSlice";
import filterSlice from "../features/filterSlice";
export const reduxStore = configureStore({
  reducer: {
    cart: cartSlice,
    displaySnack: displaySnackSlice,
    filter: filterSlice,
  },
});
