import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../app/CartSlice"
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
