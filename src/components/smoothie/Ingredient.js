import React from 'react';
import { Col } from 'react-bootstrap';

const Ingredient = (props) => {
    return (
        <div className="ingredient-box">
            <Col >
            <h4>{props.ingredient.name}</h4>
            {/* <img className="ingredient-image" src={props.ingredient.image_url} /> */}
            </Col >
        </div>
    );
}

export default Ingredient;
