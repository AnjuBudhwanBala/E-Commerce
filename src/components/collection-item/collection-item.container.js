import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import CollectionItem from './collection-item.component';

const ADD_ITEM_TO_CART = gql`
  mutation AddItemsToCart($item: item!) {
    addItemsToCart(item: $item) @client
  }
`;

const CollectionItemContainer = props => {
  return (
    <Mutation mutation={ADD_ITEM_TO_CART}>
      {addItemsToCart => (
        <CollectionItem
          addItem={item => addItemsToCart({ variables: { item } })}
          {...props}
        />
      )}
    </Mutation>
  );
};

export default CollectionItemContainer;
