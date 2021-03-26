import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary navbar-expand-md ">
          <Link
            to="/"
            className="nav-item nav-link "
            style={{ color: "white" }}
          >
            Indic Shopping Store
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link active">
                Home
              </Link>

              <Link to="/cart" className="nav-item nav-link ">
                Cart
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
