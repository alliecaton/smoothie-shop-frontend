import React, { Component } from 'react';
import CartList from '../components/cart/CartList'
import { connect } from 'react-redux'
import CartTotal from '../components/cart/CartTotal'
import CheckoutButton from '../components/cart/CheckoutButton'
import CheckoutForm from '../components/cart/CheckoutForm'

class CartContainer extends Component {
    render() {
        return (
            <div>
                <CartList items={this.props.items} />
                <CartTotal totalPrice={this.props.totalPrice} />
                <CheckoutButton items={this.props.items} totalPrice={this.props.totalPrice} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.cartReducer.items,
    totalPrice: state.smoothieReducer.smoothiePrice
})

const mapDispatchToProps = dispatch => ({
        // fetchIngredients: () => dispatch(fetchIngredients()),
        // addSmoothieIngredient: (ingredient) => dispatch(addSmoothieIngredient(ingredient)), 
})

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
