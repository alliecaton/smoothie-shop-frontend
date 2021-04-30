import React, { Component } from 'react';
import Smoothie from '../components/smoothie/Smoothie'
import SmoothieCreator from '../components/smoothie/SmoothieCreator'
import { connect } from 'react-redux'
import { fetchIngredients, updateSmoothieIngredients } from '../actions/smoothieActions.js'

class SmoothieContainer extends Component {
    render() {
        return (
            <div>
                <Smoothie smoothieIngredients={this.props.smoothieIngredients} />
                <SmoothieCreator 
                    fetchIngredients={this.props.fetchIngredients} 
                    ingredients={this.props.ingredients} 
                    updateSmoothieIngredients={this.props.updateSmoothieIngredients}    
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
        updateSmoothieIngredients: (ingredient) => dispatch(updateSmoothieIngredients(ingredient))
})

export default connect(mapStateToProps, mapDispatchToProps)(SmoothieContainer);
