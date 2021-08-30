import {
  ADD_ITEM,
  TOGGLE_CART,
  REMOVE_ITEM_CHECKOUT,
  REMOVE_ITEM_FROM_LIST,
  CLEAR_CART,
} from './cart-constants';

export const toggleCartAction = () => ({
  type: TOGGLE_CART,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM_FROM_LIST,
  payload: item,
});

export const removeItemCheckout = (item) => ({
  type: REMOVE_ITEM_CHECKOUT,
  payload: item,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
