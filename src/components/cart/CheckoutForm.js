import React, { Component } from 'react';

class CheckoutForm extends Component {

    state = {
        items: this.props.items, 
        // orderType: '', // delivery or takeout
        totalPrice: this.props.totalPrice, 
        customerName: '', 
        address: '', 
        cardNumber: '', 
        cardExp: '',
        cardSecurityNum: '',
        note: ''
    }

    handleChange = (e) => {
        this.setState((prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value, 
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form>
                    <br></br>
                    <label>Please Enter Checkout Details</label><br></br>

                    {/* <input type="hidden" value={this.props.items} name="items" onChange={this.handleChange} />
                    <input type="hidden" value={this.props.totalPrice} name="totalPrice" onChange={this.handleChange} /> */}
                    
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

                    <button onClick={(e) => this.handleSubmit(e)} >Submit Order</button>

                </form >
            </div>
        );
    }
}

export default CheckoutForm;
