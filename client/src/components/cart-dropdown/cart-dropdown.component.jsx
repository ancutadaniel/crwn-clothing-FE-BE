import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart-reducer/cart.selectors';
import { toggleCartAction } from '../../redux/cart-reducer/cart-actions';

import { useHistory } from 'react-router-dom';

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const history = useHistory();

  const toggleCart = () => {
    history.push('/checkout');
    dispatch(toggleCartAction());
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage className='empty-message'>
            Your cart is empty
          </EmptyMessage>
        )}
      </CartItemsContainer>
      <CustomButton onClick={toggleCart}>Checkout</CustomButton>
    </CartDropdownContainer>
  );
};

// withRouter give as access to location history match for routing
// connect pass into component as a props ===> dispatch
// if we don't supply second argument with connect
export default CartDropdown;
