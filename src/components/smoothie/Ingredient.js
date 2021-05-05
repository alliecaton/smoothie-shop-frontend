import React from 'react';
import { Col } from 'react-bootstrap';

const Ingredient = (props) => {
    return (
        <Col md="auto">
        <div className="unchecked">
            <div className="ing-info">
                <h4 className="ingredient-name">{props.ingredient.name}</h4>
                <h5>{`$${props.ingredient.price}0`}</h5>
            </div>
            <div className="ingredient-image">
                <img src={props.ingredient.image_url} />
            </div>
        </div>
        </Col >
    );
}

export default Ingredient;
