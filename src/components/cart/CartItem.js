import React from 'react';

const CartItem = (props) => {
    return (
        // show img instead of name here
        
        <div className="item-wrapper">
            {props.item.ingredients.map(ingredient => (
            <span>
                {`${ingredient.name}  `}
            </span>
        ))}
        </div>
    );
}

export default CartItem;
