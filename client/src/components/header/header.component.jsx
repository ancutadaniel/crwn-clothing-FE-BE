import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCartToggle } from '../../redux/cart-reducer/cart.selectors';
import { selectCurrentUser } from '../../redux/user-reducer/user.selector';

import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from './header.styles';

import { signOutPending } from '../../redux/user-reducer/user-actions';

const Header = () => {
  const user = useSelector(selectCurrentUser);
  const showCart = useSelector(selectCartToggle);

  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutPending());
  };

  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>Shop</OptionLink>
        <OptionLink to='/contact'>Contact</OptionLink>
        {user ? (
          <OptionLink as='div' onClick={signOut}>
            {' '}
            Sign Out{' '}
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>Sign In</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {showCart && <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
