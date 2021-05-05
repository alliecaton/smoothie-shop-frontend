import React, { Component } from 'react';
import Ingredient from './Ingredient'
import image from '../../images/coffee-cup.png'



class Smoothie extends Component {

    renderIngredients = () => {
        return this.props.smoothieIngredients.map((ingredient) => (
            <div ><Ingredient ingredient={ingredient} key={ingredient.id} /></div>
        ))
    }

    render() {
        return (
            <div>
                <h3>Current Ingredients: </h3>
                <div className="container-image">
                    <img src={image} />
                    <ul className="ings">
                        {this.renderIngredients()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Smoothie;
