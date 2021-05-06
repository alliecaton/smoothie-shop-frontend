import React, { Component } from 'react';
import Orders from './Orders'

class adminContainer extends Component {
    render() {
        console.log('admin container')
        return (
            <div>
                <Orders />
            </div>
        );
    }
}

export default adminContainer;
