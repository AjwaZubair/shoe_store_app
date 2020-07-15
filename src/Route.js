import React from 'react';
import { BrowserRouter as Router,Switch, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import ProductItem from './components/ProductItems';
import NavBar from './components/NavBar';


function RouteConfig() {
  return (
    <div>
      <BrowserRouter>
          <NavBar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route exact path="/product" component={Product}/>
                <Route path="/product/:id" component={ProductItem}/>
                <Route path="*" component={()=><h2>404 Not Found</h2>}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default RouteConfig;