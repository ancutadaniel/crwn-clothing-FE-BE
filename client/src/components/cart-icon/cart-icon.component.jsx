import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleCartAction } from '../../redux/cart-reducer/cart-actions';
import { selectCartItemsCount } from '../../redux/cart-reducer/cart.selectors';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();

  const toggleCartIcon = () => {
    dispatch(toggleCartAction());
  };

  return (
    <CartIconContainer onClick={toggleCartIcon}>
      <ShoppingIcon />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
