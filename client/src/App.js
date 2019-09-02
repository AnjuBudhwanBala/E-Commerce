import React, { useEffect, useCallback, lazy, Suspense } from 'react';
import Spinner from './components/spinner/spinner';
import { GlobalStyle } from './global.style';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/header';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/userSelector';

const Homepage = lazy(() => import('./pages/homepage/homepage'));
const ShopPage = lazy(() => import('./pages/shop/shopPage'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkoutPage'));
const SignInSignUp = lazy(() =>
  import('./pages/sign-in-sign-up/sign-in-sign-up')
);

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
        <Suspense fallback={<Spinner />}>
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
          <Route exact path="/" component={Homepage} />
        </Suspense>
      </Switch>
    </>
  );
}

export default App;
