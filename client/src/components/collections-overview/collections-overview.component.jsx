import React from 'react';
import { useSelector } from 'react-redux';
import { collectionsPreview } from '../../redux/shop-reducer/shop.selector';
import PreviewCollections from '../../components/preview-collection/preview-collection.component';
import { CollectionsContainer } from './collections.styles';

const CollectionsOverview = () => {
  const collections = useSelector(collectionsPreview);
  return (
    <CollectionsContainer>
      {collections.map(({ id, ...collectionsProps }) => {
        return <PreviewCollections key={id} {...collectionsProps} />;
      })}
    </CollectionsContainer>
  );
};

export default CollectionsOverview;
