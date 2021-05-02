import React, { Component } from 'react';

class CheckoutForm extends Component {

    constructor(props) {
        super(props);
        this.setState({
            items: this.props.items, 
            orderType: '', // delivery or takeout
            totalPrice: this.props.totalPrice, 
            customerName: '', 
            address: '', 
            cardNumber: '', 
            cardExp: '',
            cardSecurityNum: '',
            note: ''
        })
    }

    render() {
        return (
            <div>
                <form>
                    <br></br>
                    <label>Please Enter Checkout Details</label><br></br>
                    
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" name="name" /><br></br>

                    <label htmlFor="address">Address:</label>
                    <textarea id="address" type="textarea" name="address" /><br></br>

                    <label htmlFor="cardnum">Card Number:</label>
                    <input id="cardnum" type="text" name="cardnum" /><br></br>

                    <label htmlFor="cardexp">Expiration Date (MM/YY):</label>
                    <input id="cardexp" type="text" name="cardexp" /><br></br>

                    <label htmlFor="cardsec">Security Code:</label>
                    <input id="cardsec" type="text" name="cardsec" /><br></br>

                    <label htmlFor="note">Customer Note:</label>
                    <input id="note" type="text" name="note" /><br></br>

                    <input type="Submit" value="Submit Order" />

                </form>
            </div>
        );
    }
}

export default CheckoutForm;
