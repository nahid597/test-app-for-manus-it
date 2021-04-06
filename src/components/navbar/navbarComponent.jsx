import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

import manushTech from '../../assets/images/manushTech.png'
import AppContext from "../contexts/AppContext";
import {Link} from "react-router-dom";


const NavbarComponent = () => {

    const { cart} = useContext(AppContext);

    return(
        <>
            <nav className="navbar navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                    <img src={manushTech} width="200" height="50" className="d-inline-block align-top" alt="" />
                </Link>
                {cart && cart.length > 0 && (
                    <div className="form-inline my-2 my-lg-0 mr-5">
                        <Link to="/cart">
                            <button className="btn btn-outline-warning my-2 my-sm-0" type="submit"><FontAwesomeIcon
                                icon={faShoppingCart}/> Cart <span
                                className="badge badge-light"
                                style={{backgroundColor: 'aquamarine'}}>{cart.length}</span></button>
                        </Link>
                    </div>
                )}
          </nav>
        </>
    )
};

export default NavbarComponent;