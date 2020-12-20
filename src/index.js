import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App/App.js';
import {Provider} from 'react-redux';
import store from "./Store/Store.js";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
