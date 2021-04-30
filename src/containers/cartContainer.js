import React, { Component } from 'react';
import CartList from '../components/cart/CartList.js'
import { connect } from 'react-redux'

class CartContainer extends Component {
    render() {
        return (
            <div>
                Cart Container
                <CartList />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.cartReducer.items,
})

const mapDispatchToProps = dispatch => ({
        // fetchIngredients: () => dispatch(fetchIngredients()),
        // addSmoothieIngredient: (ingredient) => dispatch(addSmoothieIngredient(ingredient)), 
        // removeSmoothieIngredient: (ingredient) => dispatch(removeSmoothieIngredient(ingredient))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
