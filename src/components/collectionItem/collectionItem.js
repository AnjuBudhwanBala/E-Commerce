import React, { useCallback } from 'react';
import './collectionItem.styles.scss';
import CustomButton from '../customButton/customButton';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item }) => {
  const { imageUrl, price, name } = item;

  const dispatch = useDispatch(() => dispatch);

  const addCartItem = useCallback(
    item => {
      dispatch(addItem(item));
    },
    [dispatch]
  );

  return (
    <div className="collectionItem">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addCartItem(item)}>
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
