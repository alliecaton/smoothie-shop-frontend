import React, { Component } from 'react';
import Ingredient from './Ingredient'
import image from '../../images/coffee-cup.png'
import CurrentIngredients from './CurrentIngredients'



class Smoothie extends Component {

    renderIngredients = () => {
        return this.props.smoothieIngredients.map((ingredient) => (
            <div><CurrentIngredients ingredient={ingredient} key={ingredient.id} /></div>
        ))
    }

    render() {
        return (
            <div className="smoothie-wrapper">
                <h3>Current Ingredients: </h3>
                <div className="container-image">
                    <img className="cup" src={image} />
                    <ul className="ings">
                        {this.renderIngredients()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Smoothie;
