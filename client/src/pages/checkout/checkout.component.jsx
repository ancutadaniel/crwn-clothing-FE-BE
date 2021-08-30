import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { clearCart } from '../../redux/cart-reducer/cart-actions';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart-reducer/cart.selectors';

import {
  CheckoutPageContainer,
  CheckoutHeaderContariner,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from './checkout.styles';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContariner>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContariner>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <CustomButton onClick={handleClearCart}>Clear Cart</CustomButton>
      <TotalContainer>
        <span>Total: ${total}</span>
      </TotalContainer>
      <WarningContainer>
        *Please use the following test credit card for payments
        <br />
        <span>CARD NUM: 4242 4242 4242 4242</span>
        <br />
        <span>EXP: 01/24</span>
        <br />
        <span>CVV: 123</span>
      </WarningContainer>
      <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
  );
};

export default Checkout;
