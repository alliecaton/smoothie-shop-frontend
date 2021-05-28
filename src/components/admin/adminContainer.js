import React, { Component } from 'react';
import OpenOrders from './OpenOrders'
import CompletedOrders from './CompletedOrders'

class adminContainer extends Component {
    state = {open: [], completed: [], allOrders: []}
    
    componentDidMount = () => {
        return fetch('http://localhost:3001/orders')
            .then(r => {
                return r.json()
            })
            .then(json => {
                console.log('json', json)
                this.setState({allOrders: json})
                this.assignOrders()
            })
    }

    assignOrders = () => {
        this.state.allOrders.map((order) => {
                if (order.status === "open") {
                    this.setState(prevState => ({ 
                        ...prevState, 
                        open: [...prevState.open, order]
                    }))
                } else {
                    this.setState(prevState => ({ 
                        ...prevState, 
                        completed: [...prevState.completed, order]
                    })) 
                }
            }) 

    }


    
    render() {
        return (
            <div className="body-wrapper">
                    <OpenOrders orders={this.state.open} />
                    <CompletedOrders orders={this.state.completed} />
            </div>
        );
    }
}

export default adminContainer;
