import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Navbar from './component/navbar';
import Product from './component/product';
import ProductDetails from './component/productdetails';
import PageNotFound  from './component/404';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Product} exact></Route>
        <Route path="/details" component={ProductDetails}></Route>
        <Route path="*" component={PageNotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
