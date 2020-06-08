import React, { Component } from "react";
import Product from "./Product";
import { ProductConsumer } from "../context";
export default class Productlist extends Component {
  render() {
    return (
      <div className='row'>
        <ProductConsumer>
          {(value) => {
            return value.storeProducts.map((product) => (
              <Product key={product.id} product={product} />
            ));
          }}
        </ProductConsumer>
      </div>
    );
  }
}
