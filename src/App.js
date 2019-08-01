import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shopPage';
import Header from './components/header/header';
import SignInSignUp from './pages/signIn-SignUp/signIn-SignUp';
import { auth } from './firebase/firebase.utils';

function App() {
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    //get current signin User
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      return unsubscribeFromAuth;
    });
  }, []);
  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
