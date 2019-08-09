import React, { useCallback } from 'react';
import './cartDropDown.styles.scss';
import CustomButton from '../customButton/customButton';
import CartItem from '../cartItem/cartItem';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cartSelector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropDown = ({ history, ...otherProps }) => {
  const itemsInCart = useSelector(selectCartItems, shallowEqual);
  const dispatch = useDispatch();
  const cartHidden = useCallback(() => dispatch(toggleCartHidden()), [
    dispatch
  ]);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {itemsInCart.length ? (
          itemsInCart.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          cartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropDown);
