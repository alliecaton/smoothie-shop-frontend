import React, { Component } from 'react';
import Order from './Order'
import {Container} from 'react-bootstrap'

class CompletedOrders extends Component {
    renderOrders = () => {
        return this.props.orders.map((order) => (
            <div className="body-wrapper">
                Order: {order.id}
                <Order order={order} />
            </div>
        ))
    }

    render() {
        console.log('order state', this.props)
            return (
                <Container >
                    <h1>Completed Orders</h1>
                    <div>
                        {this.renderOrders()}
                    </div>
                </Container>
        );
    }
}

export default CompletedOrders;
