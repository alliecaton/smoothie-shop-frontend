import React from 'react';
import { Col } from 'react-bootstrap';

const Ingredient = (props) => {
    return (
        <div className="unchecked">
            <Col >
            <h4>{props.ingredient.name} {props.ingredient.price}</h4>
            {/* <img className="ingredient-image" src={props.ingredient.image_url} /> */}
            </Col >
        </div>
    );
}

export default Ingredient;
