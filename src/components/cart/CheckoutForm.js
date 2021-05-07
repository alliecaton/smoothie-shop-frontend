import React, { Component } from 'react';
import { connect } from 'react-redux'
import { checkout, emptyCart } from '../../actions/cartActions'
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap'

class CheckoutForm extends Component {

    state = {
        items: this.props.items, 
        totalPrice: this.props.totalPrice, 
        customerName: '', 
        address: '', 
        // cardNumber: '', 
        // cardExp: '',
        // cardSecurityNum: '',
        note: '', 
        message: ''
    }

    handleChange = (e) => {
        this.setState((prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value, 
        }))
    }
 
    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.items.length > 0 && this.state.customerName !=='' && this.setState.address !== '') {
            this.props.checkout(this.state)
            this.props.emptyCart()
            this.setState({message: "Your order is on the way!"})
        } else {
            this.setState({message: "Please fill out all required fields"})
        }
    }

    render() {
        console.log(this.state.totalPrice)
        return (
            <Container >
            <div >
                <br></br>
                <h1>{this.state.message}</h1>
                    <form className="checkout-form">
                        <label>Please Enter Checkout Details</label><br></br>
                    <Row>
                        <br></br>
                        <Col>
                            <label htmlFor="customerName">* Name:</label><br></br>
                            <input id="customerName" type="text" name="customerName" onChange={this.handleChange} /><br></br>

                            <label htmlFor="address">* Address:</label><br></br>
                            <textarea id="address" type="textarea" name="address" onChange={this.handleChange} /><br></br>

                            <label htmlFor="note">Customer Note:</label><br></br>
                            <input id="note" type="text" name="note" onChange={this.handleChange} /><br></br>
                        </Col>
                        <Col>
                            <label htmlFor="cardnum">* Card Number:</label>
                            <input id="cardnum" type="text" name="cardNumber" onChange={this.handleChange} /><br></br>
                            <label htmlFor="cardexp">* Expiration Date (MM/YY):</label>
                            <input id="cardexp" type="text" name="cardExp" onChange={this.handleChange} /><br></br>

                            <label htmlFor="cardsec">* Security Code:</label>
                            <input id="cardsec" type="password" name="cardSecurityNum" onChange={this.handleChange} /><br></br>
                            <br></br>
                            <Button variant="success" onClick={(e) => this.handleSubmit(e)} >Submit Order</Button>
                        </Col>

                    </Row>

                    </form >
            </div>
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    checkout: (data) => dispatch(checkout(data)),
    emptyCart: () => dispatch(emptyCart())
})

export default connect(null, mapDispatchToProps)(CheckoutForm);
