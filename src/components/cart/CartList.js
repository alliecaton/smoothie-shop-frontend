import React, { Component } from 'react';
import CartItem from './CartItem'

class CartList extends Component {
    render() {

        return (
            <div>
                <CartItem item={'this is an item'}/>
            </div>
        );
    }
}

export default CartList;
