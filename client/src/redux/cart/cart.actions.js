import * as actionTypes from '../actionTypes';

export const toggleCartHidden = () => ({
  type: actionTypes.TOGGLE_CART_HIDDEN
});
export const addItem = item => ({
  type: actionTypes.ADD_ITEMS,
  payload: item
});
export const removeItem = item => ({
  type: actionTypes.REMOVE_ITEMS,
  payload: item
});
export const clearItemFromCart = item => ({
  type: actionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const clearCart = () => ({
  type: actionTypes.CLEAR_CART
});
