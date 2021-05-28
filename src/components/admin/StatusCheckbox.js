import React, { Component } from 'react';
import humps from 'humps';

class StatusCheckbox extends Component {
    
    state= { checked: false, status: 'open' }

    handleChange = (e) => {
        console.log('hit')
        this.setState({checked: true, status: 'completed'})
        this.props.reRender()
    }

    componentDidUpdate = () => {
        fetch (`http://localhost:3001/orders/${this.props.orderId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(humps.decamelizeKeys({order: {status: this.state.status}}))
        })
    }

    
    render() {
        return (
            <div>
                <form>
                <input value={this.state.checked} type="checkbox" onChange={(e) => {this.handleChange(e)}} />
                </form>
            </div>


        );
    }
}

export default StatusCheckbox;
