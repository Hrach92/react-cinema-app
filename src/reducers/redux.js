import { combineReducers, legacy_createStore } from "redux";
import HomeReducer from "./HomeReducer";
import SearchReducer from "./SearchReducer";

const reducers = combineReducers({
    homePage:HomeReducer,
    search:SearchReducer
})
const store = legacy_createStore(reducers)
export default store