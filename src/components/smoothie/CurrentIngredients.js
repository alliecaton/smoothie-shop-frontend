import React from 'react';

const CurrentIngredients = (props) => {
    return (
        <div>
            <img className="current-ingredient-image" src={props.ingredient.image_url} />
        </div>
    );
}

export default CurrentIngredients;
