import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDollarSign, faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";

const ProductComponent = () => {
    const { addProductIntoCart,allProducts, cart, removeProductFromCart} = useContext(AppContext);

  const getButton = (product) => { 
      let store = '';
      if(cart && cart.length > 0) {
        store = cart.filter(item => { 
             return product.id === item.id;
          })
      }

      if(store && store.length > 0 && store[0].quantity > 0) {
          return (
            <div className="btn-outline-info form-control d-flex justify-content-between">
                <span onClick={e => { e.preventDefault(); removeProductFromCart(product)}} className="adding-subtraction-button"><FontAwesomeIcon icon={faMinus} /></span>
                <span> {store[0].quantity} </span>
                <span onClick={e => { e.preventDefault();addProductIntoCart(store[0]) }} className="adding-subtraction-button"><FontAwesomeIcon icon={faPlus} /></span>
            </div>
          )
      } else {
          return (
          <a href={"!#"} onClick={e => { e.preventDefault(); addProductIntoCart(product)}} className="btn btn-primary form-control">Add to Cart</a>
          )
      }
      
  }

    return (
        <>
           <div className="container">
              <div className="row">
              {allProducts && allProducts.length > 0 && (
                allProducts.map((product, i) => {
                   return (
                       <div key={i} className="col">
                            <div className="card mt-5 card-body" style={{width:"18rem",height:"500px"}}>
                                <img height="200px" width="100%" className="card-img-top" src={product.image} alt="product"/>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <h4 className="text-center text-danger"><strong> <FontAwesomeIcon icon={faDollarSign} /> </strong>{product.price}</h4>
                                    {getButton(product) }
                                </div>
                            </div>
                       </div>
                   )
               })
           )}
              </div>
           </div>
        </>
    );
};

export default ProductComponent;