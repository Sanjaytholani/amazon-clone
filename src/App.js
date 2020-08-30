import React, { useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import reducer from "./reducer";
import { StateContext } from "./Context";
import Checkout from "./Checkout";
function App() {
  const initial = {
    basket: [],
    user: null,
  };
  return (
    <StateContext.Provider value={useReducer(reducer, initial)}>
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route exact path="/login">
              <h1>Sign-in</h1>
            </Route>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </StateContext.Provider>
  );
}

export default App;
