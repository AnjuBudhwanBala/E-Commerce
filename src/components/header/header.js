import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import { useSelector, shallowEqual } from 'react-redux';
import CartIcon from '../cartIcon/cartIcon';
import CartDropDown from '../cartDropDown/cartDropDown';
import { selectCurrentUser } from '../../redux/user/userSelector';
import { selectCartHidden } from '../../redux/cart/cartSelector';

const Header = () => {
  //currentUser from redux

  const hidden = useSelector(selectCartHidden, shallowEqual);
  const currentUser = useSelector(selectCurrentUser, shallowEqual);

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/conatct">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

export default Header;
