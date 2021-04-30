import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchIngredients } from '../../actions/smoothieActions.js'
import Ingredient from './Ingredient.js'

class Ingredients extends Component {

    componentDidMount() {
        this.props.fetchIngredients()
    }

    render() {
        console.log('props in render',this.props)
        return (
            <div>
                an ingredient
                <Ingredient />
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

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
