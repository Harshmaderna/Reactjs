import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItem: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.cartItem.push(action.payload);
    },
    removeItems: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      );
    },
    clearItems: (state) => {
      state.cartItem = [];
    },
  },
});

export const { addItems, clearItems, removeItems } = cartSlice.actions;
export default cartSlice.reducer;
