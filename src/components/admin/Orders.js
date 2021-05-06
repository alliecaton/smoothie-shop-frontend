import React, { Component } from 'react';

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

    render() {
        console.log(this.state)
        return (
            <div>
                hi
            </div>
        );
    }
}

export default Orders;
