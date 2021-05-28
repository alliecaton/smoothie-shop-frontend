import React, { Component } from 'react';
import Product from '../cart/CartItem.js'
import StatusCheckbox from './StatusCheckbox'

class Order extends Component {
    
    renderSmoothie = () => {
        return this.props.order.products.map((product) => (
            <div key={product.id}>
                <Product item={product} />
            </div>
        ))
    }
    
    render() {
        let checkbox
        if (this.props.order.status === "open") {
            checkbox = <StatusCheckbox orderId={this.props.order.id}/>
        }

        return (
            <div>
                {checkbox}
                <div><strong>Customer Name:</strong> {this.props.order.customer_name} </div>
                <div><strong>Address:</strong> {this.props.order.address} </div>
                <div><strong>Price:</strong> {this.props.order.total_price}</div>
                <div><strong>Note:</strong> {this.props.order.note} </div>
                <div><strong>Status: </strong>{this.props.order.status}</div>
                {this.renderSmoothie()}
            </div>
        );
    }
}

export default Order;
