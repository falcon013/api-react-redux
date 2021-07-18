import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import {Provider} from "react-redux";
import store from "./redux/store";
import Toggle from "./components/Toggle";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Toggle/>
                    <Switch>
                        <Route path="/" exact component={ProductListing}/>
                        <Route path="/product/:productId" component={ProductDetails}/>
                        <Route>404 Not Found!</Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
