import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';
import {
  clearItemFromCart,
  removeItem,
  addItem
} from '../../redux/cart/cart.actions';
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkoutItem.styles';

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
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeCartItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItemIncrease(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearCartItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
