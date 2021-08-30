import {
  PENDING_SHOP_DATA,
  FULLFILED_SHOP_DATA,
  REJECTED_SHOP_DATA,
} from './shop-constants';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

export const pendingShopData = () => ({
  type: PENDING_SHOP_DATA,
});

export const fullfiledShopData = (collectionsMap) => ({
  type: FULLFILED_SHOP_DATA,
  payload: collectionsMap,
});

export const rejectedShopData = (error) => ({
  type: REJECTED_SHOP_DATA,
  payload: error,
});

// thunk approach -> action code async
export const fetchShopDataAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(pendingShopData());

    collectionRef.onSnapshot(async (snapshot) => {
      try {
        const collectionsMap = await convertCollectionsSnapshotToMap(snapshot);
        dispatch(fullfiledShopData(collectionsMap));
      } catch (error) {
        dispatch(rejectedShopData(error.message));
      }
    });
  };
};
