import React, { Component } from 'react';
import CartItem from './CartItem'
import Button from 'react-bootstrap/Button';
import { Scrollbars } from 'react-custom-scrollbars';


class CartList extends Component {

    state = {items: this.props.items}

    renderItems = () => {
        return this.props.items.map((item) => (
           <div className="cart-list">
                <span className="x-button"><Button onClick={this.handleClick} value={item.id} variant="outline-danger">X</Button >{' '}</span>
                <span>Item Price: </span>
                <span className="ingredient-price">{`$${item.itemPrice}`}</span>
                <span className="cart-item"><CartItem item={item} key={item.id} /></span>
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
                <Scrollbars style={{ height: 500 }}>
                <h5>Order:</h5>
                    {this.renderItems()}
                </Scrollbars>
            </div>
        );
    }
}

export default CartList;
