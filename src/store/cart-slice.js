import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existItem = state.items.find((item) => item.id === newItem.id);

      if (!existItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.newItem.totalPrice,
          title: newItem.title,
        });
      } else {
        existItem.quantity = existItem.quantity++;
        existItem.totalPrice = existItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existItem = state.items.find((item) => item.id === id);

      if (existItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existItem.quantity--;
        existItem.totalPrice = existItem.totalPrice - existItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
