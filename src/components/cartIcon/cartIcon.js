import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './cartIcon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = () => {
  const dispatch = useDispatch(() => dispatch);

  const toggleCart = useCallback(() => dispatch(toggleCartHidden()), [
    dispatch
  ]);

  const itemCount = useSelector(state => {
    console.log('i am being called');
    state.cart.cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
  });

  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
