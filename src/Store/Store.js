import {createStore, combineReducers} from "redux";
import itemReducer from "./Reducers/ItemReducer.js";
import loginReducer from "./Reducers/LoginReducer.js";

const store = createStore(combineReducers({
    items: itemReducer,
    login: loginReducer
}));

export default store;