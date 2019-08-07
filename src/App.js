import React, { useEffect, useCallback } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shopPage';
import Header from './components/header/header';
import SignInSignUp from './pages/signIn-signUp/signIn-signUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

function App() {
  const dispatch = useDispatch(() => dispatch);

  const setUser = useCallback(user => dispatch(setCurrentUser(user)), [
    dispatch
  ]);
  //currentUser from redux
  const currentUser = useSelector(state => state.user.currentUser);

  useEffect(() => {
    //get current signin User
    const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapshot => {
          setUser({ id: snapshot.id, ...snapshot.data() });
        });
      }

      setUser(user);
      return unsubscribeFromAuth;
    });
  }, [setUser]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUp />)}
        />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
