import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './Header/Header';
import Home from '../Home/Home';
import Catalog from '../Catalog/Catalog';
import Item from '../Item/Item';
import Cart from '../Cart/Cart';
import Checkout from '../Checkout/Checkout';
import Success from '../Success/Success';
import Footer from './Footer/Footer';

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
