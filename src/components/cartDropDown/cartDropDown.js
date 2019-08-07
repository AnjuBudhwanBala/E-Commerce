import React from 'react';
import './cartDropDown.styles.scss';
import CustomButton from '../customButton/customButton';

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropDown;
