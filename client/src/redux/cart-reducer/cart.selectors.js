import { createSelector } from 'reselect';

//input selector  // rare usage because of size of object
const selectCart = (state) => state.root_cart_reducer;

//create selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartToggle = createSelector(
  [selectCart],
  (cart) => cart.showCart
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);
