import {combineReducers} from "redux";
import toggleReducer from "./toggleReducer";
import productsReducer from "./productsReducer";


const rootReducer = combineReducers({
    toggle : toggleReducer,
    products: productsReducer
})
export  default rootReducer