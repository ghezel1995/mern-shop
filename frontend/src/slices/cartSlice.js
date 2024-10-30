import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtils';

//This setup allows the cart to persist across browser sessions,
//as data saved in localStorage remains available even after a page refresh.
const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      // This ensures that each item in the cart is unique based on its _id.
      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      return updateCart(state)
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
