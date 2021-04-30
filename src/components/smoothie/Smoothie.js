import React, { Component } from 'react';
import Ingredient from './Ingredient'

class Smoothie extends Component {

    state = { smoothieIngredients: this.props.smoothieIngredients }

    renderIngredients = () => {
        return this.props.smoothieIngredients.map((ingredient) => (
            <li><Ingredient ingredient={ingredient} key={ingredient.id} /></li>
        ))
    }

    // renderIngredients = () => {
    //     return this.props.ingredients.map((ingredient) => (
    //         <div key={ingredient.id} >
    //             <label htmlFor={ingredient.id} ><Ingredient ingredient={ingredient} key={ingredient.id} /></label>
    //             <input type="checkbox" id={ingredient.id} value={ingredient.id} onChange={(e) => this.handleSelectionChange(e)} /><br></br>
    //         </div>
    //     ))
    // }

    render() {
        console.log(this.props)
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
