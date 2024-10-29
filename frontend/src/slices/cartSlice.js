import { createSlice } from '@reduxjs/toolkit';

//This setup allows the cart to persist across browser sessions,
//as data saved in localStorage remains available even after a page refresh.
const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] };

//let's make sure that we have right amount of decimals
const addDecials = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

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
      //items price
      state.itemsPrice = addDecials(
        state.cartItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        )
      );

      //shipping price (if order is over $80 is free, else $5 shipping)
      state.shippingPrice = addDecials(state.itemsPrice > 80 ? 0 : 5);

      //tax price (15% tax)
      state.taxPrice = addDecials(Number((0.15 * state.itemsPrice).toFixed(2)));

      //Total price
      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2);

      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
