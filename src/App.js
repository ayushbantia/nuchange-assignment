import axios from "axios";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Header";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders";
import Data from "./Data";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
  const [{ user, json }, dispatch] = useStateValue();

  const promise = loadStripe(
    "pk_test_51I6xrQEFDwnxcCUZyRVfGfyD00mG9f9tb3CGeUdpg25zv2oOQmd1yeocKM08wNkAo4HUot4LaMbX9leTUxxygWYL00nXGqGg9j"
  );

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is : ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // console.log(user);
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route strict path="/data">
            <Data />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

          {/*  */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
