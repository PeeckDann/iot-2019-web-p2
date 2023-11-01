import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./Header/Header.js";
import Home from "../Home/Home.js";
import Catalog from "../Catalog/Catalog.js";
import Item from "../Item/Item.js";
import Cart from "../Cart/Cart.js";
import Checkout from "../Checkout/Checkout.js";
import Success from "../Success/Success.js";
import Footer from "./Footer/Footer.js";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/catalog" element={<Catalog />} />
        <Route exact path="/item/:id" element={<Item />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
