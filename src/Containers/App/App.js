import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css"

import Header from "./Header/Header.js";
import Home from "../Home/Home.js";
import Catalog from "../Catalog/Catalog.js";
import Item from "../Item/Item.js";
import Cart from "../Cart/Cart.js";
import Footer from "./Footer/Footer.js";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/catalog">
                    <Catalog/>
                </Route>
                <Route exact path="/item/:id">
                    <Item/>
                </Route>
                <Route exact path="/cart">
                    <Cart/>
                </Route>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;