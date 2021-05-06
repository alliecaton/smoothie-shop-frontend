import React, { Component } from 'react';

class Order extends Component {
    render() {
        console.log(this.props.order)
        return (
            <div>
                {this.props.order.id}
            </div>
        );
    }
}

export default Order;
