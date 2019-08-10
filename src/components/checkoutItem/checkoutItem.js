import React, { useCallback } from 'react';
import './checkoutItem.styles.scss';
import { useDispatch } from 'react-redux';
import {
  clearItemFromCart,
  removeItem,
  addItem
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();
  const clearCartItem = useCallback(item => dispatch(clearItemFromCart(item)), [
    dispatch
  ]);
  const addItemIncrease = useCallback(item => dispatch(addItem(item)), [
    dispatch
  ]);
  const removeCartItem = useCallback(
    item => {
      dispatch(removeItem(item));
    },
    [dispatch]
  );
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeCartItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemIncrease(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearCartItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
