import React, { Component } from 'react';
import Ingredient from './Ingredient'
import { Col, Row } from 'react-bootstrap';


class Smoothie extends Component {

    state = { smoothieIngredients: this.props.smoothieIngredients }

    renderIngredients = () => {
        return this.props.smoothieIngredients.map((ingredient) => (
            <li key={ingredient.id}><Ingredient ingredient={ingredient} key={ingredient.id} /></li>
        ))
    }

    render() {
        return (
            <div>

                Current Ingredients: 
                    <ul>
                    {this.renderIngredients()}
                    </ul>
            </div>
        );
    }
}

export default Smoothie;
