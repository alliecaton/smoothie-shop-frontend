import React, { Component } from 'react';
import Smoothie from '../components/smoothie/Smoothie'
import SmoothieCreator from '../components/smoothie/SmoothieCreator'
import { connect } from 'react-redux'
import { fetchIngredients, addSmoothieIngredient, removeSmoothieIngredient } from '../actions/smoothieActions.js'

class SmoothieContainer extends Component {
    render() {
        return (
            <div>
                <Smoothie smoothieIngredients={this.props.smoothieIngredients} />
                <SmoothieCreator 
                    fetchIngredients={this.props.fetchIngredients} 
                    ingredients={this.props.ingredients} 
                    addSmoothieIngredient={this.props.addSmoothieIngredient}
                    removeSmoothieIngredient={this.props.removeSmoothieIngredient}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ingredients: state.smoothieReducer.ingredients,
    smoothieIngredients: state.smoothieReducer.smoothieIngredients
})

const mapDispatchToProps = dispatch => ({
        fetchIngredients: () => dispatch(fetchIngredients()),
        addSmoothieIngredient: (ingredient) => dispatch(addSmoothieIngredient(ingredient)), 
        removeSmoothieIngredient: (ingredient) => dispatch(removeSmoothieIngredient(ingredient))
})

export default connect(mapStateToProps, mapDispatchToProps)(SmoothieContainer);
