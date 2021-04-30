import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchIngredients } from '../../actions/smoothieActions.js'
import Ingredient from './Ingredient.js'

class Ingredients extends Component {

    componentDidMount() {
        console.log('props', this.props)
        this.props.fetchIngredients()
    }

    render() {
        console.log(this.props.ingredients)
        return (
            <div>
                an ingredient
                <Ingredient />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchIngredients: () => dispatch(fetchIngredients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
