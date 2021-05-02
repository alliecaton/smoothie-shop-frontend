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

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <br></br>
                    <label>Please Enter Checkout Details</label><br></br>
                    
                    <label htmlFor="customerName">Name:</label>
                    <input id="customerName" type="text" name="customerName" onChange={this.handleChange} /><br></br>

                    <label htmlFor="address">Address:</label>
                    <textarea id="address" type="textarea" name="address" onChange={this.handleChange} /><br></br>

                    <label htmlFor="cardnum">Card Number:</label>
                    <input id="cardnum" type="text" name="cardNumber" onChange={this.handleChange} /><br></br>

                    <label htmlFor="cardexp">Expiration Date (MM/YY):</label>
                    <input id="cardexp" type="text" name="cardExp" onChange={this.handleChange} /><br></br>

                    <label htmlFor="cardsec">Security Code:</label>
                    <input id="cardsec" type="text" name="cardSecurityNum" onChange={this.handleChange} /><br></br>

                    <label htmlFor="note">Customer Note:</label>
                    <input id="note" type="text" name="note" onChange={this.handleChange} /><br></br>

                    <input type="Submit" value="Submit Order" />

                </form>
            </div>
        );
    }
}

export default CheckoutForm;
