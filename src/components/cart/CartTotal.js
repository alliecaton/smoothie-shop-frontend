import React from 'react';

const cartTotal = (props) => {
    return (
        <div>
            <h5> Checkout Total: {props.totalPrice} </h5>
        </div>
    );
}

export default cartTotal;
