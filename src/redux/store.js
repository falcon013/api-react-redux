import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";
const middleware = [logger,thunk]


const store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(...middleware)))

export  default store
