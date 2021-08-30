import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ShopPageContainer } from './shop.styles';
import CollectionOverviewContainer from '../../components/collections-overview/container-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.component';
import { pendingShopData } from '../../redux/shop-reducer/shop-actions';

const Shop = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pendingShopData());
  }, [dispatch]);

  return (
    <ShopPageContainer>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route path={`${match.path}/:id`} component={CollectionPageContainer} />
    </ShopPageContainer>
  );
};

export default Shop;
