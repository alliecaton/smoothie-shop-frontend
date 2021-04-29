import React, { Component } from 'react';
import Smoothies from '../components/smoothie/Smoothies'
import SmoothieCreator from '../components/smoothie/SmoothieCreator'

class SmoothieContainer extends Component {
    render() {
        return (
            <div>
                <Smoothies />
                <SmoothieCreator />
            </div>
        );
    }
}

export default SmoothieContainer;
