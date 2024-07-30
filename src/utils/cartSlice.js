import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    foodItemsArr: [],
    quantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const index = state.foodItemsArr.findIndex(
        (each) => each.id === action.payload.id
      );
      if (index === -1) {
        //if this item is not present in the cart
        state.foodItemsArr.push(action.payload);
      } else {
        //if this item present in the cart
        state.foodItemsArr[index].quantity += action.payload.quantity;
      }
      state.quantity++;
    },

    increaseItemQuantity: (state, action) => {
      state.foodItemsArr[action.payload].quantity++;
      state.quantity++;
    },

    decreaseItemQuantity: (state, action) => {
      state.foodItemsArr[action.payload].quantity--;
      state.quantity--;
    },

    removeItem: (state, action) => {
      const filteredItems = state.foodItemsArr.filter(
        (eachItem) => eachItem.id !== state.foodItemsArr[action.payload].id
      );
      state.foodItemsArr = filteredItems;
      state.quantity--;
    },

    clearCart: (state, action) => {
      state.foodItemsArr.length = 0;
      state.quantity = 0;
    },
  },
});

export const {
  addItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;
