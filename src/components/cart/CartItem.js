import React from 'react';

const CartItem = (props) => {
    return (
        <>
            {props.item.ingredients.map(ingredient => (
            <img key={ingredient.id} className="cart-image" alt={ingredient.name} src={ingredient.image_url} />
        ))}
        </>
    );
}

export default CartItem;
