import {
  SIGN_IN_FULLFILED,
  SIGN_IN_REJECTED,
  SIGN_OUT_FULLFILED,
  SIGN_OUT_REJECTED,
  SIGN_UP_REJECTED,
} from './user-constants';

const initialState = {
  currentUser: null,
  error: '',
};

const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SIGN_IN_FULLFILED:
      return {
        ...state,
        currentUser: actions.payload,
        error: null,
      };

    case SIGN_OUT_FULLFILED:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case SIGN_IN_REJECTED:
    case SIGN_OUT_REJECTED:
    case SIGN_UP_REJECTED:
      return {
        ...state,
        error: actions.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
