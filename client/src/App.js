import React, { useEffect, useCallback } from 'react';

import { GlobalStyle } from './global.style';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shopPage';
import CheckoutPage from './pages/checkout/checkoutPage';
import Header from './components/header/header';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/userSelector';

function App() {
  //currentUser from redux
  const currentUser = useSelector(selectCurrentUser, shallowEqual);
  const dispatch = useDispatch();

  const checkSessionOfUser = useCallback(() => {
    dispatch(checkUserSession());
  }, [dispatch]);
  useEffect(() => {
    checkSessionOfUser();
  }, [checkSessionOfUser]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUp />)}
        />
        <Route path="/" component={Homepage} />
      </Switch>
    </>
  );
}

export default App;
