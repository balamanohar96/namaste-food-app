import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    foodItemsArr: [],
    quantity:0
  },
  reducers: {
    addItem: (state, action) => {
      state.foodItemsArr.push(action.payload);
      state.quantity++;
    },
    removeItem: (state, action) => {
      state.foodItemsArr.pop();
    },
    clearCart: (state, action) => {
      state.foodItemsArr.length = 0;
      state.quantity=0
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
