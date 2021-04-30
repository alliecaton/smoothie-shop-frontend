import React, { Component } from 'react';
import CartItem from './CartItem'

class CartList extends Component {

    renderItems = () => {
        return this.props.items.map((item) => (
            <li key={item.id}><CartItem item={item} key={item.id} /></li>
        ))
    }

    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        );
    }
}

export default CartList;
