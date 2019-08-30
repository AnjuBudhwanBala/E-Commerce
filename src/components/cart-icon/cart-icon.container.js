import React from 'react';
<<<<<<< HEAD
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

=======
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
>>>>>>> f8c8fbbc9c03171e814850c581935175cb830815
import CartIcon from './cart-icon.component';

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

<<<<<<< HEAD
const CartIconContainer = () => {
  return (
    <Mutation mutation={TOGGLE_CART_HIDDEN}>
      {toggleCartHidden => <CartIcon toggleCartHidden={toggleCartHidden} />}
    </Mutation>
  );
};
=======
const CartIconContainer = () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {toggleCartHidden => (
      <CartIcon toggleCartHidden={toggleCartHidden}></CartIcon>
    )}
  </Mutation>
);
>>>>>>> f8c8fbbc9c03171e814850c581935175cb830815

export default CartIconContainer;
