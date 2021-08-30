import React from 'react';
import { useDispatch } from 'react-redux';

import {
  addItem,
  removeItemCheckout,
  removeItem,
} from '../../redux/cart-reducer/cart-actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './checkout.styles';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div
          className='arrow'
          onClick={() => dispatch(removeItemCheckout(cartItem))}
        >
          &#10094;
        </div>
        <span>{quantity}</span>
        <div className='arrow' onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => dispatch(removeItem(cartItem))}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
