import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { collectionSelector } from '../../redux/shop-reducer/shop.selector';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {
  CollectionPageContainer,
  CollectionPageTitle,
  CollectionPageItem,
} from './collection.styles';

const CollectionPage = () => {
  const params = useParams();
  const collection = useSelector(collectionSelector(params.id));

  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionPageTitle>{title}</CollectionPageTitle>
      <CollectionPageItem>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionPageItem>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
