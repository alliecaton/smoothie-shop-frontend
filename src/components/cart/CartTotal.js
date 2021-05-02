import React, { Component } from 'react';

class CartTotal extends Component {
    render() {
        return (
            <div>
                <h5> Checkout Total: {this.props.totalPrice} </h5>
            </div>
        );
    }
}

export default CartTotal;
