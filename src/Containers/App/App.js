import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {useSelector} from 'react-redux';

import "./App.css"

import Header from "./Header/Header.js";
import Home from "../Home/Home.js";
import Catalog from "../Catalog/Catalog.js";
import Item from "../Item/Item.js";
import Cart from "../Cart/Cart.js";
import Checkout from "../Checkout/Checkout.js";
import Success from "../Success/Success.js";
import SignUp from "../SignUp/SignUp.js";
import Login from "../Login/Login.js";
import Footer from "./Footer/Footer.js";

const App = () => {

    const isLogged = useSelector(state => state.login);

    return (
        <BrowserRouter>
            {isLogged ? <Header /> : null}
            <Switch>
            <Route path='/signup'>
                <SignUp />
            </Route>
            <Route path='/login'>
                <Login />
            </Route>
            {pages.map(({ path, page }) => {
                if (isLogged) {
                return <Route key={path} exact path={path} component={page} />
                }
                else {
                return <Redirect key={path} to='/login' />
                }
            })}
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

const pages = [
    {'path': '/', 'page': Home },
    {'path': '/catalog', 'page': Catalog},
    {'path': '/item/:id', 'page': Item},
    {'path': '/cart', 'page': Cart},
    {'path': '/checkout', 'page': Checkout},
    {'path': '/success', 'page': Success}
  ]  

export default App;