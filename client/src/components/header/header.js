import React, { useCallback } from 'react';

import { ReactComponent as Logo } from '../../assets/crown.svg';
//import { auth } from '../../firebase/firebase.utils';
// import './header.styles.scss';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import CartIcon from '../cartIcon/cartIcon';
import CartDropDown from '../cartDropDown/cartDropDown';
import { selectCurrentUser } from '../../redux/user/userSelector';
import { selectCartHidden } from '../../redux/cart/cartSelector';
import { signOutStart } from '../../redux/user/user.actions';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

const Header = () => {
  const dispatch = useDispatch();
  const startSignOut = useCallback(() => {
    dispatch(signOutStart());
  }, [dispatch]);

  const hidden = useSelector(selectCartHidden, shallowEqual);
  //currentUser from redux
  const currentUser = useSelector(selectCurrentUser, shallowEqual);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={startSignOut}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

export default Header;
