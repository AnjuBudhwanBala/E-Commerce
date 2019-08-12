import React, { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import './cartIcon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cartSelector';

const CartIcon = () => {
  const dispatch = useDispatch(() => dispatch);

  const toggleCart = useCallback(() => dispatch(toggleCartHidden()), [
    dispatch
  ]);

  const itemCount = useSelector(selectCartItemsCount, shallowEqual);

  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
