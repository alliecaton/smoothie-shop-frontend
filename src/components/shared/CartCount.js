import React, { Component } from 'react';
import { connect } from 'react-redux'


class CartCount extends Component {
    render() {
        return (
            <div>
                {this.props.items.length}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.cartReducer.cartItems
})

export default connect(mapStateToProps)(CartCount);

