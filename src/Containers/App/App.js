import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css"

import Header from "./Header/Header.js";
import Home from "../Home/Home.js";
import Catalog from "../Catalog/Catalog.js";
import Item from "../Item/Item.js";
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
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;