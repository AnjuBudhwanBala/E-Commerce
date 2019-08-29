import React, { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cartSelector';
import {
  CartIconContainer,
  ShoppingIconConatiner,
  ItemCountConatiner
} from './cartIcon.styles';

const CartIcon = () => {
  const dispatch = useDispatch(() => dispatch);

  const toggleCart = useCallback(() => dispatch(toggleCartHidden()), [
    dispatch
  ]);

  const itemCount = useSelector(selectCartItemsCount, shallowEqual);

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIconConatiner />
      <ItemCountConatiner>{itemCount}</ItemCountConatiner>
    </CartIconContainer>
  );
};

export default CartIcon;
