import React from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../redux/cart-reducer/cart-actions';

import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  AddButton,
} from './collection-item.styles';

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();

  const { name, imageUrl, price } = item;

  return (
    <CollectionItemContainer>
      <ImageContainer className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer> {name}</NameContainer>
        <PriceContainer> ${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => dispatch(addItem(item))}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
