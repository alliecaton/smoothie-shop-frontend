import React from 'react';

const CartItem = (props) => {
    return (
        <>
            {props.item.ingredients.map(ingredient => (
            <img className="cart-image" alt={ingredient.name} src={ingredient.image_url} />
        ))}
        </>
    );
}

export default CartItem;
