import React, {useContext, useEffect, useState} from "react";
import NavbarComponent from "../navbar/navbarComponent";
import AppContext from "../contexts/AppContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDollarSign, faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import OrderPlaceModal from "../modal/OrderPlaceModal";

const CartComponent = () => {

    const { cart, addProductIntoCart,removeProductFromCart, deleteProductFromCart, clearCart} = useContext(AppContext);
    const [totalAmount, setTotalAmount] = useState(0);
    const [orderPlaceModal, setOrderPlaceModal] = useState(false);

    const getTotalAmount = () => { 
        let total = 0;
        cart.forEach(item => { 
            total += item.quantity * item.price;
        });
       total = total.toFixed(2);
        setTotalAmount(total);
    }

    useEffect(() => { 
        getTotalAmount();
    }, [cart]);

    const checkout = () => {
        setOrderPlaceModal(!orderPlaceModal);
         clearCart();
    }

    return (
        <>
            <NavbarComponent/>
            <div className="container">
                {cart.length <= 0 && (
                    <h4>Continue your shopping..</h4>
                )}
                {totalAmount && totalAmount > 0 && (
                    <div className="d-flex justify-content-end mt-5"> 
                        <h4 className="text-success"><strong>Total: <FontAwesomeIcon icon={faDollarSign}/>
                            </strong>&nbsp;{totalAmount}
                        </h4>
                        <button onClick={e => { e.preventDefault();clearCart()}}  className="btn btn-primary ml-3">Clear Cart</button>
                        <button onClick={e => { e.preventDefault();checkout()}}  className="btn btn-info ml-3">Checkout</button>
                    </div>
                )}
                {cart && cart.length > 0 && (
                    cart.map((product,i) => {
                        return (
                            <div key={i} className="card mt-5">
                                <div className="card-horizontal">
                                    <div className="img-square-wrapper">
                                        <img className="img-fluid" height="150px" width="200px" src={product.image} alt="Product Image"/>
                                    </div>
                                    <div className="card-body mr-5">
                                        <div className="d-flex justify-content-between">
                                            <h4 className="card-title">{product.title}</h4>
                                            <button onClick={e => { e.preventDefault();deleteProductFromCart(product)}} style={{height:"50px"}} className="btn btn-outline-danger">Delete</button>
                                        </div>
                                        <p className="card-text">{product.description}</p>
                                        <div className="d-flex justify-content-between">
                                            <h4 className="text-danger"><strong> <FontAwesomeIcon icon={faDollarSign}/>
                                                </strong>{product.price}
                                            </h4>
                                            <h5 className="text-primary">Subtotal: 
                                                <strong><FontAwesomeIcon icon={faDollarSign}/>
                                                </strong>&nbsp; {product.price * product.quantity}
                                            </h5>
                                        </div>
                                        <br/>
                                        <div className="d-flex justify-content-between" style={{width: "100px", backgroundColor: "bisque"}}>
                                        <span onClick={e => { e.preventDefault();removeProductFromCart(product)}} className="adding-subtraction-button"><FontAwesomeIcon icon={faMinus} /></span>
                                            <span> {product.quantity} </span>
                                            <span onClick={e => { e.preventDefault(); addProductIntoCart(product) }} className="adding-subtraction-button"><FontAwesomeIcon icon={faPlus} /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
            {orderPlaceModal && (
                <OrderPlaceModal /> 
            )}
            
        </>
    )
};

export default CartComponent;