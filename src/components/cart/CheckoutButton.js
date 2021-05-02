import React, { Component } from 'react';
import CheckoutForm from './CheckoutForm'

class CheckoutButton extends Component {

    state = {formDisplayed: false}
    
    displayCheckoutForm = (e) => {
        this.setState({ formDisplayed: true })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.displayCheckoutForm}>Checkout</button>
                <div style={{display: this.state.formDisplayed ? 'block' : 'none' }}>
                    <CheckoutForm items={this.props.items} totalPrice={this.props.totalPrice} />
                </div>
            </div>
        );
    }
}

export default CheckoutButton;
