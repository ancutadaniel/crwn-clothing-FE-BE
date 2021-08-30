import {
  TOGGLE_CART,
  ADD_ITEM,
  REMOVE_ITEM_FROM_LIST,
  REMOVE_ITEM_CHECKOUT,
  CLEAR_CART,
} from './cart-constants';
import {
  addItemToCart,
  removeItemFromCart,
  removeItemFromCheckout,
} from './cart.utils';

const initialState = {
  showCart: false,
  cartItems: [],
};

const cartReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TOGGLE_CART:
      return {
        ...state,
        showCart: !state.showCart,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, actions.payload),
      };
    case REMOVE_ITEM_FROM_LIST:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, actions.payload),
      };
    case REMOVE_ITEM_CHECKOUT:
      return {
        ...state,
        cartItems: removeItemFromCheckout(state.cartItems, actions.payload),
      };

    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
