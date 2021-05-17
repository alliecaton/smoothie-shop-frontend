import React, { Component } from 'react';
import Order from './Order'
import {Container} from 'react-bootstrap'

class Orders extends Component {
    
    state = {orders: []}
    
    componentDidMount = () => {
        return fetch('https://boiling-earth-59543.herokuapp.com/orders')
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
                <Container >
                    <div>
                        {this.renderOrders()}
                    </div>
                </Container>
        );
    }
}

export default Orders;
