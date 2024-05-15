import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cartSlice: cartSliceReducer,
  },
});

export default appStore;
