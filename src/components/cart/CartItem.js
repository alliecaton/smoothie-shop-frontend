import React from 'react';

const CartItem = (props) => {
    return (
        // show img instead of name here
        <div>
            {props.item.map(ingredient => (
            <span>
                {`  ${ingredient.name}, ${ingredient.price}`} || 
            </span>
        ))}
        </div>
    );
}

export default CartItem;
