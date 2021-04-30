import React from 'react';

const Ingredient = (props) => {
    return (
        <div className="ingredient-box">
            <h4>{props.ingredient.name}</h4>
            {/* <img className="ingredient-image" src={props.ingredient.image_url} /> */}
        </div>
    );
}

export default Ingredient;
