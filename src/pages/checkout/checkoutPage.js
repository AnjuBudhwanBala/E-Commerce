import React from 'react';
import './checkoutPage.styles.scss';
import { useSelector, shallowEqual } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cartSelector';
import CheckoutItem from '../../components/checkoutItem/checkoutItem';
import StripeCheckoutButton from '../../components/stripeButton/stripeButton';

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
      {cartItems.map(cartItem => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <div className="total">
        <span>TOTAL:${total}</span>
      </div>
      <div className="test-warning">
        *Plesae use the following test credit card for payments *<br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV:123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

export default CheckoutPage;
