import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // get localStorage from window obj

import userReducer from './user-reducer/user-reducer';
import cartReducer from './cart-reducer/cart-reducer';
import directoryReducer from './directory-redux/directory-reducer';
import shopReducer from './shop-reducer/shop-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['root_cart_reducer'],
};

const rootReducers = combineReducers({
  root_user_reducer: userReducer,
  root_cart_reducer: cartReducer,
  root_directory_reducer: directoryReducer,
  root_shop_reducer: shopReducer,
});

export default persistReducer(persistConfig, rootReducers);
