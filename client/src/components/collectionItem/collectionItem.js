import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collectionItem.styles';

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
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => addCartItem(item)}>
        Add to Cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
