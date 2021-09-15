import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ShopPageContainer } from './shop.styles';
import { pendingShopData } from '../../redux/shop-reducer/shop-actions';

import SimpleSpinner from '../../components/simple-spinner/simple-spinner';

const CollectionOverviewContainer = lazy(() =>
  import('../../components/collections-overview/container-overview.container')
);

const CollectionPageContainer = lazy(() =>
  import('../../pages/collection/collection.component')
);

const Shop = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pendingShopData());
  }, [dispatch]);

  return (
    <ShopPageContainer>
      <Suspense fallback={<SimpleSpinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route path={`${match.path}/:id`} component={CollectionPageContainer} />
      </Suspense>
    </ShopPageContainer>
  );
};

export default Shop;
