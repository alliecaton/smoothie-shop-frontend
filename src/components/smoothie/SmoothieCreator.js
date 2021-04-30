import React, { Component } from 'react';
import Ingredient from './Ingredient'
import { connect } from 'react-redux'
import { fetchIngredients } from '../../actions/smoothieActions.js'


class SmoothieCreator extends Component {
    
    state = { smoothieIngredients: [] }

    componentDidMount() {
        this.props.fetchIngredients()
    }

    renderIngredients = () => {
        return this.props.ingredients.map((ingredient) => (
            <div key={ingredient.id} >
                <label htmlFor={ingredient.id} ><Ingredient ingredient={ingredient} key={ingredient.id} /></label>
                <input type="checkbox" id={ingredient.id} value={ingredient.id} onChange={(e) => this.handleSelectionChange(e)} /><br></br>
            </div>
        ))
    }

    handleSelectionChange = (e) => {
        this.setState( prevState => ({
            smoothieIngredients: [...prevState.smoothieIngredients, e.target.value]
        }));
    }
  
    // handleSubmit = (e) => {
    //   e.preventDefault();
    //   this.props.addRestaurant(this.state.text)
    //   this.setState({ text: ''})
    // }

    render() {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={(e)=> this.handleSubmit(e)}>
                    <h3>Select Ingredients:</h3>
                    {this.renderIngredients()}

                    <input type="submit" value="Add Smoothie to Cart!" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ingredients: state.smoothieReducer.ingredients
})

const mapDispatchToProps = dispatch => {
    return {
        fetchIngredients: () => dispatch(fetchIngredients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmoothieCreator);
