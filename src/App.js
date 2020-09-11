import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Footer from "./Footer";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useContext } from "react";
import { StateContext } from "./Context";
import "react-toastify/dist/ReactToastify.css";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
function App() {
  const [{ user }, dispatch] = useContext(StateContext);
  const promise = loadStripe(
    "pk_test_51HOn8DAVBwRRatg2hCn2bvEWDqgflc9lm2OGakC0T0BvRdg38EgqLNSBeAWLgkh5oU1bDoDZLv9xyoTSLs6AMw4U00nEMd5e8z"
  );
  useEffect(() => {
    const unsbscribe = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        dispatch({
          type: "SET_USER",
          user: authuser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsbscribe();
    };
  }, []);
  console.log(user);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/orders">
            <Orders />
          </Route>
          <Route exact path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
