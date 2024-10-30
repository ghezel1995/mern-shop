export const addDecials = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  //items price
  state.itemsPrice = addDecials(
    state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
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
  
  return state;
}
