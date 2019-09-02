import React, { useCallback } from 'react';

import CartItem from '../cartItem/cartItem';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cartSelector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {
  CartDropDownContainer,
  EmptyMessageContainer,
  CartItemsContainer,
  CartDropdownButton
} from './cartDropDown.styles';

const CartDropDown = ({ history, ...otherProps }) => {
  const itemsInCart = useSelector(selectCartItems, shallowEqual);
  const dispatch = useDispatch();
  const cartHidden = useCallback(() => dispatch(toggleCartHidden()), [
    dispatch
  ]);

  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {itemsInCart.length ? (
          itemsInCart.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout');
          cartHidden();
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropDownContainer>
  );
};

export default withRouter(CartDropDown);
