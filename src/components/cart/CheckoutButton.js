import React, { Component } from 'react';
import CheckoutForm from './CheckoutForm'
import Button from 'react-bootstrap/Button';

class CheckoutButton extends Component {

    state = {formDisplayed: false}
    
    displayCheckoutForm = (e) => {
        this.setState({ formDisplayed: true })
    }
    
    render() {
        return (
            <div>
                <Button variant="warning" onClick={this.displayCheckoutForm}>Checkout</Button>{' '}
                <div style={{display: this.state.formDisplayed ? 'block' : 'none' }}>
                    <CheckoutForm items={this.props.items} totalPrice={this.props.totalPrice} />
                </div>
            </div>
        );
    }
}

export default CheckoutButton;
