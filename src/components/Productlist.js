import React, { Component } from "react";
import Product from "./Product";
import { ProductConsumer } from "../context";

export default class Productlist extends Component {
  render() {
    return (
      <div className="container">
        <ProductConsumer>
          {(value) => {
            const { storeProducts } = value;
            return (
              <React.Fragment>
                <div className="row">
                  <input
                    style={{ width: "50%" }}
                    type="text"
                    className="mx-auto p-2 my-5"
                    placeholder="Enter the name of phone you need to find"
                    onChange={(e) => value.searchProducts(e)}
                  />
                </div>
                <div className="row">
                  {storeProducts.map((product) => (
                    <Product key={product.id} product={product} />
                  ))}
                </div>
              </React.Fragment>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
