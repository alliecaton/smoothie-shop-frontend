import React, { Component } from 'react';
import CartItem from './CartItem'


class CartList extends Component {

    state = {items: this.props.items}

    renderItems = () => {
        return this.props.items.map((item) => (
            <li><CartItem item={item} key={item.name} /><button onClick={this.handleClick} value={item.id} >X</button></li>
        ))
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        this.setState( prevState => ({
            items: prevState.items.filter(item => item.id !== e.target.value )
        }));
        
        this.props.removeCartItem(e.target.value)

    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h5>Order:</h5>
                {this.renderItems()}
            </div>
        );
    }
}

export default CartList;
