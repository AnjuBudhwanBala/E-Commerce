import React from 'react';
import './cartDropDown.styles.scss';
import CustomButton from '../customButton/customButton';
import CartItem from '../cartItem/cartItem';
import { useSelector, shallowEqual } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cartSelector';

const CartDropDown = ({ history }) => {
  const itemsInCart = useSelector(selectCartItems, shallowEqual);
  console.log(itemsInCart);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {itemsInCart.length ? (
          itemsInCart.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => history.push('/checkout')}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropDown);
