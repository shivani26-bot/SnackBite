import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
  },
  reducers: {
    // when we dispatch the method from the reducer , data sent while dispatching is stored in the action
    addToCart: (state, action) => {
      // console.log("action1", action.payload);
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log("itemindex", itemIndex);
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].quantity += 1;
      } else {
        const temp = { ...action.payload, quantity: 1 };
        console.log("temp", temp);
        state.cartItem = [...state.cartItem, temp];
      }
    },
    incrementQuantity: (state, action) => {
      // console.log("action2", action.payload);
      const item = state.cartItem.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      // console.log("action3", action.payload);
      const item = state.cartItem.find((item) => item.id === action.payload);
      if (item) {
        item.quantity -= 1;
      }
      if (item.quantity === 0) {
        state.cartItem = state.cartItem.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    removeFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartItem = [];
    },
  },
});

// export reducer and action
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
