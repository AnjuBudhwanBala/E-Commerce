import React from 'react';
import './checkoutPage.styles.scss';
import { useSelector, shallowEqual } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cartSelector';

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems, shallowEqual);
  const total = useSelector(selectCartTotal, shallowEqual);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => cartItem.name)}
      <div className="total">
        <span>Total:${total}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
