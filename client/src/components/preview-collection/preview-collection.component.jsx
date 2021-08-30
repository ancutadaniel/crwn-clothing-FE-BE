import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import {
  PreviewCollectionContainer,
  PreviewCollectionTitle,
  PreviewCollectionItems,
} from './preview-collection.styles';

const PreviewCollections = ({ title, items, routeName }) => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <PreviewCollectionContainer>
      <PreviewCollectionTitle
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title?.toUpperCase()}
      </PreviewCollectionTitle>
      <PreviewCollectionItems>
        {items
          .filter((item, index) => index < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </PreviewCollectionItems>
    </PreviewCollectionContainer>
  );
};

export default PreviewCollections;
