import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shopPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
