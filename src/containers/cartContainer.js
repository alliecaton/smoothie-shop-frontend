import React, { Component } from 'react';
import CartList from '../components/cart/CartList'
import { connect } from 'react-redux'
import CartTotal from '../components/cart/CartTotal'
import CheckoutButton from '../components/cart/CheckoutButton'
import { Container } from 'react-bootstrap'
import { removeCartItem } from '../actions/cartActions.js'


class CartContainer extends Component {

    render() {
        return (
            <Container> 
                <div className="body-wrapper">
                    <div className="inner-wrapper">
                        <div>
                            <CartList removeCartItem={this.props.removeCartItem} items={this.props.items} />
                            <CartTotal cartTotal={this.props.cartTotal} />
                            <CheckoutButton items={this.props.items} totalPrice={this.props.cartTotal} />
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.cartReducer.cartItems,
    ingredientIds: state.cartReducer.cartItems.ingredientIds,
    cartTotal: state.cartReducer.cartTotal
})

const mapDispatchToProps = dispatch => ({
    removeCartItem: (id) => dispatch(removeCartItem(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
