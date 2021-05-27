import React, { Component } from 'react';
import OpenOrders from './OpenOrders'

class adminContainer extends Component {
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
        let completedOrders = []
        let openOrders = this.state.orders.map((order) => {
                if (order.status === "open") {
                    openOrders.push(order)
                } else {
                    completedOrders.push(order)
                }
            }) 
            return (
                <div className="body-wrapper">
                    <OpenOrders orders={openOrders} />
                </div>
            )
    }
    
    render() {
        return (
            <div className="body-wrapper">
                {this.renderOrders()}
            </div>
        );
    }
}

export default adminContainer;
