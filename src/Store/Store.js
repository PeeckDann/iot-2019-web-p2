import {createStore} from "redux";
import itemReducer from "./Reducers/Reducer.js";

const store = createStore(itemReducer);

export default store;