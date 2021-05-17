import React from 'react';
import { Col } from 'react-bootstrap';

const Ingredient = (props) => {
    return (
        <Col md="auto">
            <img className="ingredient-image" src={props.ingredient.image_url} />
            <h4 className="ingredient-name">{props.ingredient.name}</h4>
            <p className="ingredient-price">{`$${props.ingredient.price}0`}</p>
        </Col >
    );
}

export default Ingredient;
