import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary navbar-expand-md ">
          <a href="\" className="navbar-brand">
            Indic Shopping Store{" "}
          </a>
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
              <Link to='/'>
                <a href="/" className="nav-item nav-link active">
                  Home
              </a>
              </Link>
              <Link to='\about'> <a href="/about" className="nav-item nav-link">
                About
              </a></Link>

              <a href="/" className="nav-item nav-link">
                Products
              </a>
              <Link to='/cart'>
                <a href="/cart" className="nav-item nav-link ">
                  Cart
              </a>
              </Link>

              <a href="/signin" className="nav-item nav-link active float-right">
                Sign In!
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
