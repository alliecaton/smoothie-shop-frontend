import React, { Component } from 'react';
import Ingredient from './Ingredient'



class Smoothie extends Component {

    renderIngredients = () => {
        return this.props.smoothieIngredients.map((ingredient) => (
            <div><Ingredient ingredient={ingredient} key={ingredient.id} /></div>
        ))
    }

    render() {
        return (
            <div>
                <h3>Current Ingredients: </h3>
                    <ul>
                        {this.renderIngredients()}
                    </ul>
            </div>
        );
    }
}

export default Smoothie;
