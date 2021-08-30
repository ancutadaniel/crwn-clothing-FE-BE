import { takeLatest, call, put, all } from '@redux-saga/core/effects';
/* takeEvery listen to every action that we pass like PENDING_SHOP_DATA
   put is similar as dispatch(thunk)
   put is the sagas effect for create actions
   call is the effect inside generator functions that invokes functions 
*/

import { PENDING_SHOP_DATA } from './shop-constants';
import { fullfiledShopData, rejectedShopData } from './shop-actions';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

// sagas approach
// async generator function trigger by the action bellow "PENDING_SHOP_DATA"
export function* fetchShopDataAsync() {
  try {
    const collectionRef = firestore.collection('collections');

    /* we use a generator function, and the return is a Promise 
     form that gets resolve with the value of collections ref */
    const snapshot = yield collectionRef.get();

    // call is the effect inside generator functions that invokes functions
    // first argument is the functions and the second parameter is the param pass in first function
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );

    // put is similar as dispatch(thunk)
    // put is the sagas effect for create actions
    yield put(fullfiledShopData(collectionsMap));
  } catch (error) {
    yield put(rejectedShopData(error.message));
  }
}

export function* pendingShopDataSagas() {
  //listen to PENDING_SHOP_DATA action
  yield takeLatest(PENDING_SHOP_DATA, fetchShopDataAsync);
}

export function* shopsSagas() {
  yield all([call(pendingShopDataSagas)]);
}
