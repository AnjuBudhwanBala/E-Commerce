import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import './cartIcon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import toggleCartHidden from '../../redux/cart/cart.actions';

const CartIcon = () => {
  const dispatch = useDispatch(() => dispatch);

  const toggleCart = useCallback(() => dispatch(toggleCartHidden()), [
    dispatch
  ]);

  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
