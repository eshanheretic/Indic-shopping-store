import React, { Component } from 'react'
import styled from 'styled-components'
export default class Navbar extends Component {
    render() {
        return (
            <div>
            <nav class="navbar navbar-dark bg-primary navbar-expand-md ">
    <a href="\" class="navbar-brand">Indic Shopping Store</a>
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
         
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav">
            <a href="/" class="nav-item nav-link active">Home</a>
            <a href="/about" class="nav-item nav-link">About</a>
            <a href="/" class="nav-item nav-link">Products</a>
            <a href="/cart" class="nav-item nav-link ">Cart</a>
            <a href="/signin" class="nav-item nav-link active float-right">Sign In!</a>
        </div>
    </div>
</nav>
            </div>
        )
    }
}
