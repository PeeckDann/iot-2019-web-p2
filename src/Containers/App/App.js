import React from "react";

import "./App.css"

import Header from "./Header/Header.js";
import Home from "../Home/Home.js";
import Footer from "./Footer/Footer.js";

const App = () => {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default App;