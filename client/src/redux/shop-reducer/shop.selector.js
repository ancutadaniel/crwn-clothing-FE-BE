import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const shopSelector = (state) => state.root_shop_reducer;

export const shopData = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const collectionsPreview = createSelector([shopData], (collections) =>
  collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const collectionSelector = memoize((urlParams) =>
  createSelector([shopData], (collections) =>
    collections ? collections[urlParams] : null
  )
);

export const collectionFetch = createSelector(
  [shopSelector],
  (shop) => shop.isPending
);

export const collectionIsLoading = createSelector(
  [shopSelector],
  (shop) => !!shop.collections
);
