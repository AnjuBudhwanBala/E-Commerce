import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shopPage';
import Header from './components/header/header';
import SignInSignUp from './pages/signIn-SignUp/signIn-SignUp';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
