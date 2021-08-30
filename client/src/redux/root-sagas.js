import { all, call } from 'redux-saga/effects';
import { pendingShopDataSagas } from './shop-reducer/shop-sagas';
import { userSagas } from './user-reducer/user-sagas';
import { cartSagas } from './cart-reducer/cart-sagas';
import { shopsSagas } from './shop-reducer/shop-sagas';

export default function* rootSaga() {
  yield all([
    call(pendingShopDataSagas),
    call(userSagas),
    call(cartSagas),
    call(shopsSagas),
  ]);
}
