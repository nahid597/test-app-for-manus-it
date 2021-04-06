import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import CartComponent from "./components/cart/CartComponent";
import HomeComponent from "./components/Home/HomeComponent";

export default (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={HomeComponent}/>
            <Route exact path="/cart" component={CartComponent}/>
        </Switch>
    </HashRouter>
);
