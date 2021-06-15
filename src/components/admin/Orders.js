import React, { Component } from 'react';
import Order from './Order'

class Orders extends Component {
    
    state = {orders: []}
    
    componentDidMount = () => {
        return fetch('http://localhost:3001/orders')
            .then(r => {
                return r.json()
            })
            .then(json => {
                this.setState({orders: json})
            })
    }

    renderOrders = () => {
        return this.state.orders.map((order) => (
            <div className="body-wrapper">
                <Order order={order} />
            </div>
        ))
    }

    render() {
        console.log('order state', this.state)
        return (
            <div>
                {this.renderOrders()}
            </div>
        );
    }
}

export default Orders;
