import React, { Component } from 'react';
import Ingredient from './Ingredient'
import { connect } from 'react-redux'
import { addCartItem } from '../../actions/cartActions'
import { Col } from 'react-bootstrap';
import Errors from '../shared/Errors.js'
class SmoothieCreator extends Component {
    
    state = { smoothieIngredients: [], error: '' }

    componentDidMount() {
        this.props.fetchIngredients()
    }

    renderIngredients = () => {
        return this.props.ingredients.map((ingredient) => (
            <div key={ingredient.id} >
                <label htmlFor={ingredient.id} ><Ingredient ingredient={ingredient} key={ingredient.id} /></label>
                <input type="checkbox" id={ingredient.id} value={ingredient.id} name={ingredient.id} onChange={(e) => this.handleSelectionChange(e)} /><br></br>
            </div>
        ))
    }

    //refactor this ew
    handleSelectionChange = (e) => {
        let addedIng = this.props.ingredients.find( ing => `${ing.id}` === e.target.value )
        if (e.target.checked) {
            this.setState( prevState => ({
                smoothieIngredients: [...prevState.smoothieIngredients, addedIng]
            }));
            this.props.addSmoothieIngredient(addedIng)
        } else if (!e.target.checked) {
            this.setState( prevState => ({
                smoothieIngredients: prevState.smoothieIngredients.filter(ingredient => ingredient.id !== addedIng.id )
            }));
            this.props.removeSmoothieIngredient(addedIng.id)
        }
    }
  
    handleSubmit = (e) => {
        e.preventDefault();
            if (this.state.smoothieIngredients.length > 0) {
                this.props.addCartItem(this.state.smoothieIngredients )
                this.setState({smoothieIngredients: []})
                this.props.removeAllIngredients()
            } else {
                this.setState({
                    ...this.state, 
                    error: 'Please select at least one ingredient'
                })
            }
    }

    render() {

        return (
            <div>
                <Col>
                <form>
                    <h3>Select Ingredients:</h3>
                    {this.renderIngredients()}
                    {this.state.error}<br></br>
                    <input onClick={(e)=> this.handleSubmit(e)} type="reset" value="Add Smoothie to Cart!" />
                </form>
                </Col>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addCartItem: (item) => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(SmoothieCreator);
