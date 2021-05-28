import React, { Component } from 'react';
import humps from 'humps';

class StatusCheckbox extends Component {
    
    state= { checked: null, status: 'open' }

    handleChange = (e) => {
        console.log('hit')
        this.setState({checked: true, status: 'completed'})
    }

    componentDidUpdate = () => {
        fetch (`http://localhost:3001/orders/${this.props.orderId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(humps.decamelizeKeys({order: {status: this.state.status}}))
        })
            // .then(resp => resp.json())
            // .then(json => {
            // })
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
