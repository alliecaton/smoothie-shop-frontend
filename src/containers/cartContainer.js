import React, { Component } from 'react';
import CartList from '../components/cart/CartList.js'

class CartContainer extends Component {
    render() {
        return (
            <div>
                Cart Container
                <CartList />
            </div>
        );
    }
}

export default CartContainer;
