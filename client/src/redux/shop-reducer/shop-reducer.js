import {
  PENDING_SHOP_DATA,
  FULLFILED_SHOP_DATA,
  REJECTED_SHOP_DATA,
} from './shop-constants';

const initialState = {
  collections: null,
  isPending: false,
  error: undefined,
};

export const shopReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case PENDING_SHOP_DATA:
      return {
        ...state,
        isPending: true,
      };
    case FULLFILED_SHOP_DATA:
      return {
        ...state,
        collections: actions.payload,
        isPending: false,
      };
    case REJECTED_SHOP_DATA:
      return {
        ...state,
        error: actions.payload,
        isPending: false,
      };
    default:
      return state;
  }
};

export default shopReducer;
