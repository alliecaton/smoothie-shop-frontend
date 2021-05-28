import React, { Component } from 'react';
import Product from '../cart/CartItem.js'
import StatusCheckbox from './StatusCheckbox'

class Order extends Component {
    
    renderSmoothie = () => {
        return this.props.order.products.map((product) => (
            <div key={product.id}>
                {product.id}<Product item={product} />
            </div>
        ))
    }
    
    render() {
        return (
            <div>
                <StatusCheckbox orderId={this.props.order.id}/>
                <div >{` ${this.props.order.id} ${this.props.order.address} ${this.props.order.total_price}`} </div>
                {this.renderSmoothie()}
                {/* // ingredients */}
                {/* // status */}
            </div>
        );
    }
}

export default Order;
