import React from 'react';
import './cartDropDown.styles.scss';
import CustomButton from '../customButton/customButton';
import CartItem from '../cartItem/cartItem';
import { useSelector } from 'react-redux';

const CartDropDown = () => {
  const itemsInCart = useSelector(state => state.cart.cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {itemsInCart.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropDown;
