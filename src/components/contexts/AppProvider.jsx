import React, {Component} from 'react';
import AppContext from './AppContext';

class   AppProvider extends Component {
    state = {
        numberOfProducts: 0,
        allProducts: [],
        cart: []
    };

    addProductIntoCart = (product) => {

        const existsProduct = this.state.cart.every(item => {
            return item.id !== product.id;
        });

        let selectedProduct
        if (existsProduct) {
            selectedProduct  = this.state.allProducts.filter(item => {
                return item.id === product.id;
            });

            selectedProduct[0] = {
                ...selectedProduct[0],
                quantity: 1
            }

            this.setState({cart: [...this.state.cart,...selectedProduct]});
        } else {
            var storeProduct = {};
            this.state.cart.forEach(item => {
                if (product.id === item.id) {
                    item = {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    storeProduct = item;
                }
            });
            //this.setState({cart: [...this.state.cart, ...storeProduct]});
            for (var i = 0; i < this.state.cart.length; i++) {
                if (storeProduct.id === this.state.cart[i].id) {
                    const arr = this.state.cart.slice();
                    arr[i] = storeProduct;
                    this.setState({...this.state, cart:arr});
                }
            }
        }
    }

    removeProductFromCart = (product) => {
            var storeProduct = {};
            this.state.cart.forEach(item => {
                if (product.id === item.id) {
                    
                    if(item.quantity > 0) {
                        item = {
                            ...item,
                            quantity: item.quantity - 1
                        }
                    }
                    
                    storeProduct = item;
                }
            });
            
            for (var i = 0; i < this.state.cart.length; i++) {
                if (storeProduct.id === this.state.cart[i].id) {
                    const arr = this.state.cart.slice();
                    if(storeProduct.quantity > 0) {
                        arr[i] = storeProduct;
                    } else {
                        arr.splice(i, 1);
                    }
                    
                    this.setState({...this.state, cart:arr});
                }
            }
    }

    deleteProductFromCart = (product) => {
        alert('Are you sure? You want to delete your product');

        for (var i = 0; i < this.state.cart.length; i++) {
            if (product.id === this.state.cart[i].id) {
                const arr = this.state.cart.slice();
                arr.splice(i, 1);
                this.setState({...this.state, cart:arr});
            }
        } 
    }

    clearCart = () => {
        this.setState({cart: []});
    }

    setAllProducts = (products) => {
        this.setState({allProducts: products})
    }

    render() {
        const {children} = this.props;
        return (
            <AppContext.Provider value={{
                ...this.state,
                addProductIntoCart: this.addProductIntoCart,
                setAllProducts: this.setAllProducts,
                removeProductFromCart: this.removeProductFromCart,
                deleteProductFromCart: this.deleteProductFromCart,
                clearCart: this.clearCart
            }}>
                {children}
            </AppContext.Provider>
        );
    }
}

export default AppProvider;
