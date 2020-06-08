import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details";
import Productlist from "./components/Productlist";
import Default from "./components/Default";
import Modal from "./components/Modal";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/" exact component={Productlist} />
          <Route path="/details" component={Details} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}
