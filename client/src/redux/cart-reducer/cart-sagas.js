import { takeLatest, put, call, all } from '@redux-saga/core/effects';

import { SIGN_OUT_FULLFILED } from '../user-reducer/user-constants';
import { clearCart } from './cart-actions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* clearCartSagas() {
  yield takeLatest(SIGN_OUT_FULLFILED, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(clearCartSagas)]);
}
