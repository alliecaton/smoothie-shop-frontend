import React, { Component } from 'react';
import CartItem from './CartItem'
import Button from 'react-bootstrap/Button';


class CartList extends Component {

    state = {items: this.props.items}

    renderItems = () => {
        return this.props.items.map((item) => (
           <div className="cart-list">
                <div className="x-button"><Button onClick={this.handleClick} value={item.id} variant="outline-danger">X</Button >{' '}</div>
                <div className="cart-item"><CartItem item={item} key={item.name} /></div>
            </div>
        ))
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState( prevState => ({
            items: prevState.items.filter(item => item.id !== e.target.value )
        }));
        
        this.props.removeCartItem(e.target.value)

    }

    render() {
        return (
            <div>
                <h5>Order:</h5>
                {this.renderItems()}
            </div>
        );
    }
}

export default CartList;
