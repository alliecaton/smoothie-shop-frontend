import React, { Component } from 'react';
import Smoothie from '../components/smoothie/Smoothie'
import SmoothieCreator from '../components/smoothie/SmoothieCreator'
import { connect } from 'react-redux'
import { fetchIngredients, addSmoothieIngredient, removeSmoothieIngredient, removeAllIngredients } from '../actions/smoothieActions.js'

class SmoothieContainer extends Component {


    render() {
        return (
            <div className="smoothie-container">
                <SmoothieCreator 
                    fetchIngredients={this.props.fetchIngredients} 
                    ingredients={this.props.ingredients} 
                    addSmoothieIngredient={this.props.addSmoothieIngredient}
                    removeSmoothieIngredient={this.props.removeSmoothieIngredient}
                    removeAllIngredients={this.props.removeAllIngredients}
                />
                <Smoothie smoothieIngredients={this.props.smoothieIngredients} />
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
        removeSmoothieIngredient: (ingredient) => dispatch(removeSmoothieIngredient(ingredient)),
        removeAllIngredients: () => dispatch(removeAllIngredients())
})

export default connect(mapStateToProps, mapDispatchToProps)(SmoothieContainer);
