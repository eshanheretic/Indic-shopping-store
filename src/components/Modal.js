import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container text-capitalize">
                  <div className="row">
                    <div id='modal' className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize">
                      <h5>Item added to Cart!</h5>
                      <img src={img} className='img-fluid' alt='product'/>
                      <h5>{title}</h5>
                      <h5 className='text-muted'>Price: ₹{price}</h5>
                      <Link to='/'>
                          <button 
                          className='btn btn-primary m-1'
                          onClick={()=>closeModal()}
                          >
                            continue shopping
                          </button>
                          
                      </Link>
                      <Link to='/cart'>
                          <button 
                          className='btn btn-danger m-1'
                          onClick={()=>closeModal()}
                          >
                            Go to the cart
                          </button>
                          
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.4);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:rgb(230,230,203);
}
`;
