import React, { Component } from 'react';
import CartList from '../components/cart/CartList.js'
import { connect } from 'react-redux'
import CartTotal from '../components/cart/CartTotal.js'

class CartContainer extends Component {
    render() {
        return (
            <div>
                <CartList items={this.props.items} />
                <CartTotal totalPrice={this.props.totalPrice} />
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
